import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { DepartmentApi } from 'src/app/department/department.api';
import { DepartmentListService } from 'src/app/department/list/department-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class DepartmentDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private departmentListService: DepartmentListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await DepartmentApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.department.destroy.success'),
      );

      this.router.navigate(['/department']);

      await this.departmentListService.doFetch(
        this.departmentListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await DepartmentApi.destroyAll(ids);
      this.loading = false;

      this.departmentListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.department.destroyAll.success'),
      );

      this.router.navigate(['/department']);

      return this.departmentListService.doFetch(
        this.departmentListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
