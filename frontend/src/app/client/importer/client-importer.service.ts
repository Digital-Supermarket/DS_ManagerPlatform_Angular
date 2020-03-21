import { Injectable } from '@angular/core';
import { ClientApi } from 'src/app/client/client.api';
import clientImporterFields from 'src/app/client/importer/client-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ClientImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ClientApi.import,
      clientImporterFields,
      i18n('entities.client.importer.fileName'),
      i18n('entities.client.importer.hint'),
    );
  }
}
