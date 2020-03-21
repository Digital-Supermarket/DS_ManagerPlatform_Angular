import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ClerkListComponent } from 'src/app/clerk/list/clerk-list.component';
import { ClerkViewComponent } from 'src/app/clerk/view/clerk-view.component';
import { ClerkImporterComponent } from 'src/app/clerk/importer/clerk-importer.component';
import { ClerkFormPageComponent } from 'src/app/clerk/form/clerk-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ClerkFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clerkEdit,
        },
      },
      {
        path: 'new',
        component: ClerkFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clerkCreate,
        },
      },
      {
        path: 'import',
        component: ClerkImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clerkImport,
        },
      },
      {
        path: ':id',
        component: ClerkViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clerkRead,
        },
      },
      {
        path: '',
        component: ClerkListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.clerkRead,
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
export class ClerkRoutingModule {}

export const routedComponents = [
  ClerkListComponent,
  ClerkFormPageComponent,
  ClerkViewComponent,
  ClerkImporterComponent,
];
