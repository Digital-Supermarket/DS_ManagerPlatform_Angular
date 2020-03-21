import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ItemListService } from 'src/app/item/list/item-list.service';
import { ItemService } from 'src/app/item/item.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ItemDestroyService } from 'src/app/item/destroy/item-destroy.service';

@Component({
  selector: 'app-item-list-toolbar',
  templateUrl: './item-list-toolbar.component.html',
})
export class ItemListToolbarComponent {
  constructor(
    public service: ItemListService,
    private itemService: ItemService,
    private destroyService: ItemDestroyService,
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
    return this.itemService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.itemService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.itemService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.itemService.hasPermissionToImport;
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
