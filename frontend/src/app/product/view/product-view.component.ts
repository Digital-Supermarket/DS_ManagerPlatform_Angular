import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/product/product-model';
import { ProductViewService } from 'src/app/product/view/product-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
})
export class ProductViewComponent implements OnInit {
  constructor(
    private service: ProductViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ProductModel.presenter(row, fieldName);
  }

  get fields() {
    return ProductModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.product.menu'), '/product'],
    [i18n('entities.product.view.title')],
  ];
}
