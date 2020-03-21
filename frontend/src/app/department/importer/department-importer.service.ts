import { Injectable } from '@angular/core';
import { DepartmentApi } from 'src/app/department/department.api';
import departmentImporterFields from 'src/app/department/importer/department-importer-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentImporterService extends ImporterService {
  constructor(errorService: ErrorService) {
    super(
      errorService,
      DepartmentApi.import,
      departmentImporterFields,
      i18n('entities.department.importer.fileName'),
      i18n('entities.department.importer.hint'),
    );
  }
}
