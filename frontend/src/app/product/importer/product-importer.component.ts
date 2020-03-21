import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-product-importer',
  templateUrl: './product-importer.component.html',
})
export class ProductImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.product.menu'), '/product'],
    [i18n('entities.product.importer.title')],
  ];
}
