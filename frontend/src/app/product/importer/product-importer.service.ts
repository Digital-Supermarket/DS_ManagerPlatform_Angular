import { Injectable } from '@angular/core';
import { ProductApi } from 'src/app/product/product.api';
import productImporterFields from 'src/app/product/importer/product-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ProductImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ProductApi.import,
      productImporterFields,
      i18n('entities.product.importer.fileName'),
      i18n('entities.product.importer.hint'),
    );
  }
}
