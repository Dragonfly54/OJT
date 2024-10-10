import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appetizers } from '../components/item-appetizers/appetizers';
import { ColdDrinks } from '../components/item-cold-drinks/cold-drinks';
import { HotDrinks } from '../components/item-hot-drinks/hot-drinks';
import { RiceDishes } from '../components/item-rice-dishes/rice-dishes';
import { Salads } from '../components/item-salads/salads';
import { SavoryWaffles } from '../components/item-savory-waffles/savory-waffles';
import { SweetWaffles } from '../components/item-sweet-waffles/sweet-waffles';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<
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
  cartItems$ = this.cartItems.asObservable();

  addToCart(
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) {
    const currentItems = this.cartItems.getValue();
    const index = currentItems.findIndex((i) => i.title === item.title);
    if (index !== -1) {
      const updatedItems = currentItems.map((i, idx) => {
        if (idx === index) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      });
      this.cartItems.next(updatedItems);
    } else {
      const newItemWithQuantity = { ...item, quantity: 1 };
      this.cartItems.next([...currentItems, newItemWithQuantity]);
    }
  }

  removeFromCart(
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter((i) => i.title !== item.title);
    this.cartItems.next(updatedItems);
  }

  updateCartItem(
    updatedItem:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.map((item) =>
      item.title === updatedItem.title
        ? { ...item, quantity: updatedItem.quantity }
        : item
    );
    this.cartItems.next(updatedItems);
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
