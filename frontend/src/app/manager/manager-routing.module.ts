import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ManagerListComponent } from 'src/app/manager/list/manager-list.component';
import { ManagerViewComponent } from 'src/app/manager/view/manager-view.component';
import { ManagerImporterComponent } from 'src/app/manager/importer/manager-importer.component';
import { ManagerFormPageComponent } from 'src/app/manager/form/manager-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ManagerFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managerEdit,
        },
      },
      {
        path: 'new',
        component: ManagerFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managerCreate,
        },
      },
      {
        path: 'import',
        component: ManagerImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managerImport,
        },
      },
      {
        path: ':id',
        component: ManagerViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managerRead,
        },
      },
      {
        path: '',
        component: ManagerListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.managerRead,
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
export class ManagerRoutingModule {}

export const routedComponents = [
  ManagerListComponent,
  ManagerFormPageComponent,
  ManagerViewComponent,
  ManagerImporterComponent,
];
