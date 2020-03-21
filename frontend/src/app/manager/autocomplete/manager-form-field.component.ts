import { Component, Input } from '@angular/core';
import { ManagerFormModalService } from 'src/app/manager/form/manager-form-modal.service';
import { ManagerService } from 'src/app/manager/manager.service';

@Component({
  selector: 'app-manager-form-field',
  templateUrl: './manager-form-field.component.html',
})
export class ManagerFormFieldComponent {
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
    public service: ManagerFormModalService,
    public managerService: ManagerService,
  ) {}

  public get hasPermissionToCreate() {
    return this.managerService.hasPermissionToCreate;
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
