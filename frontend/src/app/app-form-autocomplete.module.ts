import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { IamNewFormComponent } from 'src/app/iam/form/iam-new-form.component';
import { IamNewFormModalComponent } from 'src/app/iam/form/iam-new-form-modal.component';
import { IamNewFormModalService } from 'src/app/iam/form/iam-new-form-modal.service';
import { IamUserFormFieldComponent } from 'src/app/iam/autocomplete/iam-user-form-field.component';

import { ClientFormFieldComponent } from 'src/app/client/autocomplete/client-form-field.component';
import { ClientFormModalComponent } from 'src/app/client/form/client-form-modal.component';
import { ClientFormModalService } from 'src/app/client/form/client-form-modal.service';
import { ClientFormComponent } from 'src/app/client/form/client-form.component';

import { ProductFormFieldComponent } from 'src/app/product/autocomplete/product-form-field.component';
import { ProductFormModalComponent } from 'src/app/product/form/product-form-modal.component';
import { ProductFormModalService } from 'src/app/product/form/product-form-modal.service';
import { ProductFormComponent } from 'src/app/product/form/product-form.component';

import { ItemFormFieldComponent } from 'src/app/item/autocomplete/item-form-field.component';
import { ItemFormModalComponent } from 'src/app/item/form/item-form-modal.component';
import { ItemFormModalService } from 'src/app/item/form/item-form-modal.service';
import { ItemFormComponent } from 'src/app/item/form/item-form.component';

import { ShoppingListFormFieldComponent } from 'src/app/shopping-list/autocomplete/shopping-list-form-field.component';
import { ShoppingListFormModalComponent } from 'src/app/shopping-list/form/shopping-list-form-modal.component';
import { ShoppingListFormModalService } from 'src/app/shopping-list/form/shopping-list-form-modal.service';
import { ShoppingListFormComponent } from 'src/app/shopping-list/form/shopping-list-form.component';

import { AisleFormFieldComponent } from 'src/app/aisle/autocomplete/aisle-form-field.component';
import { AisleFormModalComponent } from 'src/app/aisle/form/aisle-form-modal.component';
import { AisleFormModalService } from 'src/app/aisle/form/aisle-form-modal.service';
import { AisleFormComponent } from 'src/app/aisle/form/aisle-form.component';

import { ClerkFormFieldComponent } from 'src/app/clerk/autocomplete/clerk-form-field.component';
import { ClerkFormModalComponent } from 'src/app/clerk/form/clerk-form-modal.component';
import { ClerkFormModalService } from 'src/app/clerk/form/clerk-form-modal.service';
import { ClerkFormComponent } from 'src/app/clerk/form/clerk-form.component';

import { ManagerFormFieldComponent } from 'src/app/manager/autocomplete/manager-form-field.component';
import { ManagerFormModalComponent } from 'src/app/manager/form/manager-form-modal.component';
import { ManagerFormModalService } from 'src/app/manager/form/manager-form-modal.service';
import { ManagerFormComponent } from 'src/app/manager/form/manager-form.component';

import { DepartmentFormFieldComponent } from 'src/app/department/autocomplete/department-form-field.component';
import { DepartmentFormModalComponent } from 'src/app/department/form/department-form-modal.component';
import { DepartmentFormModalService } from 'src/app/department/form/department-form-modal.service';
import { DepartmentFormComponent } from 'src/app/department/form/department-form.component';

/**
 * This module exists to avoid circular dependencies, because autocompletes and forms
 * from different modules may use each others.
 */
@NgModule({
  declarations: [
    IamNewFormComponent,
    IamUserFormFieldComponent,
    IamNewFormModalComponent,

    ClientFormComponent,
    ClientFormFieldComponent,
    ClientFormModalComponent,

    ProductFormComponent,
    ProductFormFieldComponent,
    ProductFormModalComponent,

    ItemFormComponent,
    ItemFormFieldComponent,
    ItemFormModalComponent,

    ShoppingListFormComponent,
    ShoppingListFormFieldComponent,
    ShoppingListFormModalComponent,

    AisleFormComponent,
    AisleFormFieldComponent,
    AisleFormModalComponent,

    ClerkFormComponent,
    ClerkFormFieldComponent,
    ClerkFormModalComponent,

    ManagerFormComponent,
    ManagerFormFieldComponent,
    ManagerFormModalComponent,

    DepartmentFormComponent,
    DepartmentFormFieldComponent,
    DepartmentFormModalComponent,
  ],
  imports: [SharedModule],
  exports: [
    IamNewFormComponent,
    IamUserFormFieldComponent,

    ClientFormComponent,
    ClientFormFieldComponent,

    ProductFormComponent,
    ProductFormFieldComponent,

    ItemFormComponent,
    ItemFormFieldComponent,

    ShoppingListFormComponent,
    ShoppingListFormFieldComponent,

    AisleFormComponent,
    AisleFormFieldComponent,

    ClerkFormComponent,
    ClerkFormFieldComponent,

    ManagerFormComponent,
    ManagerFormFieldComponent,

    DepartmentFormComponent,
    DepartmentFormFieldComponent,
  ],
  providers: [
    IamNewFormModalService,
    ClientFormModalService,

    ProductFormModalService,

    ItemFormModalService,

    ShoppingListFormModalService,

    AisleFormModalService,

    ClerkFormModalService,

    ManagerFormModalService,

    DepartmentFormModalService,
  ],
  entryComponents: [
    IamNewFormModalComponent,
    ClientFormModalComponent,

    ProductFormModalComponent,

    ItemFormModalComponent,

    ShoppingListFormModalComponent,

    AisleFormModalComponent,

    ClerkFormModalComponent,

    ManagerFormModalComponent,

    DepartmentFormModalComponent,
  ],
})
export class AppFormAutocompleteModule {}
