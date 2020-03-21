import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClerkModel } from 'src/app/clerk/clerk-model';
import { ClerkViewService } from 'src/app/clerk/view/clerk-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-clerk-view',
  templateUrl: './clerk-view.component.html',
})
export class ClerkViewComponent implements OnInit {
  constructor(
    private service: ClerkViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ClerkModel.presenter(row, fieldName);
  }

  get fields() {
    return ClerkModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.clerk.menu'), '/clerk'],
    [i18n('entities.clerk.view.title')],
  ];
}
