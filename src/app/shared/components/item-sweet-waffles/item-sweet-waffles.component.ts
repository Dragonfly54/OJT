import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../service/cart.service';
import { SweetWaffles } from './sweet-waffles';
import { SWEETWAFFLES } from './sweetWaffles.data';

@Component({
  selector: 'app-item-sweet-waffles',
  templateUrl: './item-sweet-waffles.component.html',
  styleUrls: ['./item-sweet-waffles.component.scss'],
})
export class ItemSweetWafflesComponent implements OnDestroy {
  sweetwaffles: SweetWaffles[] = SWEETWAFFLES;
  cartItems: SweetWaffles[] = [];
  cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.sweetwaffles = SWEETWAFFLES.map((item) => ({
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

  toggleSelection(sweetwaffle: SweetWaffles): void {
    sweetwaffle.selected = !sweetwaffle.selected;
    if (sweetwaffle.selected) {
      this.cartService.addToCart(sweetwaffle);
    } else {
      this.cartService.removeFromCart(sweetwaffle);
    }
  }

  resetSelectionState(): void {
    this.sweetwaffles.forEach((sweetwaffle) => {
      sweetwaffle.selected = this.cartItems.some((item) =>
        this.isSameSweetwaffles(item, sweetwaffle)
      );
    });
  }

  isSameSweetwaffles(item: any, sweetwaffle: SweetWaffles): boolean {
    return item && item.title === sweetwaffle.title;
  }

  ngOnDestroy(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}
