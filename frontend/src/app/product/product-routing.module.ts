import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ProductListComponent } from 'src/app/product/list/product-list.component';
import { ProductViewComponent } from 'src/app/product/view/product-view.component';
import { ProductImporterComponent } from 'src/app/product/importer/product-importer.component';
import { ProductFormPageComponent } from 'src/app/product/form/product-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ProductFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.productEdit,
        },
      },
      {
        path: 'new',
        component: ProductFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.productCreate,
        },
      },
      {
        path: 'import',
        component: ProductImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.productImport,
        },
      },
      {
        path: ':id',
        component: ProductViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.productRead,
        },
      },
      {
        path: '',
        component: ProductListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.productRead,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductRoutingModule {}

export const routedComponents = [
  ProductListComponent,
  ProductFormPageComponent,
  ProductViewComponent,
  ProductImporterComponent,
];
