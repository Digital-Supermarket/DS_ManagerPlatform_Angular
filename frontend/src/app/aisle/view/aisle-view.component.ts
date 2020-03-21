import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AisleModel } from 'src/app/aisle/aisle-model';
import { AisleViewService } from 'src/app/aisle/view/aisle-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-aisle-view',
  templateUrl: './aisle-view.component.html',
})
export class AisleViewComponent implements OnInit {
  constructor(
    private service: AisleViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return AisleModel.presenter(row, fieldName);
  }

  get fields() {
    return AisleModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.aisle.menu'), '/aisle'],
    [i18n('entities.aisle.view.title')],
  ];
}
