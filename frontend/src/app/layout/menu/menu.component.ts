import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { IamService } from 'src/app/iam/iam.service';
import { ClientService } from 'src/app/client/client.service';
import { ProductService } from 'src/app/product/product.service';
import { ItemService } from 'src/app/item/item.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { AisleService } from 'src/app/aisle/aisle.service';
import { ClerkService } from 'src/app/clerk/clerk.service';
import { ManagerService } from 'src/app/manager/manager.service';
import { DepartmentService } from 'src/app/department/department.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(
    public auditLogService: AuditLogService,
    public settingsService: SettingsService,
    public iamService: IamService,
    public clientService: ClientService,
    public productService: ProductService,
    public itemService: ItemService,
    public shoppingListService: ShoppingListService,
    public aisleService: AisleService,
    public clerkService: ClerkService,
    public managerService: ManagerService,
    public departmentService: DepartmentService,
  ) {}

  ngOnInit(): void {}
}
