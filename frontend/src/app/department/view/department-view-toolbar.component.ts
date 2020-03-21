import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { DepartmentViewService } from 'src/app/department/view/department-view.service';
import { DepartmentService } from 'src/app/department/department.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { DepartmentDestroyService } from 'src/app/department/destroy/department-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-department-view-toolbar',
  templateUrl: './department-view-toolbar.component.html',
})
export class DepartmentViewToolbarComponent {
  constructor(
    public service: DepartmentViewService,
    private departmentService: DepartmentService,
    private destroyService: DepartmentDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
  }

  get hasPermissionToDestroy() {
    return this.departmentService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.departmentService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.departmentService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
