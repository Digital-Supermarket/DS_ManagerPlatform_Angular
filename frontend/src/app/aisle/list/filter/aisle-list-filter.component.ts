import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { AisleListService } from 'src/app/aisle/list/aisle-list.service';
import { AisleModel } from 'src/app/aisle/aisle-model';

@Component({
  selector: 'app-aisle-list-filter',
  templateUrl: './aisle-list-filter.component.html',
})
export class AisleListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;

  constructor(
    private service: AisleListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return AisleModel.fields;
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
      ],
      this.formBuilder,
    );
  }
}
