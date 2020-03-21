import { Component } from '@angular/core';
import { DepartmentListService } from 'src/app/department/list/department-list.service';
import { DepartmentService } from 'src/app/department/department.service';
import { DepartmentModel } from 'src/app/department/department-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { DepartmentDestroyService } from 'src/app/department/destroy/department-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-department-list-table',
  templateUrl: './department-list-table.component.html',
})
export class DepartmentListTableComponent {
  constructor(
    public service: DepartmentListService,
    public destroyService: DepartmentDestroyService,
    public departmentService: DepartmentService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return DepartmentModel.presenter(row, fieldName);
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
    return this.departmentService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.departmentService.hasPermissionToDestroy;
  }

  get fields() {
    return DepartmentModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.aisles.name,
      this.fields.managedBy.name,

      '_actions',
    ];
  }
}
