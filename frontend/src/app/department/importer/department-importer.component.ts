import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-department-importer',
  templateUrl: './department-importer.component.html',
})
export class DepartmentImporterComponent {
  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.department.menu'), '/department'],
    [i18n('entities.department.importer.title')],
  ];
}
