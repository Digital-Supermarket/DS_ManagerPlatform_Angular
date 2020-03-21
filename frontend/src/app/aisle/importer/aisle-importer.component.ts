import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-aisle-importer',
  templateUrl: './aisle-importer.component.html',
})
export class AisleImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.aisle.menu'), '/aisle'],
    [i18n('entities.aisle.importer.title')],
  ];
}
