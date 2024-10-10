import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Appetizers } from 'src/app/shared/components/item-appetizers/appetizers';
import { ColdDrinks } from 'src/app/shared/components/item-cold-drinks/cold-drinks';
import { HotDrinks } from 'src/app/shared/components/item-hot-drinks/hot-drinks';
import { RiceDishes } from 'src/app/shared/components/item-rice-dishes/rice-dishes';
import { Salads } from 'src/app/shared/components/item-salads/salads';
import { SavoryWaffles } from 'src/app/shared/components/item-savory-waffles/savory-waffles';
import { SweetWaffles } from 'src/app/shared/components/item-sweet-waffles/sweet-waffles';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private subTotal!: number;
  private vat!: number;
  private total!: number;
  private cartItems: (
    | Appetizers
    | ColdDrinks
    | HotDrinks
    | RiceDishes
    | Salads
    | SavoryWaffles
    | SweetWaffles
  )[] = [];

  setSubTotal(subTotal: number) {
    this.subTotal = subTotal;
  }

  getSubTotal(): number {
    return this.subTotal;
  }

  setVat(vat: number) {
    this.vat = vat;
  }

  getVat(): number {
    return this.vat;
  }

  setTotal(total: number) {
    this.total = total;
  }

  getTotal(): number {
    return this.total;
  }

  setCartItems(
    cartItems: (
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
    )[]
  ) {
    this.cartItems = cartItems;
  }

  getCartItems(): (
    | Appetizers
    | ColdDrinks
    | HotDrinks
    | RiceDishes
    | Salads
    | SavoryWaffles
    | SweetWaffles
  )[] {
    return this.cartItems;
  }

  private cartItems$ = new BehaviorSubject<
    (
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
    )[]
  >([]);

  private itemTitleFn!: (
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) => string;
  private itemPriceFn!: (
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) => string;
  private calculateSubtotalFn!: () => number;
  private calculateVatFn!: () => number;
  private calculateTotalPriceFn!: () => number;

  setItemTitleFn(
    fn: (
      item:
        | Appetizers
        | ColdDrinks
        | HotDrinks
        | RiceDishes
        | Salads
        | SavoryWaffles
        | SweetWaffles
    ) => string
  ) {
    this.itemTitleFn = fn;
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
    return this.itemTitleFn(item);
  }

  setItemPriceFn(
    fn: (
      item:
        | Appetizers
        | ColdDrinks
        | HotDrinks
        | RiceDishes
        | Salads
        | SavoryWaffles
        | SweetWaffles
    ) => string
  ) {
    this.itemPriceFn = fn;
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
    return this.itemPriceFn(item);
  }

  setCalculateSubtotalFn(fn: () => number) {
    this.calculateSubtotalFn = fn;
  }

  calculateSubtotal(): number {
    return this.calculateSubtotalFn();
  }

  setCalculateVatFn(fn: () => number) {
    this.calculateVatFn = fn;
  }

  calculateVat(): number {
    return this.calculateVatFn();
  }

  setCalculateTotalPriceFn(fn: () => number) {
    this.calculateTotalPriceFn = fn;
  }

  calculateTotalPrice(): number {
    return this.calculateTotalPriceFn();
  }
}
