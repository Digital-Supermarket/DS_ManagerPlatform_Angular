import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { ItemListService } from 'src/app/item/list/item-list.service';
import { ItemModel } from 'src/app/item/item-model';

@Component({
  selector: 'app-item-list-filter',
  templateUrl: './item-list-filter.component.html',
})
export class ItemListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;

  constructor(
    private service: ItemListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return ItemModel.fields;
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
        this.fields.product,
        this.fields.expiryDateRange,
      ],
      this.formBuilder,
    );
  }
}
