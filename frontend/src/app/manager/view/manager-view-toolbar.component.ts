import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ManagerViewService } from 'src/app/manager/view/manager-view.service';
import { ManagerService } from 'src/app/manager/manager.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ManagerDestroyService } from 'src/app/manager/destroy/manager-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-manager-view-toolbar',
  templateUrl: './manager-view-toolbar.component.html',
})
export class ManagerViewToolbarComponent {
  constructor(
    public service: ManagerViewService,
    private managerService: ManagerService,
    private destroyService: ManagerDestroyService,
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
    return this.managerService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.managerService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.managerService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
