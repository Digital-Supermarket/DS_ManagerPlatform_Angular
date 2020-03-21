import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ShoppingListApi } from 'src/app/shopping-list/shopping-list.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-shopping-list-form-modal',
  templateUrl: './shopping-list-form-modal.component.html',
})
export class ShoppingListFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ShoppingListFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ShoppingListApi.create(values);
      const record = await ShoppingListApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.shoppingList.create.success'),
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
