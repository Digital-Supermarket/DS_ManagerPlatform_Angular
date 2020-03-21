import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ClerkApi } from 'src/app/clerk/clerk.api';
import { ClerkListService } from 'src/app/clerk/list/clerk-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ClerkDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private clerkListService: ClerkListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ClerkApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.clerk.destroy.success'),
      );

      this.router.navigate(['/clerk']);

      await this.clerkListService.doFetch(
        this.clerkListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ClerkApi.destroyAll(ids);
      this.loading = false;

      this.clerkListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.clerk.destroyAll.success'),
      );

      this.router.navigate(['/clerk']);

      return this.clerkListService.doFetch(
        this.clerkListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
