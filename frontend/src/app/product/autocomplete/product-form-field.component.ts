import { Component, Input } from '@angular/core';
import { ProductFormModalService } from 'src/app/product/form/product-form-modal.service';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-product-form-field',
  templateUrl: './product-form-field.component.html',
})
export class ProductFormFieldComponent {
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
    public service: ProductFormModalService,
    public productService: ProductService,
  ) {}

  public get hasPermissionToCreate() {
    return this.productService.hasPermissionToCreate;
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
