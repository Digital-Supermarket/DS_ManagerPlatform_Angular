import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { IamEditFormComponent } from 'src/app/iam/form/iam-edit-form.component';
import { IamImporterComponent } from 'src/app/iam/importer/iam-importer.component';
import { IamListComponent } from 'src/app/iam/list/iam-list.component';
import { IamViewComponent } from 'src/app/iam/view/iam-view.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { Permissions } from 'src/security/permissions';
import { IamNewFormPageComponent } from './form/iam-new-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: IamEditFormComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.iamEdit,
        },
      },
      {
        path: 'new',
        component: IamNewFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.iamCreate,
        },
      },
      {
        path: 'import',
        component: IamImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.iamImport,
        },
      },
      {
        path: ':id',
        component: IamViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.iamRead,
        },
      },
      {
        path: '',
        component: IamListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.iamRead,
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
export class IamRoutingModule {}

export const routedComponents = [
  IamListComponent,
  IamNewFormPageComponent,
  IamEditFormComponent,
  IamViewComponent,
  IamImporterComponent,
];
