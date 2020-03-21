import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ProductApi } from 'src/app/product/product.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-product-form-modal',
  templateUrl: './product-form-modal.component.html',
})
export class ProductFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ProductFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ProductApi.create(values);
      const record = await ProductApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.product.create.success'),
      );

      if (this.dialogRef) {
        this.dialogRef.close(record);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  doCancel() {
    this.dialogRef.close();
  }
}
