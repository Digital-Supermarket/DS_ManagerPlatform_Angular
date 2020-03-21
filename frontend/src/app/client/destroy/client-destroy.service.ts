import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ClientApi } from 'src/app/client/client.api';
import { ClientListService } from 'src/app/client/list/client-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ClientDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private clientListService: ClientListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ClientApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.client.destroy.success'),
      );

      this.router.navigate(['/client']);

      await this.clientListService.doFetch(
        this.clientListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ClientApi.destroyAll(ids);
      this.loading = false;

      this.clientListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.client.destroyAll.success'),
      );

      this.router.navigate(['/client']);

      return this.clientListService.doFetch(
        this.clientListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
