import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashcontentComponent } from 'src/app/shared/components/dashcontent/dashcontent.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { ProductComponent } from 'src/app/shared/components/product/product.component';
import { BarcodeComponent } from 'src/app/shared/components/barcode/barcode.component';
import { SalesComponent } from 'src/app/shared/components/sales/sales.component';
import { PosComponent } from 'src/app/shared/components/pos/pos.component';
import { UsersComponent } from 'src/app/shared/components/users/users.component';
import { CustomersComponent } from 'src/app/shared/components/customers/customers.component';
import { InventoryReportComponent } from 'src/app/shared/components/inventory-report/inventory-report.component';
import { InvoiceReportComponent } from 'src/app/shared/components/invoice-report/invoice-report.component';
import { GeneralSettingsComponent } from 'src/app/shared/components/general-settings/general-settings.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductModalComponent } from 'src/app/shared/components/add-product-modal/add-product-modal.component';
import { AdminControlComponent } from 'src/app/shared/components/admin-control/admin-control.component';
import { ItemAppetizersComponent } from 'src/app/shared/components/item-appetizers/item-appetizers.component';
import { ItemSavoryWafflesComponent } from 'src/app/shared/components/item-savory-waffles/item-savory-waffles.component';
import { ItemSweetWafflesComponent } from 'src/app/shared/components/item-sweet-waffles/item-sweet-waffles.component';
import { ItemSaladsComponent } from 'src/app/shared/components/item-salads/item-salads.component';
import { ItemRiceDishesComponent } from 'src/app/shared/components/item-rice-dishes/item-rice-dishes.component';
import { ItemHotDrinksComponent } from 'src/app/shared/components/item-hot-drinks/item-hot-drinks.component';
import { ItemColdDrinksComponent } from 'src/app/shared/components/item-cold-drinks/item-cold-drinks.component';
import { AddCustomerModalComponent } from 'src/app/shared/components/add-customer-modal/add-customer-modal.component';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { AddUserModalComponent } from 'src/app/shared/components/add-user-modal/add-user-modal.component';
import { AddNewItemComponent } from 'src/app/shared/components/add-new-item/add-new-item.component';
import { ReceiptComponent } from 'src/app/shared/components/receipt/receipt.component';
import { EditPictureModalComponent } from 'src/app/shared/components/edit-picture-modal/edit-picture-modal.component';
import { EditNameModalComponent } from 'src/app/shared/components/edit-name-modal/edit-name-modal.component';
import { EditGenderModalComponent } from 'src/app/shared/components/edit-gender-modal/edit-gender-modal.component';
import { EditPsswwordModalComponent } from 'src/app/shared/components/edit-psswword-modal/edit-psswword-modal.component';
import { EditEmailModalComponent } from 'src/app/shared/components/edit-email-modal/edit-email-modal.component';
import { EditPhoneModalComponent } from 'src/app/shared/components/edit-phone-modal/edit-phone-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashcontentComponent,
    NavbarComponent,
    SidebarComponent,
    ProductComponent,
    BarcodeComponent,
    SalesComponent,
    PosComponent,
    ItemAppetizersComponent,
    ItemSavoryWafflesComponent,
    ItemSweetWafflesComponent,
    ItemSaladsComponent,
    ItemRiceDishesComponent,
    ItemHotDrinksComponent,
    ItemColdDrinksComponent,
    UsersComponent,
    CustomersComponent,
    InventoryReportComponent,
    InvoiceReportComponent,
    GeneralSettingsComponent,
    AddProductModalComponent,
    AddNewItemComponent,
    AddUserModalComponent,
    AddCustomerModalComponent,
    AdminControlComponent,
    EditPictureModalComponent,
    EditNameModalComponent,
    EditGenderModalComponent,
    EditPsswwordModalComponent,
    EditEmailModalComponent,
    EditPhoneModalComponent,
    LoginComponent,
    ReceiptComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
