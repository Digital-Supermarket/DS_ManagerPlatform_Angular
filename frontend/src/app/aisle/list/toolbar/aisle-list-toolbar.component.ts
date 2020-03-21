import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AisleListService } from 'src/app/aisle/list/aisle-list.service';
import { AisleService } from 'src/app/aisle/aisle.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { AisleDestroyService } from 'src/app/aisle/destroy/aisle-destroy.service';

@Component({
  selector: 'app-aisle-list-toolbar',
  templateUrl: './aisle-list-toolbar.component.html',
})
export class AisleListToolbarComponent {
  constructor(
    public service: AisleListService,
    private aisleService: AisleService,
    private destroyService: AisleDestroyService,
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
    return this.aisleService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.aisleService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.aisleService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.aisleService.hasPermissionToImport;
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
