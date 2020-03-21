import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { ClientListService } from 'src/app/client/list/client-list.service';
import { ClientModel } from 'src/app/client/client-model';

@Component({
  selector: 'app-client-list-filter',
  templateUrl: './client-list-filter.component.html',
})
export class ClientListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;

  constructor(
    private service: ClientListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return ClientModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  doFilter() {
    if (!this.form.valid) {
      return;
    }

    const values = this.schema.cast(this.form.value);
    return this.service.doFetch(values);
  }

  buildForm() {
    const { filter } = this.service;
    const params = this.route.snapshot.queryParams;
    this.form = this.schema.buildForm(filter, params);
  }

  doReset() {
    this.form = this.schema.buildForm();
    this.doFilter();
  }

  private buildSchema() {
    this.schema = new FilterSchema(
      [
        this.fields.id,
        this.fields.name,
        this.fields.phoneNumber,
        this.fields.email,
        this.fields.password,
      ],
      this.formBuilder,
    );
  }
}
