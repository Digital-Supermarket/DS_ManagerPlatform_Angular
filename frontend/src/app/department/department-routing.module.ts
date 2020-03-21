import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { DepartmentListComponent } from 'src/app/department/list/department-list.component';
import { DepartmentViewComponent } from 'src/app/department/view/department-view.component';
import { DepartmentImporterComponent } from 'src/app/department/importer/department-importer.component';
import { DepartmentFormPageComponent } from 'src/app/department/form/department-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: DepartmentFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentEdit,
        },
      },
      {
        path: 'new',
        component: DepartmentFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentCreate,
        },
      },
      {
        path: 'import',
        component: DepartmentImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentImport,
        },
      },
      {
        path: ':id',
        component: DepartmentViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentRead,
        },
      },
      {
        path: '',
        component: DepartmentListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.departmentRead,
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
export class DepartmentRoutingModule {}

export const routedComponents = [
  DepartmentListComponent,
  DepartmentFormPageComponent,
  DepartmentViewComponent,
  DepartmentImporterComponent,
];
