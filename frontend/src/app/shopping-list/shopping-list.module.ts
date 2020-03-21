import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ShoppingListRoutingModule,
  routedComponents,
} from 'src/app/shopping-list/shopping-list-routing.module';
import { ShoppingListListFilterComponent } from 'src/app/shopping-list/list/filter/shopping-list-list-filter.component';
import { ShoppingListListTableComponent } from 'src/app/shopping-list/list/table/shopping-list-list-table.component';
import { ShoppingListListToolbarComponent } from 'src/app/shopping-list/list/toolbar/shopping-list-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListViewToolbarComponent } from 'src/app/shopping-list/view/shopping-list-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ShoppingListImporterService } from 'src/app/shopping-list/importer/shopping-list-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ShoppingListListFilterComponent,
    ShoppingListListTableComponent,
    ShoppingListListToolbarComponent,
    ShoppingListViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ShoppingListRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ShoppingListImporterService,
    },
  ],
})
export class ShoppingListModule {}
