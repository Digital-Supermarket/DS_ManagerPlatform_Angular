import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-shopping-list-list',
  templateUrl: './shopping-list-list.component.html',
})
export class ShoppingListListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.shoppingList.menu')],
  ];
}
