import { Component, Input } from '@angular/core';
import { IamNewFormModalService } from '../form/iam-new-form-modal.service';
import { IamService } from '../iam.service';

@Component({
  selector: 'app-iam-user-form-field',
  templateUrl: './iam-user-form-field.component.html',
})
export class IamUserFormFieldComponent {
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
    public service: IamNewFormModalService,
    public iamService: IamService,
  ) {}

  public get hasPermissionToCreate() {
    return this.iamService.hasPermissionToCreate;
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
