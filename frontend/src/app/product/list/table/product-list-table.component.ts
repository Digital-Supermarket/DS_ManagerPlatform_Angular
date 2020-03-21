import { Component } from '@angular/core';
import { ProductListService } from 'src/app/product/list/product-list.service';
import { ProductService } from 'src/app/product/product.service';
import { ProductModel } from 'src/app/product/product-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProductDestroyService } from 'src/app/product/destroy/product-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
})
export class ProductListTableComponent {
  constructor(
    public service: ProductListService,
    public destroyService: ProductDestroyService,
    public productService: ProductService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ProductModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.productService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.productService.hasPermissionToDestroy;
  }

  get fields() {
    return ProductModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.code.name,
      this.fields.name.name,
      this.fields.price.name,
      this.fields.weight.name,
      this.fields.size.name,
      this.fields.photos.name,

      '_actions',
    ];
  }
}
