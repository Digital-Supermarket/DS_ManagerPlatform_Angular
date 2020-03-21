import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ClerkRoutingModule,
  routedComponents,
} from 'src/app/clerk/clerk-routing.module';
import { ClerkListFilterComponent } from 'src/app/clerk/list/filter/clerk-list-filter.component';
import { ClerkListTableComponent } from 'src/app/clerk/list/table/clerk-list-table.component';
import { ClerkListToolbarComponent } from 'src/app/clerk/list/toolbar/clerk-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClerkViewToolbarComponent } from 'src/app/clerk/view/clerk-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ClerkImporterService } from 'src/app/clerk/importer/clerk-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ClerkListFilterComponent,
    ClerkListTableComponent,
    ClerkListToolbarComponent,
    ClerkViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ClerkRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ClerkImporterService,
    },
  ],
})
export class ClerkModule {}
