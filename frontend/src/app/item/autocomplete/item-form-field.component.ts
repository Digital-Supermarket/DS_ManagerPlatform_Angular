import { Component, Input } from '@angular/core';
import { ItemFormModalService } from 'src/app/item/form/item-form-modal.service';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-item-form-field',
  templateUrl: './item-form-field.component.html',
})
export class ItemFormFieldComponent {
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
    public service: ItemFormModalService,
    public itemService: ItemService,
  ) {}

  public get hasPermissionToCreate() {
    return this.itemService.hasPermissionToCreate;
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
