import { Injectable } from '@angular/core';
import { AisleApi } from 'src/app/aisle/aisle.api';
import aisleImporterFields from 'src/app/aisle/importer/aisle-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class AisleImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      AisleApi.import,
      aisleImporterFields,
      i18n('entities.aisle.importer.fileName'),
      i18n('entities.aisle.importer.hint'),
    );
  }
}
