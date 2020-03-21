import { Component, Input } from '@angular/core';
import { DepartmentFormModalService } from 'src/app/department/form/department-form-modal.service';
import { DepartmentService } from 'src/app/department/department.service';

@Component({
  selector: 'app-department-form-field',
  templateUrl: './department-form-field.component.html',
})
export class DepartmentFormFieldComponent {
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
    public service: DepartmentFormModalService,
    public departmentService: DepartmentService,
  ) {}

  public get hasPermissionToCreate() {
    return this.departmentService.hasPermissionToCreate;
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
