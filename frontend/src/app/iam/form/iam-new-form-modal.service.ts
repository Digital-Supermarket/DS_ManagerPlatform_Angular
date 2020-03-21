import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { IamNewFormModalComponent } from './iam-new-form-modal.component';

@Injectable()
export class IamNewFormModalService {
  constructor(public dialog: MatDialog) {}

  async open() {
    const dialogRef = this.dialog.open(
      IamNewFormModalComponent,
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
