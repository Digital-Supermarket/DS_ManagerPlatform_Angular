import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { ProductListService } from 'src/app/product/list/product-list.service';
import { ProductModel } from 'src/app/product/product-model';

@Component({
  selector: 'app-product-list-filter',
  templateUrl: './product-list-filter.component.html',
})
export class ProductListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;

  constructor(
    private service: ProductListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return ProductModel.fields;
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
        this.fields.code,
        this.fields.name,
        this.fields.priceRange,
        this.fields.weightRange,
        this.fields.size,
      ],
      this.formBuilder,
    );
  }
}
