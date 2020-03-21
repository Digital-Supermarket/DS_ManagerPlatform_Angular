import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { IamFormService } from './iam-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iam-new-form-page',
  templateUrl: './iam-new-form-page.component.html',
})
export class IamNewFormPageComponent implements OnInit {
  constructor(
    private service: IamFormService,
    private router: Router,
  ) {}

  async ngOnInit() {
    this.service.doNew();
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('iam.title'), '/iam'],
    [i18n('iam.new.title')],
  ];

  doSave(payload) {
    return this.service.doAdd(payload.values);
  }

  doCancel() {
    this.router.navigate(['/iam']);
  }
}
