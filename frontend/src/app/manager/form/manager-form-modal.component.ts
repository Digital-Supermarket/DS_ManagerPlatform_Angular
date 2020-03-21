import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ManagerApi } from 'src/app/manager/manager.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-manager-form-modal',
  templateUrl: './manager-form-modal.component.html',
})
export class ManagerFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ManagerFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ManagerApi.create(values);
      const record = await ManagerApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.manager.create.success'),
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
