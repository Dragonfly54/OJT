import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { HotDrinks } from './hot-drinks';
import { HOTDRINKS } from './hotDrinks.data';

@Component({
  selector: 'app-item-hot-drinks',
  templateUrl: './item-hot-drinks.component.html',
  styleUrls: ['./item-hot-drinks.component.scss'],
})
export class ItemHotDrinksComponent implements OnDestroy {
  hotdrinks: HotDrinks[] = HOTDRINKS;
  cartIems: HotDrinks[] = [];
  cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.hotdrinks = HOTDRINKS.map((item) => ({ ...item, selected: false }));
    this.cartItemsSubscription = this.cartService.cartItems$.subscribe(
      (items) => {
        this.cartIems = items;
        this.resetSelectionState();
      }
    );
  }

  toggleSelection(hotdrink: HotDrinks): void {
    hotdrink.selected = !hotdrink.selected;
    if (hotdrink.selected) {
      this.cartService.addToCart(hotdrink);
    } else {
      this.cartService.removeFromCart(hotdrink);
    }
  }

  resetSelectionState(): void {
    this.hotdrinks.forEach((hotdrink) => {
      hotdrink.selected = this.cartIems.some((item) =>
        this.isSameHotdrinks(item, hotdrink)
      );
    });
  }

  isSameHotdrinks(item: any, hotdrink: HotDrinks): boolean {
    return item && item.title === hotdrink.title;
  }

  ngOnDestroy(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}
