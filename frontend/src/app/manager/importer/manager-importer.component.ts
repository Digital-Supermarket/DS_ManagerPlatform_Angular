import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-manager-importer',
  templateUrl: './manager-importer.component.html',
})
export class ManagerImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.manager.menu'), '/manager'],
    [i18n('entities.manager.importer.title')],
  ];
}
