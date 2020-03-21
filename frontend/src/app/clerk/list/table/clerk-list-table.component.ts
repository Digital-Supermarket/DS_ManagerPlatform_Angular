import { Component } from '@angular/core';
import { ClerkListService } from 'src/app/clerk/list/clerk-list.service';
import { ClerkService } from 'src/app/clerk/clerk.service';
import { ClerkModel } from 'src/app/clerk/clerk-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ClerkDestroyService } from 'src/app/clerk/destroy/clerk-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-clerk-list-table',
  templateUrl: './clerk-list-table.component.html',
})
export class ClerkListTableComponent {
  constructor(
    public service: ClerkListService,
    public destroyService: ClerkDestroyService,
    public clerkService: ClerkService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ClerkModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.clerkService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.clerkService.hasPermissionToDestroy;
  }

  get fields() {
    return ClerkModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.shiftIsDay.name,
      this.fields.departments.name,

      '_actions',
    ];
  }
}
