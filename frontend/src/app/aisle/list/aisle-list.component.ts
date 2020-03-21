import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-aisle-list',
  templateUrl: './aisle-list.component.html',
})
export class AisleListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.aisle.menu')],
  ];
}
