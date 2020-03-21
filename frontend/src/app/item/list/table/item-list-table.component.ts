import { Component } from '@angular/core';
import { ItemListService } from 'src/app/item/list/item-list.service';
import { ItemService } from 'src/app/item/item.service';
import { ItemModel } from 'src/app/item/item-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ItemDestroyService } from 'src/app/item/destroy/item-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-item-list-table',
  templateUrl: './item-list-table.component.html',
})
export class ItemListTableComponent {
  constructor(
    public service: ItemListService,
    public destroyService: ItemDestroyService,
    public itemService: ItemService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ItemModel.presenter(row, fieldName);
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
    return this.itemService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.itemService.hasPermissionToDestroy;
  }

  get fields() {
    return ItemModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.product.name,
      this.fields.expiryDate.name,

      '_actions',
    ];
  }
}
