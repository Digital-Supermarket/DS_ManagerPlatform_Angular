import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ClerkApi } from 'src/app/clerk/clerk.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-clerk-form-modal',
  templateUrl: './clerk-form-modal.component.html',
})
export class ClerkFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ClerkFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ClerkApi.create(values);
      const record = await ClerkApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.clerk.create.success'),
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
