import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-item-importer',
  templateUrl: './item-importer.component.html',
})
export class ItemImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.item.menu'), '/item'],
    [i18n('entities.item.importer.title')],
  ];
}
