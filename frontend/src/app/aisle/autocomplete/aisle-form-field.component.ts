import { Component, Input } from '@angular/core';
import { AisleFormModalService } from 'src/app/aisle/form/aisle-form-modal.service';
import { AisleService } from 'src/app/aisle/aisle.service';

@Component({
  selector: 'app-aisle-form-field',
  templateUrl: './aisle-form-field.component.html',
})
export class AisleFormFieldComponent {
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
    public service: AisleFormModalService,
    public aisleService: AisleService,
  ) {}

  public get hasPermissionToCreate() {
    return this.aisleService.hasPermissionToCreate;
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
