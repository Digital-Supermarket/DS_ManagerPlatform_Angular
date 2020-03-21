import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ClientViewService } from 'src/app/client/view/client-view.service';
import { ClientService } from 'src/app/client/client.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ClientDestroyService } from 'src/app/client/destroy/client-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-client-view-toolbar',
  templateUrl: './client-view-toolbar.component.html',
})
export class ClientViewToolbarComponent {
  constructor(
    public service: ClientViewService,
    private clientService: ClientService,
    private destroyService: ClientDestroyService,
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
    return this.clientService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.clientService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.clientService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
