import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ManagerRoutingModule,
  routedComponents,
} from 'src/app/manager/manager-routing.module';
import { ManagerListFilterComponent } from 'src/app/manager/list/filter/manager-list-filter.component';
import { ManagerListTableComponent } from 'src/app/manager/list/table/manager-list-table.component';
import { ManagerListToolbarComponent } from 'src/app/manager/list/toolbar/manager-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManagerViewToolbarComponent } from 'src/app/manager/view/manager-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ManagerImporterService } from 'src/app/manager/importer/manager-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ManagerListFilterComponent,
    ManagerListTableComponent,
    ManagerListToolbarComponent,
    ManagerViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ManagerRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ManagerImporterService,
    },
  ],
})
export class ManagerModule {}
