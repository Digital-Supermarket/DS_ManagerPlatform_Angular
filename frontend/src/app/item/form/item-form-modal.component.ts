import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ItemApi } from 'src/app/item/item.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-item-form-modal',
  templateUrl: './item-form-modal.component.html',
})
export class ItemFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ItemFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ItemApi.create(values);
      const record = await ItemApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.item.create.success'),
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
