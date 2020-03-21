import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ClientApi } from 'src/app/client/client.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-client-form-modal',
  templateUrl: './client-form-modal.component.html',
})
export class ClientFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ClientFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ClientApi.create(values);
      const record = await ClientApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.client.create.success'),
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
