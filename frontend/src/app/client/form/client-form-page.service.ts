import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApi } from 'src/app/client/client.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ClientFormPageService {
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

      this.record = await ClientApi.find(id);
      this.findLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.findLoading = true;
      this.router.navigate(['/client']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await ClientApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.client.create.success'),
      );

      this.router.navigate(['/client']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await ClientApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.client.update.success'),
      );

      this.router.navigate(['/client']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
