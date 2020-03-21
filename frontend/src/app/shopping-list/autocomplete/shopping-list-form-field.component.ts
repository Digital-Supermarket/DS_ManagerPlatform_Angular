import { Component, Input } from '@angular/core';
import { ShoppingListFormModalService } from 'src/app/shopping-list/form/shopping-list-form-modal.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-form-field',
  templateUrl: './shopping-list-form-field.component.html',
})
export class ShoppingListFormFieldComponent {
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
    public service: ShoppingListFormModalService,
    public shoppingListService: ShoppingListService,
  ) {}

  public get hasPermissionToCreate() {
    return this.shoppingListService.hasPermissionToCreate;
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
