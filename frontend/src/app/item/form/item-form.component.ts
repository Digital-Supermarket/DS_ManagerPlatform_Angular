import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemModel } from 'src/app/item/item-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
})
export class ItemFormComponent implements OnInit {
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
    return ItemModel.fields;
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
        this.fields.product,
        this.fields.expiryDate,
      ],
      this.formBuilder,
    );
  }
}
