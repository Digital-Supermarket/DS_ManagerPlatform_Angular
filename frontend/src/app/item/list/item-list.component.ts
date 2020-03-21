import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.item.menu')],
  ];
}
