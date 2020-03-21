import { Component } from '@angular/core';
import { AisleListService } from 'src/app/aisle/list/aisle-list.service';
import { AisleService } from 'src/app/aisle/aisle.service';
import { AisleModel } from 'src/app/aisle/aisle-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AisleDestroyService } from 'src/app/aisle/destroy/aisle-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-aisle-list-table',
  templateUrl: './aisle-list-table.component.html',
})
export class AisleListTableComponent {
  constructor(
    public service: AisleListService,
    public destroyService: AisleDestroyService,
    public aisleService: AisleService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return AisleModel.presenter(row, fieldName);
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
    return this.aisleService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.aisleService.hasPermissionToDestroy;
  }

  get fields() {
    return AisleModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.item.name,
      this.fields.clerk.name,

      '_actions',
    ];
  }
}
