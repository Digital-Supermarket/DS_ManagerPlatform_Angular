import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AisleApi } from 'src/app/aisle/aisle.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-aisle-form-modal',
  templateUrl: './aisle-form-modal.component.html',
})
export class AisleFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      AisleFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await AisleApi.create(values);
      const record = await AisleApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.aisle.create.success'),
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
