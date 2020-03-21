import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { DepartmentApi } from 'src/app/department/department.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-department-form-modal',
  templateUrl: './department-form-modal.component.html',
})
export class DepartmentFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      DepartmentFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await DepartmentApi.create(values);
      const record = await DepartmentApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.department.create.success'),
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
