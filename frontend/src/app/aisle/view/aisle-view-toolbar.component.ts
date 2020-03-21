import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AisleViewService } from 'src/app/aisle/view/aisle-view.service';
import { AisleService } from 'src/app/aisle/aisle.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { AisleDestroyService } from 'src/app/aisle/destroy/aisle-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-aisle-view-toolbar',
  templateUrl: './aisle-view-toolbar.component.html',
})
export class AisleViewToolbarComponent {
  constructor(
    public service: AisleViewService,
    private aisleService: AisleService,
    private destroyService: AisleDestroyService,
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
    return this.aisleService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.aisleService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.aisleService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
