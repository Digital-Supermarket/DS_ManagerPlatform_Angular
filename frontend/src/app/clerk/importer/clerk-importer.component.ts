import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-clerk-importer',
  templateUrl: './clerk-importer.component.html',
})
export class ClerkImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.clerk.menu'), '/clerk'],
    [i18n('entities.clerk.importer.title')],
  ];
}
