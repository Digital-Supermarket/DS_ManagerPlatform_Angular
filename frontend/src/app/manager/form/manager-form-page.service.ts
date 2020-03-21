import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerApi } from 'src/app/manager/manager.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ManagerFormPageService {
  findLoading = false;
  saveLoading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  doNew() {
    this.findLoading = false;
    this.saveLoading = false;
    this.record = null;
  }

  async doFind(id) {
    try {
      this.record = null;
      this.findLoading = true;

      this.record = await ManagerApi.find(id);
      this.findLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.findLoading = true;
      this.router.navigate(['/manager']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await ManagerApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.manager.create.success'),
      );

      this.router.navigate(['/manager']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await ManagerApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.manager.update.success'),
      );

      this.router.navigate(['/manager']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
