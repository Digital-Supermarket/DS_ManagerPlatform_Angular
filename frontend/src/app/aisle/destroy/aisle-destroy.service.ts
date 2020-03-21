import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AisleApi } from 'src/app/aisle/aisle.api';
import { AisleListService } from 'src/app/aisle/list/aisle-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class AisleDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private aisleListService: AisleListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await AisleApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.aisle.destroy.success'),
      );

      this.router.navigate(['/aisle']);

      await this.aisleListService.doFetch(
        this.aisleListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await AisleApi.destroyAll(ids);
      this.loading = false;

      this.aisleListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.aisle.destroyAll.success'),
      );

      this.router.navigate(['/aisle']);

      return this.aisleListService.doFetch(
        this.aisleListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
