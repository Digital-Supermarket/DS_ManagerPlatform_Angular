import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/auth/user-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-iam-new-form',
  templateUrl: './iam-new-form.component.html',
})
export class IamNewFormComponent implements OnInit {
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
    return UserModel.fields;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const values = this.schema.cast(this.form.value);

    if (values.email) {
      values.emails = [values.email];
      delete values.email;
    }

    this.save.emit({ values });
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm();
  }

  get isSingleEmail() {
    return (
      !this.form.value ||
      !this.form.value.emails ||
      this.form.value.emails.length <= 1
    );
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.modal ? this.fields.email : this.fields.emails,
        this.fields.firstName,
        this.fields.lastName,
        this.fields.phoneNumber,
        this.fields.avatarsIam,
        this.fields.rolesRequired,
      ],
      this.formBuilder,
    );
  }
}
