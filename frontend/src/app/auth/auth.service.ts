import { Injectable } from '@angular/core';
import { AuthApi } from 'src/app/auth/auth.api';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { PermissionChecker } from 'src/app/auth/permission-checker';
import { AuthToken } from 'src/app/auth/auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  initializedSubject = new ReplaySubject<boolean>(1);
  currentUser = null;
  loadingEmailConfirmation = false;
  loadingPasswordResetEmail = false;
  loadingUpdateProfile = false;
  loadingVerifyEmail = false;
  loadingPasswordReset = false;
  loading = false;
  errorMessage = null;

  constructor(
    private router: Router,
    private snackbar: Snackbar,
    private errorService: ErrorService,
  ) {}

  hasPermission(permission) {
    if (!this.isSignedIn) {
      return false;
    }

    return new PermissionChecker(this.currentUser).match(
      permission,
    );
  }

  get initialized() {
    return this.initializedSubject
      .pipe(take(1))
      .toPromise();
  }

  get currentUserEmail() {
    return this.currentUser ? this.currentUser.email : null;
  }

  get currentUserFullName() {
    return this.currentUser
      ? this.currentUser.fullName
      : '';
  }

  get isSignedIn() {
    return !!this.currentUser && !!this.currentUser.id;
  }

  get roles() {
    return this.currentUser
      ? this.currentUser.roles || []
      : [];
  }

  get isEmptyPermissions() {
    const roles = this.roles;
    return !roles || !roles.length;
  }

  get currentUserNameOrEmailPrefix() {
    if (!this.currentUser) {
      return '';
    }

    if (
      this.currentUserFullName &&
      this.currentUserFullName.length < 25
    ) {
      return this.currentUserFullName;
    }

    if (this.currentUser.firstName) {
      return this.currentUser.firstName;
    }

    return this.currentUser.email.split('@')[0];
  }

  get currentUserAvatar() {
    if (
      !this.currentUser ||
      !this.currentUser.avatars ||
      !this.currentUser.avatars.length ||
      !this.currentUser.avatars[0].publicUrl
    ) {
      return null;
    }

    return this.currentUser.avatars[0].publicUrl;
  }

  async doInit() {
    try {
      const token = await AuthToken.get();
      let currentUser = null;

      if (token) {
        currentUser = await AuthApi.fetchMe();
      }

      this.currentUser = currentUser || null;
      this.initializedSubject.next(true);
    } catch (error) {
      AuthApi.signout();
      this.router.navigate(['/auth/signin']);
      this.errorService.handle(error);
      this.currentUser = null;
      this.initializedSubject.next(true);
    }
  }

  doClearErrorMessage() {
    this.errorMessage = null;
  }

  async doSendEmailConfirmation() {
    try {
      this.loadingEmailConfirmation = true;
      await AuthApi.sendEmailVerification();

      this.snackbar.success(
        i18n('auth.verificationEmailSuccess'),
      );

      this.loadingEmailConfirmation = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loadingEmailConfirmation = false;
    }
  }

  async doVerifyEmail(token) {
    try {
      this.loadingVerifyEmail = true;
      await AuthApi.verifyEmail(token);
      await this.doRefreshCurrentUser();
      this.snackbar.success(
        i18n('auth.verifyEmail.success'),
      );
      this.router.navigate(['']);
      this.loadingVerifyEmail = false;
    } catch (error) {
      await this.doSignout();
      this.errorService.handle(error);
      this.loadingVerifyEmail = false;
    }
  }

  async doResetPassword(token, password) {
    try {
      this.loadingPasswordReset = true;
      await AuthApi.passwordReset(token, password);
      this.snackbar.success(
        i18n('auth.passwordResetSuccess'),
      );
      this.router.navigate(['']);
      this.loadingPasswordReset = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loadingPasswordReset = false;
    }
  }

  async doSendPasswordResetEmail(email) {
    try {
      this.loadingPasswordResetEmail = true;
      await AuthApi.sendPasswordResetEmail(email);
      this.snackbar.success(
        i18n('auth.passwordResetEmailSuccess'),
      );
      this.loadingPasswordResetEmail = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loadingPasswordResetEmail = false;
    }
  }

  async doRegisterEmailAndPassword(email, password) {
    try {
      this.errorMessage = null;
      this.loading = true;

      const token = await AuthApi.registerWithEmailAndPassword(
        email,
        password,
      );
      AuthToken.set(token, true);

      const currentUser = await AuthApi.fetchMe();
      this.currentUser = currentUser || null;
      this.errorMessage = null;
      this.loading = false;
      this.router.navigate(['']);
    } catch (error) {
      await AuthApi.signout();

      if (this.errorService.errorCode(error) !== 400) {
        this.errorService.handle(error);
      }

      this.currentUser = null;
      this.loading = false;
      this.errorMessage = this.errorService.selectMessage(
        error,
      );
    }
  }

  async doSigninWithEmailAndPassword(
    email,
    password,
    rememberMe,
  ) {
    try {
      this.errorMessage = null;
      this.loading = true;

      let currentUser = null;

      const token = await AuthApi.signinWithEmailAndPassword(
        email,
        password,
      );

      AuthToken.set(token, rememberMe);

      currentUser = await AuthApi.fetchMe();
      this.currentUser = currentUser || null;
      this.errorMessage = null;
      this.loading = false;
      this.router.navigate(['']);
    } catch (error) {
      await AuthApi.signout();

      if (this.errorService.errorCode(error) !== 400) {
        this.errorService.handle(error);
      }

      this.currentUser = null;
      this.errorMessage =
        this.errorService.selectMessage(error) || null;
      this.loading = false;
    }
  }

  async doSignout() {
    try {
      this.errorMessage = null;
      this.loading = true;
      await AuthApi.signout();
      this.currentUser = null;
      this.errorMessage = null;
      this.loading = false;
      this.router.navigate(['/auth/signin']);
    } catch (error) {
      this.errorService.handle(error);
      this.currentUser = null;
      this.errorMessage = null;
      this.loading = false;
    }
  }

  async doRefreshCurrentUser() {
    try {
      const token = await AuthToken.get();

      if (token) {
        this.currentUser = await AuthApi.fetchMe();
      } else {
        this.currentUser = null;
      }
    } catch (error) {
      AuthApi.signout();
      this.errorService.handle(error);
    }
  }

  async doUpdateProfile(
    firstName,
    lastName,
    phoneNumber,
    avatars,
  ) {
    try {
      this.loadingUpdateProfile = true;

      await AuthApi.updateProfile(
        firstName,
        lastName,
        phoneNumber,
        avatars,
      );

      this.loadingUpdateProfile = false;
      await this.doRefreshCurrentUser();
      this.snackbar.success(i18n('auth.profile.success'));
      this.router.navigate(['']);
    } catch (error) {
      this.errorService.handle(error);
      this.loadingUpdateProfile = false;
    }
  }
}
