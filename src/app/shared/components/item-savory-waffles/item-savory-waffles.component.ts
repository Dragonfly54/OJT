import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { SavoryWaffles } from './savory-waffles';
import { SAVORYWAFFLES } from './savoryWaffles.data';

@Component({
  selector: 'app-item-savory-waffles',
  templateUrl: './item-savory-waffles.component.html',
  styleUrls: ['./item-savory-waffles.component.scss'],
})
export class ItemSavoryWafflesComponent implements OnDestroy {
  savorywaffles: SavoryWaffles[] = SAVORYWAFFLES;
  cartItems: SavoryWaffles[] = [];
  cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.savorywaffles = SAVORYWAFFLES.map((item) => ({
      ...item,
      selected: false,
    }));
    this.cartItemsSubscription = this.cartService.cartItems$.subscribe(
      (items) => {
        this.cartItems = items;
        this.resetSelectionState();
      }
    );
  }

  toggleSelection(savorywaffle: SavoryWaffles): void {
    savorywaffle.selected = !savorywaffle.selected;
    if (savorywaffle.selected) {
      this.cartService.addToCart(savorywaffle);
    } else {
      this.cartService.removeFromCart(savorywaffle);
    }
  }

  resetSelectionState(): void {
    this.savorywaffles.forEach((savorywaffle) => {
      savorywaffle.selected = this.cartItems.some((item) =>
        this.isSameSavorywaffles(item, savorywaffle)
      );
    });
  }

  isSameSavorywaffles(item: any, savorywaffle: SavoryWaffles): boolean {
    return item && item.title === savorywaffle.title;
  }

  ngOnDestroy(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}
