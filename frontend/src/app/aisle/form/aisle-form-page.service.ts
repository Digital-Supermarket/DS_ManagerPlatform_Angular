import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AisleApi } from 'src/app/aisle/aisle.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class AisleFormPageService {
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

      this.record = await AisleApi.find(id);
      this.findLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.findLoading = true;
      this.router.navigate(['/aisle']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await AisleApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.aisle.create.success'),
      );

      this.router.navigate(['/aisle']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await AisleApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.aisle.update.success'),
      );

      this.router.navigate(['/aisle']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
