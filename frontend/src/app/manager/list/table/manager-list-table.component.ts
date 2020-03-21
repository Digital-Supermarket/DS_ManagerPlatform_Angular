import { Component } from '@angular/core';
import { ManagerListService } from 'src/app/manager/list/manager-list.service';
import { ManagerService } from 'src/app/manager/manager.service';
import { ManagerModel } from 'src/app/manager/manager-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ManagerDestroyService } from 'src/app/manager/destroy/manager-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-manager-list-table',
  templateUrl: './manager-list-table.component.html',
})
export class ManagerListTableComponent {
  constructor(
    public service: ManagerListService,
    public destroyService: ManagerDestroyService,
    public managerService: ManagerService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ManagerModel.presenter(row, fieldName);
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
    return this.managerService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.managerService.hasPermissionToDestroy;
  }

  get fields() {
    return ManagerModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.headOf.name,
      this.fields.departments.name,

      '_actions',
    ];
  }
}
