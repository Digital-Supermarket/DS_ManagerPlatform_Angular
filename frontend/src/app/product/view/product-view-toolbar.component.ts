import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ProductViewService } from 'src/app/product/view/product-view.service';
import { ProductService } from 'src/app/product/product.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ProductDestroyService } from 'src/app/product/destroy/product-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-product-view-toolbar',
  templateUrl: './product-view-toolbar.component.html',
})
export class ProductViewToolbarComponent {
  constructor(
    public service: ProductViewService,
    private productService: ProductService,
    private destroyService: ProductDestroyService,
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
    return this.productService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.productService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.productService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
