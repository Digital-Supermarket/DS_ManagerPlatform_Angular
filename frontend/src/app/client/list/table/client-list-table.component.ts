import { Component } from '@angular/core';
import { ClientListService } from 'src/app/client/list/client-list.service';
import { ClientService } from 'src/app/client/client.service';
import { ClientModel } from 'src/app/client/client-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ClientDestroyService } from 'src/app/client/destroy/client-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-client-list-table',
  templateUrl: './client-list-table.component.html',
})
export class ClientListTableComponent {
  constructor(
    public service: ClientListService,
    public destroyService: ClientDestroyService,
    public clientService: ClientService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ClientModel.presenter(row, fieldName);
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
    return this.clientService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.clientService.hasPermissionToDestroy;
  }

  get fields() {
    return ClientModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.name.name,
      this.fields.phoneNumber.name,
      this.fields.email.name,
      this.fields.password.name,
      this.fields.shoppingLists.name,

      '_actions',
    ];
  }
}
