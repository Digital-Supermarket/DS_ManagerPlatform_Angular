import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ItemRoutingModule,
  routedComponents,
} from 'src/app/item/item-routing.module';
import { ItemListFilterComponent } from 'src/app/item/list/filter/item-list-filter.component';
import { ItemListTableComponent } from 'src/app/item/list/table/item-list-table.component';
import { ItemListToolbarComponent } from 'src/app/item/list/toolbar/item-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemViewToolbarComponent } from 'src/app/item/view/item-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ItemImporterService } from 'src/app/item/importer/item-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ItemListFilterComponent,
    ItemListTableComponent,
    ItemListToolbarComponent,
    ItemViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ItemRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ItemImporterService,
    },
  ],
})
export class ItemModule {}
