import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  DepartmentRoutingModule,
  routedComponents,
} from 'src/app/department/department-routing.module';
import { DepartmentListFilterComponent } from 'src/app/department/list/filter/department-list-filter.component';
import { DepartmentListTableComponent } from 'src/app/department/list/table/department-list-table.component';
import { DepartmentListToolbarComponent } from 'src/app/department/list/toolbar/department-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentViewToolbarComponent } from 'src/app/department/view/department-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { DepartmentImporterService } from 'src/app/department/importer/department-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    DepartmentListFilterComponent,
    DepartmentListTableComponent,
    DepartmentListToolbarComponent,
    DepartmentViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    DepartmentRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: DepartmentImporterService,
    },
  ],
})
export class DepartmentModule {}
