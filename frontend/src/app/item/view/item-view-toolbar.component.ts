import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ItemViewService } from 'src/app/item/view/item-view.service';
import { ItemService } from 'src/app/item/item.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ItemDestroyService } from 'src/app/item/destroy/item-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-item-view-toolbar',
  templateUrl: './item-view-toolbar.component.html',
})
export class ItemViewToolbarComponent {
  constructor(
    public service: ItemViewService,
    private itemService: ItemService,
    private destroyService: ItemDestroyService,
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
    return this.itemService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.itemService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.itemService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
