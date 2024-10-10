import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ColdDrinks } from './cold-drinks';
import { COLDDRINKS } from './coldDrinks.data';

@Component({
  selector: 'app-item-cold-drinks',
  templateUrl: './item-cold-drinks.component.html',
  styleUrls: ['./item-cold-drinks.component.scss'],
})
export class ItemColdDrinksComponent {
  colddrinks: ColdDrinks[] = COLDDRINKS;
  cartItems: ColdDrinks[] = [];
  cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.colddrinks = COLDDRINKS.map((item) => ({ ...item, selected: false }));
    this.cartItemsSubscription = this.cartService.cartItems$.subscribe(
      (items) => {
        this.cartItems = items;
        this.resetSelectionState();
      }
    );
  }

  toggleSelection(colddrink: ColdDrinks): void {
    colddrink.selected = !colddrink.selected;
    if (colddrink.selected) {
      this.cartService.addToCart(colddrink);
    } else {
      this.cartService.removeFromCart(colddrink);
    }
  }

  resetSelectionState(): void {
    this.colddrinks.forEach((colddrink) => {
      colddrink.selected = this.cartItems.some((item) =>
        this.isSameColddrinks(item, colddrink)
      );
    });
  }

  isSameColddrinks(item: any, colddrink: ColdDrinks): boolean {
    return item && item.title === colddrink.title;
  }

  ngOnDestroy(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}
