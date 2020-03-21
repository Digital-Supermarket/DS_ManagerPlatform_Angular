import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/app/layout/layout.module';
import {
  ProductRoutingModule,
  routedComponents,
} from 'src/app/product/product-routing.module';
import { ProductListFilterComponent } from 'src/app/product/list/filter/product-list-filter.component';
import { ProductListTableComponent } from 'src/app/product/list/table/product-list-table.component';
import { ProductListToolbarComponent } from 'src/app/product/list/toolbar/product-list-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductViewToolbarComponent } from 'src/app/product/view/product-view-toolbar.component';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { ProductImporterService } from 'src/app/product/importer/product-importer.service';
import { AppFormAutocompleteModule } from 'src/app/app-form-autocomplete.module';

@NgModule({
  declarations: [
    ...routedComponents,
    ProductListFilterComponent,
    ProductListTableComponent,
    ProductListToolbarComponent,
    ProductViewToolbarComponent,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    LayoutModule,
    AppFormAutocompleteModule,
  ],
  exports: [],
  providers: [
    {
      provide: ImporterService,
      useClass: ProductImporterService,
    },
  ],
})
export class ProductModule {}
