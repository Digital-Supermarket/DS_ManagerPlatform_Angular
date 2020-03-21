import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-client-importer',
  templateUrl: './client-importer.component.html',
})
export class ClientImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.client.menu'), '/client'],
    [i18n('entities.client.importer.title')],
  ];
}
