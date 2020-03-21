import { Injectable } from '@angular/core';
import { ManagerApi } from 'src/app/manager/manager.api';
import managerImporterFields from 'src/app/manager/importer/manager-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ManagerImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ManagerApi.import,
      managerImporterFields,
      i18n('entities.manager.importer.fileName'),
      i18n('entities.manager.importer.hint'),
    );
  }
}
