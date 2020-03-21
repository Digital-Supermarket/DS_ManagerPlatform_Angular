import { Injectable } from '@angular/core';
import { ItemApi } from 'src/app/item/item.api';
import itemImporterFields from 'src/app/item/importer/item-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ItemImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ItemApi.import,
      itemImporterFields,
      i18n('entities.item.importer.fileName'),
      i18n('entities.item.importer.hint'),
    );
  }
}
