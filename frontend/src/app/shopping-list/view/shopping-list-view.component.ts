import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListModel } from 'src/app/shopping-list/shopping-list-model';
import { ShoppingListViewService } from 'src/app/shopping-list/view/shopping-list-view.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
})
export class ShoppingListViewComponent implements OnInit {
  constructor(
    private service: ShoppingListViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ShoppingListModel.presenter(row, fieldName);
  }

  get fields() {
    return ShoppingListModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.shoppingList.menu'), '/shopping-list'],
    [i18n('entities.shoppingList.view.title')],
  ];
}
