import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { RiceDishes } from './rice-dishes';
import { RICEDISHES } from './riceDishes.data';

@Component({
  selector: 'app-item-rice-dishes',
  templateUrl: './item-rice-dishes.component.html',
  styleUrls: ['./item-rice-dishes.component.scss'],
})
export class ItemRiceDishesComponent implements OnDestroy {
  ricedishes: RiceDishes[] = RICEDISHES;
  cartItems: RiceDishes[] = [];
  cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.ricedishes = RICEDISHES.map((item) => ({ ...item, selected: false }));
    this.cartItemsSubscription = this.cartService.cartItems$.subscribe(
      (items) => {
        this.cartItems = items;
        this.resetSelectionState();
      }
    );
  }

  toggleSelection(ricedish: RiceDishes): void {
    ricedish.selected = !ricedish.selected;
    if (ricedish.selected) {
      this.cartService.addToCart(ricedish);
    } else {
      this.cartService.removeFromCart(ricedish);
    }
  }

  resetSelectionState(): void {
    this.ricedishes.forEach((ricedish) => {
      ricedish.selected = this.cartItems.some((item) =>
        this.isSameRicedishes(item, ricedish)
      );
    });
  }

  isSameRicedishes(item: any, ricedish: RiceDishes): boolean {
    return item && item.title === ricedish.title;
  }

  ngOnDestroy(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}
