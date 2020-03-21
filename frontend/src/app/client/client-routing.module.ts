import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ClientListComponent } from 'src/app/client/list/client-list.component';
import { ClientViewComponent } from 'src/app/client/view/client-view.component';
import { ClientImporterComponent } from 'src/app/client/importer/client-importer.component';
import { ClientFormPageComponent } from 'src/app/client/form/client-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ClientFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientEdit,
        },
      },
      {
        path: 'new',
        component: ClientFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientCreate,
        },
      },
      {
        path: 'import',
        component: ClientImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientImport,
        },
      },
      {
        path: ':id',
        component: ClientViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientRead,
        },
      },
      {
        path: '',
        component: ClientListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clientRead,
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
export class ClientRoutingModule {}

export const routedComponents = [
  ClientListComponent,
  ClientFormPageComponent,
  ClientViewComponent,
  ClientImporterComponent,
];
