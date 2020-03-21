import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ProductListService } from 'src/app/product/list/product-list.service';
import { ProductService } from 'src/app/product/product.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProductDestroyService } from 'src/app/product/destroy/product-destroy.service';

@Component({
  selector: 'app-product-list-toolbar',
  templateUrl: './product-list-toolbar.component.html',
})
export class ProductListToolbarComponent {
  constructor(
    public service: ProductListService,
    private productService: ProductService,
    private destroyService: ProductDestroyService,
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
    return this.productService.hasPermissionToCreate;
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
