import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-shopping-list-importer',
  templateUrl: './shopping-list-importer.component.html',
})
export class ShoppingListImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.shoppingList.menu'), '/shopping-list'],
    [i18n('entities.shoppingList.importer.title')],
  ];
}
