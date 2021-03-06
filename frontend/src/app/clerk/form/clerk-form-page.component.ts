import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { ClerkFormPageService } from 'src/app/clerk/form/clerk-form-page.service';

@Component({
  selector: 'app-clerk-form-page',
  templateUrl: './clerk-form-page.component.html',
})
export class ClerkFormPageComponent implements OnInit {
  constructor(
    private service: ClerkFormPageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  async ngOnInit() {
    if (this.isEditing) {
      await this.service.doFind(
        this.route.snapshot.paramMap.get('id'),
      );
    } else {
      this.service.doNew();
    }
  }

  get isEditing() {
    return this.route.snapshot.paramMap.has('id');
  }

  get findLoading() {
    return this.service.findLoading;
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.clerk.menu'), '/clerk'],
    [
      this.isEditing
        ? i18n('entities.clerk.edit.title')
        : i18n('entities.clerk.new.title'),
    ],
  ];

  doSave(payload) {
    if (this.isEditing) {
      return this.service.doUpdate(
        payload.id,
        payload.values,
      );
    } else {
      return this.service.doCreate(payload.values);
    }
  }

  doCancel() {
    this.router.navigate(['/clerk']);
  }
}
