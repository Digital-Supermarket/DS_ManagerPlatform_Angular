import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ItemListComponent } from 'src/app/item/list/item-list.component';
import { ItemViewComponent } from 'src/app/item/view/item-view.component';
import { ItemImporterComponent } from 'src/app/item/importer/item-importer.component';
import { ItemFormPageComponent } from 'src/app/item/form/item-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ItemFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.itemEdit,
        },
      },
      {
        path: 'new',
        component: ItemFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.itemCreate,
        },
      },
      {
        path: 'import',
        component: ItemImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.itemImport,
        },
      },
      {
        path: ':id',
        component: ItemViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.itemRead,
        },
      },
      {
        path: '',
        component: ItemListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.itemRead,
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
export class ItemRoutingModule {}

export const routedComponents = [
  ItemListComponent,
  ItemFormPageComponent,
  ItemViewComponent,
  ItemImporterComponent,
];
