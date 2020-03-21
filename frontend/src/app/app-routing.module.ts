import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/layout/errors/error-404.component';
import { Error403Component } from 'src/app/layout/errors/error-403.component';
import { Error500Component } from 'src/app/layout/errors/error-500.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'iam',
    loadChildren: () => import('./iam/iam.module').then(m => m.IamModule),
  },
  {
    path: 'settings',
    loadChildren:
      () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'audit-log',
    loadChildren:
      () => import('./audit-log/audit-log.module').then(m => m.AuditLogModule),
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then(m => m.ItemModule),
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule),
  },
  {
    path: 'aisle',
    loadChildren: () => import('./aisle/aisle.module').then(m => m.AisleModule),
  },
  {
    path: 'clerk',
    loadChildren: () => import('./clerk/clerk.module').then(m => m.ClerkModule),
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule),
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule),
  },
  { path: '403', component: Error403Component },
  { path: '500', component: Error500Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [
  Error404Component,
  Error403Component,
  Error500Component,
];
