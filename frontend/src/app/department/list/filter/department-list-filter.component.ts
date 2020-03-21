import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { DepartmentListService } from 'src/app/department/list/department-list.service';
import { DepartmentModel } from 'src/app/department/department-model';

@Component({
  selector: 'app-department-list-filter',
  templateUrl: './department-list-filter.component.html',
})
export class DepartmentListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;

  constructor(
    private service: DepartmentListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return DepartmentModel.fields;
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
        this.fields.managedBy,
      ],
      this.formBuilder,
    );
  }
}
