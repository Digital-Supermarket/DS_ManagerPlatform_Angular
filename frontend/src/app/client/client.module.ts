import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ClientRoutingModule,
  routedComponents,
} from 'src/app/client/client-routing.module';
import { ClientListFilterComponent } from 'src/app/client/list/filter/client-list-filter.component';
import { ClientListTableComponent } from 'src/app/client/list/table/client-list-table.component';
import { ClientListToolbarComponent } from 'src/app/client/list/toolbar/client-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientViewToolbarComponent } from 'src/app/client/view/client-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ClientImporterService } from 'src/app/client/importer/client-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ClientListFilterComponent,
    ClientListTableComponent,
    ClientListToolbarComponent,
    ClientViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ClientRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ClientImporterService,
    },
  ],
})
export class ClientModule {}
