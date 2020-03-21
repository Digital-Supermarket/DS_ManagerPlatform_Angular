import { Component, Input } from '@angular/core';
import { ClerkFormModalService } from 'src/app/clerk/form/clerk-form-modal.service';
import { ClerkService } from 'src/app/clerk/clerk.service';

@Component({
  selector: 'app-clerk-form-field',
  templateUrl: './clerk-form-field.component.html',
})
export class ClerkFormFieldComponent {
  @Input() mode = 'single';
  @Input() submitted = false;
  @Input() control;
  @Input() label;
  @Input() required = false;
  @Input() appAutofocus = false;
  @Input() clientSideSearch = false;
  @Input() fetchFn = null;
  @Input() mapperFn = null;
  @Input()
  ngForm: any;
  @Input() showCreate = false;

  constructor(
    public service: ClerkFormModalService,
    public clerkService: ClerkService,
  ) {}

  public get hasPermissionToCreate() {
    return this.clerkService.hasPermissionToCreate;
  }

  public async createModalOpen() {
    const record = await this.service.open();
    if (record) {
      if (this.mode === 'multiple') {
        this.control.setValue([
          ...(this.control.value || []),
          this.mapperFn(record),
        ]);
      } else {
        this.control.setValue(this.mapperFn(record));
      }
    }
  }
}
