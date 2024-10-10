import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/shared/service/order.service';
import { Appetizers } from 'src/app/shared/components/item-appetizers/appetizers';
import { ColdDrinks } from 'src/app/shared/components/item-cold-drinks/cold-drinks';
import { HotDrinks } from 'src/app/shared/components/item-hot-drinks/hot-drinks';
import { RiceDishes } from 'src/app/shared/components/item-rice-dishes/rice-dishes';
import { Salads } from 'src/app/shared/components/item-salads/salads';
import { SavoryWaffles } from 'src/app/shared/components/item-savory-waffles/savory-waffles';
import { SweetWaffles } from 'src/app/shared/components/item-sweet-waffles/sweet-waffles';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  selectedOption: string = '';

  cartItems!: (
    | Appetizers
    | ColdDrinks
    | HotDrinks
    | RiceDishes
    | Salads
    | SavoryWaffles
    | SweetWaffles
  )[];

  subtotal: number;
  vat: number;
  totalPrice: number;

  constructor(
    private orderService: OrderService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.orderService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });

    this.subtotal = this.orderService.calculateSubtotal();
    this.vat = this.orderService.calculateVat();
    this.totalPrice = this.orderService.calculateTotalPrice();

    this.paymentForm = this.fb.group({
      email: [
        'wapolCustomer@gmail.com',
        [Validators.required, Validators.email],
      ],
      coupon: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
      ],
      gift: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern(/^[a-zA-Z0-9]+$/),
        ],
      ],
    });
  }

  ngOnInit() {
    this.orderService.setCalculateSubtotalFn(this.calculateSubtotal.bind(this));
  }

  calculateSubtotal(): number {
    let subtotal = 0;

    for (const item of this.cartItems) {
      const itemPrice = this.getItemPrice(item);
      const itemQuantity = item.quantity;
      subtotal += parseFloat(itemPrice) * itemQuantity;
    }

    return subtotal;
  }

  handleButtonClick(option: string) {
    this.selectedOption = option;
  }

  applyCoupon() {
    const couponCode = this.paymentForm.get('coupon')?.value;
    console.log('Applying coupon code:', couponCode);
  }

  applyGiftCertificate() {
    const giftCertificateCode = this.paymentForm.get('gift')?.value;
    console.log('Applying gift certificate code:', giftCertificateCode);
  }

  getItemTitle(
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ): string {
    return this.orderService.getItemTitle(item);
  }

  getItemPrice(
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ): string {
    return this.orderService.getItemPrice(item);
  }
}
