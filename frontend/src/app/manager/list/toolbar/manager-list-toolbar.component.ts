import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ManagerListService } from 'src/app/manager/list/manager-list.service';
import { ManagerService } from 'src/app/manager/manager.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ManagerDestroyService } from 'src/app/manager/destroy/manager-destroy.service';

@Component({
  selector: 'app-manager-list-toolbar',
  templateUrl: './manager-list-toolbar.component.html',
})
export class ManagerListToolbarComponent {
  constructor(
    public service: ManagerListService,
    private managerService: ManagerService,
    private destroyService: ManagerDestroyService,
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
    return this.managerService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.managerService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.managerService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.managerService.hasPermissionToImport;
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
