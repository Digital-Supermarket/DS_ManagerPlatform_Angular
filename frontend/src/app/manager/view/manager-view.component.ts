import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerModel } from 'src/app/manager/manager-model';
import { ManagerViewService } from 'src/app/manager/view/manager-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
})
export class ManagerViewComponent implements OnInit {
  constructor(
    private service: ManagerViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ManagerModel.presenter(row, fieldName);
  }

  get fields() {
    return ManagerModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.manager.menu'), '/manager'],
    [i18n('entities.manager.view.title')],
  ];
}
