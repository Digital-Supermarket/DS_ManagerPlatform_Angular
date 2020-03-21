import { Component } from '@angular/core';
import { ShoppingListListService } from 'src/app/shopping-list/list/shopping-list-list.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ShoppingListModel } from 'src/app/shopping-list/shopping-list-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ShoppingListDestroyService } from 'src/app/shopping-list/destroy/shopping-list-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-shopping-list-list-table',
  templateUrl: './shopping-list-list-table.component.html',
})
export class ShoppingListListTableComponent {
  constructor(
    public service: ShoppingListListService,
    public destroyService: ShoppingListDestroyService,
    public shoppingListService: ShoppingListService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ShoppingListModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.shoppingListService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.shoppingListService.hasPermissionToDestroy;
  }

  get fields() {
    return ShoppingListModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.item.name,

      '_actions',
    ];
  }
}
