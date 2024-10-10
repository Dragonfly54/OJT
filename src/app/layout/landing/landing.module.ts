import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  NavigationEnd,
  Router,
  Event as RouterEvent,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { LandingRoutingModule } from './landing-routing.module';
import {
  FormsModule,
  NgModel,
  RadioControlValueAccessor,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NgbAccordionModule,
  NgbCarouselModule,
  NgbModule,
  NgbScrollSpyModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing.component';
import { LandingContentComponent } from 'src/app/pages/landing-content/landing-content.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { ContactUsComponent } from 'src/app/shared/components/contact-us/contact-us.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { ItemAppetizersComponent } from 'src/app/shared/components/item-appetizers/item-appetizers.component';
import { ItemColdDrinksComponent } from 'src/app/shared/components/item-cold-drinks/item-cold-drinks.component';
import { ItemHotDrinksComponent } from 'src/app/shared/components/item-hot-drinks/item-hot-drinks.component';
import { ItemRiceDishesComponent } from 'src/app/shared/components/item-rice-dishes/item-rice-dishes.component';
import { ItemSaladsComponent } from 'src/app/shared/components/item-salads/item-salads.component';
import { ItemSavoryWafflesComponent } from 'src/app/shared/components/item-savory-waffles/item-savory-waffles.component';
import { ItemSweetWafflesComponent } from 'src/app/shared/components/item-sweet-waffles/item-sweet-waffles.component';
import { OrderComponent } from 'src/app/pages/order/order.component';
import { OrderNavbarComponent } from 'src/app/shared/components/order-navbar/order-navbar.component';
import { ModalCheckoutComponent } from 'src/app/shared/components/modal-checkout/modal-checkout.component';
import { ReceiptComponent } from 'src/app/pages/receipt/receipt.component';
import { ServiceOptionsComponent } from 'src/app/pages/service-options/service-options.component';
import { PaymentComponent } from 'src/app/pages/payment/payment.component';

@NgModule({
  declarations: [
    LandingComponent,
    LandingContentComponent,
    NavbarComponent,
    ContactUsComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ItemAppetizersComponent,
    ItemColdDrinksComponent,
    ItemHotDrinksComponent,
    ItemRiceDishesComponent,
    ItemSaladsComponent,
    ItemSavoryWafflesComponent,
    ItemSweetWafflesComponent,
    OrderComponent,
    ModalCheckoutComponent,
    OrderNavbarComponent,
    ReceiptComponent,
    ServiceOptionsComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbAccordionModule,
    NgbScrollSpyModule,
    NgbCarouselModule,
    RouterModule.forChild([]),
  ],
})
export class LandingModule {
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event: RouterEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        console.log('Current Route (LandingModule):', event.url);
      });
  }
}
