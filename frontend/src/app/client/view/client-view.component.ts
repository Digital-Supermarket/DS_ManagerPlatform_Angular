import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientModel } from 'src/app/client/client-model';
import { ClientViewService } from 'src/app/client/view/client-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
})
export class ClientViewComponent implements OnInit {
  constructor(
    private service: ClientViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ClientModel.presenter(row, fieldName);
  }

  get fields() {
    return ClientModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.client.menu'), '/client'],
    [i18n('entities.client.view.title')],
  ];
}
