import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { DepartmentListService } from 'src/app/department/list/department-list.service';
import { DepartmentService } from 'src/app/department/department.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { DepartmentDestroyService } from 'src/app/department/destroy/department-destroy.service';

@Component({
  selector: 'app-department-list-toolbar',
  templateUrl: './department-list-toolbar.component.html',
})
export class DepartmentListToolbarComponent {
  constructor(
    public service: DepartmentListService,
    private departmentService: DepartmentService,
    private destroyService: DepartmentDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading ||
      this.destroyService.loading
    );
  }

  get destroyButtonTooltip() {
    if (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    ) {
      return i18n('common.mustSelectARow');
    }
  }

  async doDestroyAllSelected() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.departmentService.hasPermissionToCreate;
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

  doExport() {
    return this.service.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows || this.service.loading) {
      return i18n('common.noDataToExport');
    }
  }
}
