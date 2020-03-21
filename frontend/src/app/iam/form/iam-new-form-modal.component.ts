import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';
import { IamApi } from '../iam.api';

@Component({
  selector: 'app-iam-new-form-modal',
  templateUrl: './iam-new-form-modal.component.html',
})
export class IamNewFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      IamNewFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      await IamApi.create(values);

      const { rows } = await IamApi.fetchUsers(
        {
          email: values.emails[0],
        },
        null,
        1,
        0,
      );

      this.saveLoading = false;
      this.snackbar.success(i18n('iam.doAddSuccess'));

      if (this.dialogRef) {
        this.dialogRef.close(rows[0]);
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
