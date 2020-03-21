import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ShoppingListListComponent } from 'src/app/shopping-list/list/shopping-list-list.component';
import { ShoppingListViewComponent } from 'src/app/shopping-list/view/shopping-list-view.component';
import { ShoppingListImporterComponent } from 'src/app/shopping-list/importer/shopping-list-importer.component';
import { ShoppingListFormPageComponent } from 'src/app/shopping-list/form/shopping-list-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ShoppingListFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.shoppingListEdit,
        },
      },
      {
        path: 'new',
        component: ShoppingListFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.shoppingListCreate,
        },
      },
      {
        path: 'import',
        component: ShoppingListImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.shoppingListImport,
        },
      },
      {
        path: ':id',
        component: ShoppingListViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.shoppingListRead,
        },
      },
      {
        path: '',
        component: ShoppingListListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.shoppingListRead,
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
export class ShoppingListRoutingModule {}

export const routedComponents = [
  ShoppingListListComponent,
  ShoppingListFormPageComponent,
  ShoppingListViewComponent,
  ShoppingListImporterComponent,
];
