import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Appetizers } from './appetizers';
import { APPETIZERS } from './appetizers.data';

@Component({
  selector: 'app-item-appetizers',
  templateUrl: './item-appetizers.component.html',
  styleUrls: ['./item-appetizers.component.scss'],
})
export class ItemAppetizersComponent implements OnDestroy {
  appetizers: Appetizers[] = APPETIZERS;
  cartItems: Appetizers[] = [];
  cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.appetizers = APPETIZERS.map((item) => ({ ...item, selected: false }));
    this.cartItemsSubscription = this.cartService.cartItems$.subscribe(
      (items) => {
        this.cartItems = items;
        this.resetSelectionState();
      }
    );
  }

  toggleSelection(appetizer: Appetizers): void {
    appetizer.selected = !appetizer.selected;
    if (appetizer.selected) {
      this.cartService.addToCart(appetizer);
    } else {
      this.cartService.removeFromCart(appetizer);
    }
  }

  resetSelectionState(): void {
    this.appetizers.forEach((appetizer) => {
      appetizer.selected = this.cartItems.some((item) =>
        this.isSameAppetizer(item, appetizer)
      );
    });
  }

  isSameAppetizer(item: any, appetizer: Appetizers): boolean {
    return item && item.title === appetizer.title;
  }

  ngOnDestroy(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}
