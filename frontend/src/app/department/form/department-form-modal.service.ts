import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DepartmentFormModalComponent } from 'src/app/department/form/department-form-modal.component';

@Injectable()
export class DepartmentFormModalService {
  constructor(public dialog: MatDialog) {}

  async open() {
    const dialogRef = this.dialog.open(
      DepartmentFormModalComponent,
      {
        width: '80%',
      },
    );

    return new Promise((resolve) => {
      const subscription = dialogRef
        .afterClosed()
        .subscribe((result) => {
          resolve(result);

          if (subscription && !subscription.closed) {
            subscription.unsubscribe();
          }
        });
    });
  }
}
