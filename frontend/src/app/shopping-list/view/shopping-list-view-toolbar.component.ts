import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ShoppingListViewService } from 'src/app/shopping-list/view/shopping-list-view.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ShoppingListDestroyService } from 'src/app/shopping-list/destroy/shopping-list-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-shopping-list-view-toolbar',
  templateUrl: './shopping-list-view-toolbar.component.html',
})
export class ShoppingListViewToolbarComponent {
  constructor(
    public service: ShoppingListViewService,
    private shoppingListService: ShoppingListService,
    private destroyService: ShoppingListDestroyService,
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
    return this.shoppingListService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.shoppingListService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.shoppingListService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
