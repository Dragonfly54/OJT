import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashcontentComponent } from 'src/app/shared/components/dashcontent/dashcontent.component';
import { ProductComponent } from 'src/app/shared/components/product/product.component';
import { BarcodeComponent } from 'src/app/shared/components/barcode/barcode.component';
import { SalesComponent } from 'src/app/shared/components/sales/sales.component';
import { PosComponent } from 'src/app/shared/components/pos/pos.component';
import { UsersComponent } from 'src/app/shared/components/users/users.component';
import { CustomersComponent } from 'src/app/shared/components/customers/customers.component';
import { InventoryReportComponent } from 'src/app/shared/components/inventory-report/inventory-report.component';
import { InvoiceReportComponent } from 'src/app/shared/components/invoice-report/invoice-report.component';
import { GeneralSettingsComponent } from 'src/app/shared/components/general-settings/general-settings.component';
import { AdminControlComponent } from 'src/app/shared/components/admin-control/admin-control.component';
import { ItemAppetizersComponent } from 'src/app/shared/components/item-appetizers/item-appetizers.component';
import { ItemSavoryWafflesComponent } from 'src/app/shared/components/item-savory-waffles/item-savory-waffles.component';
import { ItemSweetWafflesComponent } from 'src/app/shared/components/item-sweet-waffles/item-sweet-waffles.component';
import { ItemSaladsComponent } from 'src/app/shared/components/item-salads/item-salads.component';
import { ItemRiceDishesComponent } from 'src/app/shared/components/item-rice-dishes/item-rice-dishes.component';
import { ItemHotDrinksComponent } from 'src/app/shared/components/item-hot-drinks/item-hot-drinks.component';
import { ItemColdDrinksComponent } from 'src/app/shared/components/item-cold-drinks/item-cold-drinks.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashcontent', pathMatch: 'full' },
      { path: 'dashcontent', component: DashcontentComponent },
      { path: 'product', component: ProductComponent },
      { path: 'invoice-report', component: InvoiceReportComponent },
      { path: 'barcode', component: BarcodeComponent },
      { path: 'sales', component: SalesComponent },
      {
        path: 'pos',
        component: PosComponent,
        children: [
          { path: '', redirectTo: 'item-appetizers', pathMatch: 'full' },
          { path: 'item-appetizers', component: ItemAppetizersComponent },
          {
            path: 'item-savory-waffles',
            component: ItemSavoryWafflesComponent,
          },
          {
            path: 'item-sweet-waffles',
            component: ItemSweetWafflesComponent,
          },
          {
            path: 'item-salads',
            component: ItemSaladsComponent,
          },
          {
            path: 'item-rice-dishes',
            component: ItemRiceDishesComponent,
          },
          {
            path: 'item-hot-drinks',
            component: ItemHotDrinksComponent,
          },
          {
            path: 'item-cold-drinks',
            component: ItemColdDrinksComponent,
          },
        ],
      },
      { path: 'users', component: UsersComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'inventory-report', component: InventoryReportComponent },
      { path: 'general-settings', component: GeneralSettingsComponent },
      { path: 'admin-control', component: AdminControlComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
