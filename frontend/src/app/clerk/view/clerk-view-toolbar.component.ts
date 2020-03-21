import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ClerkViewService } from 'src/app/clerk/view/clerk-view.service';
import { ClerkService } from 'src/app/clerk/clerk.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ClerkDestroyService } from 'src/app/clerk/destroy/clerk-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-clerk-view-toolbar',
  templateUrl: './clerk-view-toolbar.component.html',
})
export class ClerkViewToolbarComponent {
  constructor(
    public service: ClerkViewService,
    private clerkService: ClerkService,
    private destroyService: ClerkDestroyService,
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
    return this.clerkService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.clerkService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.clerkService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
