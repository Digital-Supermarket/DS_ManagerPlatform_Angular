import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ItemApi } from 'src/app/item/item.api';
import { ItemListService } from 'src/app/item/list/item-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ItemDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private itemListService: ItemListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ItemApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.item.destroy.success'),
      );

      this.router.navigate(['/item']);

      await this.itemListService.doFetch(
        this.itemListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ItemApi.destroyAll(ids);
      this.loading = false;

      this.itemListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.item.destroyAll.success'),
      );

      this.router.navigate(['/item']);

      return this.itemListService.doFetch(
        this.itemListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
