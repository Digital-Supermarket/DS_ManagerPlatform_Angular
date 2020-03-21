import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ShoppingListApi } from 'src/app/shopping-list/shopping-list.api';
import { ShoppingListListService } from 'src/app/shopping-list/list/shopping-list-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private shoppingListListService: ShoppingListListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ShoppingListApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.shoppingList.destroy.success'),
      );

      this.router.navigate(['/shopping-list']);

      await this.shoppingListListService.doFetch(
        this.shoppingListListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ShoppingListApi.destroyAll(ids);
      this.loading = false;

      this.shoppingListListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.shoppingList.destroyAll.success'),
      );

      this.router.navigate(['/shopping-list']);

      return this.shoppingListListService.doFetch(
        this.shoppingListListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
