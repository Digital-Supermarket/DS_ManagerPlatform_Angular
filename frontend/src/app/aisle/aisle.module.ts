import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  AisleRoutingModule,
  routedComponents,
} from 'src/app/aisle/aisle-routing.module';
import { AisleListFilterComponent } from 'src/app/aisle/list/filter/aisle-list-filter.component';
import { AisleListTableComponent } from 'src/app/aisle/list/table/aisle-list-table.component';
import { AisleListToolbarComponent } from 'src/app/aisle/list/toolbar/aisle-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AisleViewToolbarComponent } from 'src/app/aisle/view/aisle-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { AisleImporterService } from 'src/app/aisle/importer/aisle-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    AisleListFilterComponent,
    AisleListTableComponent,
    AisleListToolbarComponent,
    AisleViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    AisleRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: AisleImporterService,
    },
  ],
})
export class AisleModule {}
