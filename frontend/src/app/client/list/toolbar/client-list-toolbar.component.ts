import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ClientListService } from 'src/app/client/list/client-list.service';
import { ClientService } from 'src/app/client/client.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ClientDestroyService } from 'src/app/client/destroy/client-destroy.service';

@Component({
  selector: 'app-client-list-toolbar',
  templateUrl: './client-list-toolbar.component.html',
})
export class ClientListToolbarComponent {
  constructor(
    public service: ClientListService,
    private clientService: ClientService,
    private destroyService: ClientDestroyService,
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
    return this.clientService.hasPermissionToCreate;
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
