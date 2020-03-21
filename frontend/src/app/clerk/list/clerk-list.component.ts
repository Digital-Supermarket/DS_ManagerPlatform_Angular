import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-clerk-list',
  templateUrl: './clerk-list.component.html',
})
export class ClerkListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.clerk.menu')],
  ];
}
