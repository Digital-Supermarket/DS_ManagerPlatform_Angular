import { Injectable } from '@angular/core';
import { ShoppingListApi } from 'src/app/shopping-list/shopping-list.api';
import shoppingListImporterFields from 'src/app/shopping-list/importer/shopping-list-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ShoppingListApi.import,
      shoppingListImporterFields,
      i18n('entities.shoppingList.importer.fileName'),
      i18n('entities.shoppingList.importer.hint'),
    );
  }
}
