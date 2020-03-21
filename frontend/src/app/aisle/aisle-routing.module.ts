import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { AisleListComponent } from 'src/app/aisle/list/aisle-list.component';
import { AisleViewComponent } from 'src/app/aisle/view/aisle-view.component';
import { AisleImporterComponent } from 'src/app/aisle/importer/aisle-importer.component';
import { AisleFormPageComponent } from 'src/app/aisle/form/aisle-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: AisleFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.aisleEdit,
        },
      },
      {
        path: 'new',
        component: AisleFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.aisleCreate,
        },
      },
      {
        path: 'import',
        component: AisleImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.aisleImport,
        },
      },
      {
        path: ':id',
        component: AisleViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.aisleRead,
        },
      },
      {
        path: '',
        component: AisleListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.aisleRead,
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
export class AisleRoutingModule {}

export const routedComponents = [
  AisleListComponent,
  AisleFormPageComponent,
  AisleViewComponent,
  AisleImporterComponent,
];
