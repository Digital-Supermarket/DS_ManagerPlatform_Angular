import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ClerkListService } from 'src/app/clerk/list/clerk-list.service';
import { ClerkService } from 'src/app/clerk/clerk.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ClerkDestroyService } from 'src/app/clerk/destroy/clerk-destroy.service';

@Component({
  selector: 'app-clerk-list-toolbar',
  templateUrl: './clerk-list-toolbar.component.html',
})
export class ClerkListToolbarComponent {
  constructor(
    public service: ClerkListService,
    private clerkService: ClerkService,
    private destroyService: ClerkDestroyService,
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
    return this.clerkService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.clerkService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.clerkService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.clerkService.hasPermissionToImport;
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
