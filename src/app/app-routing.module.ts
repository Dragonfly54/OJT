import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  NavigationEnd,
  Router,
  Event as RouterEvent,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { OrderComponent } from './pages/order/order.component';
import { ItemAppetizersComponent } from './shared/components/item-appetizers/item-appetizers.component';
import { ItemColdDrinksComponent } from './shared/components/item-cold-drinks/item-cold-drinks.component';
import { ItemHotDrinksComponent } from './shared/components/item-hot-drinks/item-hot-drinks.component';
import { ItemRiceDishesComponent } from './shared/components/item-rice-dishes/item-rice-dishes.component';
import { ItemSaladsComponent } from './shared/components/item-salads/item-salads.component';
import { ItemSavoryWafflesComponent } from './shared/components/item-savory-waffles/item-savory-waffles.component';
import { ItemSweetWafflesComponent } from './shared/components/item-sweet-waffles/item-sweet-waffles.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { ServiceOptionsComponent } from './pages/service-options/service-options.component';
import { MyOrderGuard } from './core/guards/my-order.guard';
import { PaymentComponent } from './pages/payment/payment.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'service-options', component: ServiceOptionsComponent },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [MyOrderGuard],
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
  {
    path: 'payment',
    component: PaymentComponent,
  },
  { path: 'receipt', component: ReceiptComponent },
  {
    path: 'landing',
    loadChildren: () =>
      import('./layout/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'order' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MyOrderGuard, AuthGuard],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event: RouterEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        console.log('Current Route (AppRoutingModule):', event.url);
      });
  }
}
