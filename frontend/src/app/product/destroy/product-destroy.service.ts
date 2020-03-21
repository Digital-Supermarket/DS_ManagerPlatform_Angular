import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProductApi } from 'src/app/product/product.api';
import { ProductListService } from 'src/app/product/list/product-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ProductDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private productListService: ProductListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ProductApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.product.destroy.success'),
      );

      this.router.navigate(['/product']);

      await this.productListService.doFetch(
        this.productListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ProductApi.destroyAll(ids);
      this.loading = false;

      this.productListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.product.destroyAll.success'),
      );

      this.router.navigate(['/product']);

      return this.productListService.doFetch(
        this.productListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
