import { Component, Input } from '@angular/core';
import { ClientFormModalService } from 'src/app/client/form/client-form-modal.service';
import { ClientService } from 'src/app/client/client.service';

@Component({
  selector: 'app-client-form-field',
  templateUrl: './client-form-field.component.html',
})
export class ClientFormFieldComponent {
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
    public service: ClientFormModalService,
    public clientService: ClientService,
  ) {}

  public get hasPermissionToCreate() {
    return this.clientService.hasPermissionToCreate;
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
