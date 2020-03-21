import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from 'src/app/product/product-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() isEditing;
  @Input() record;
  @Input() saveLoading;
  @Input() modal = false;

  constructor(private formBuilder: FormBuilder) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return ProductModel.fields;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const { id, ...values } = this.schema.cast(
      this.form.value,
    );

    this.save.emit({ id, values });
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm(this.record);
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.id,
        this.fields.code,
        this.fields.name,
        this.fields.price,
        this.fields.weight,
        this.fields.size,
        this.fields.photos,
      ],
      this.formBuilder,
    );
  }
}
