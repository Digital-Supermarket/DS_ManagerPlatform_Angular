import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ShoppingListListService } from 'src/app/shopping-list/list/shopping-list-list.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ShoppingListDestroyService } from 'src/app/shopping-list/destroy/shopping-list-destroy.service';

@Component({
  selector: 'app-shopping-list-list-toolbar',
  templateUrl: './shopping-list-list-toolbar.component.html',
})
export class ShoppingListListToolbarComponent {
  constructor(
    public service: ShoppingListListService,
    private shoppingListService: ShoppingListService,
    private destroyService: ShoppingListDestroyService,
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
    return this.shoppingListService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.shoppingListService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.shoppingListService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.shoppingListService.hasPermissionToImport;
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
