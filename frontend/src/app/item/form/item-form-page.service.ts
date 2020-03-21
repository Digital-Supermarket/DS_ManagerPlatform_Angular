import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ItemApi } from 'src/app/item/item.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ItemFormPageService {
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

      this.record = await ItemApi.find(id);
      this.findLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.findLoading = true;
      this.router.navigate(['/item']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await ItemApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.item.create.success'),
      );

      this.router.navigate(['/item']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await ItemApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.item.update.success'),
      );

      this.router.navigate(['/item']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
