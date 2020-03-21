import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ManagerApi } from 'src/app/manager/manager.api';
import { ManagerListService } from 'src/app/manager/list/manager-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ManagerDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private managerListService: ManagerListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ManagerApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.manager.destroy.success'),
      );

      this.router.navigate(['/manager']);

      await this.managerListService.doFetch(
        this.managerListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ManagerApi.destroyAll(ids);
      this.loading = false;

      this.managerListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.manager.destroyAll.success'),
      );

      this.router.navigate(['/manager']);

      return this.managerListService.doFetch(
        this.managerListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
