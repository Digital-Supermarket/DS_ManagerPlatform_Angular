import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.client.menu')],
  ];
}
