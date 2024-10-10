import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Appetizers } from 'src/app/shared/components/item-appetizers/appetizers';
import { ColdDrinks } from 'src/app/shared/components/item-cold-drinks/cold-drinks';
import { HotDrinks } from 'src/app/shared/components/item-hot-drinks/hot-drinks';
import { RiceDishes } from 'src/app/shared/components/item-rice-dishes/rice-dishes';
import { Salads } from 'src/app/shared/components/item-salads/salads';
import { SavoryWaffles } from 'src/app/shared/components/item-savory-waffles/savory-waffles';
import { SweetWaffles } from 'src/app/shared/components/item-sweet-waffles/sweet-waffles';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {
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

  constructor(private orderService: OrderService, private router: Router) {
    this.cartItems = this.orderService.getCartItems();
    this.subtotal = this.orderService.calculateSubtotal();
    this.vat = this.orderService.calculateVat();
    this.totalPrice = this.orderService.calculateTotalPrice();
    this.subtotal = this.orderService.getSubTotal();
    this.vat = this.orderService.getVat();
    this.totalPrice = this.orderService.getTotal();
  }

  ngOnInit() {
    this.orderService.setCalculateSubtotalFn(this.calculateSubtotal.bind(this));
    this.startTimer();
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

  startTimer() {
    const duration = 5000;

    setTimeout(() => {
      this.router.navigate(['']);
    }, duration);
  }
}
