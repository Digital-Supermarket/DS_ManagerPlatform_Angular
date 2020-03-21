import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentModel } from 'src/app/department/department-model';
import { DepartmentViewService } from 'src/app/department/view/department-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
})
export class DepartmentViewComponent implements OnInit {
  constructor(
    private service: DepartmentViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return DepartmentModel.presenter(row, fieldName);
  }

  get fields() {
    return DepartmentModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.department.menu'), '/department'],
    [i18n('entities.department.view.title')],
  ];
}
