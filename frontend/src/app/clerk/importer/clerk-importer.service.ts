import { Injectable } from '@angular/core';
import { ClerkApi } from 'src/app/clerk/clerk.api';
import clerkImporterFields from 'src/app/clerk/importer/clerk-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class ClerkImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      ClerkApi.import,
      clerkImporterFields,
      i18n('entities.clerk.importer.fileName'),
      i18n('entities.clerk.importer.hint'),
    );
  }
}
