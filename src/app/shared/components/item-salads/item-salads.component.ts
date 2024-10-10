import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../service/cart.service';
import { Salads } from './salads';
import { SALADS } from './salads.data';

@Component({
  selector: 'app-item-salads',
  templateUrl: './item-salads.component.html',
  styleUrls: ['./item-salads.component.scss'],
})
export class ItemSaladsComponent implements OnDestroy {
  salads: Salads[] = SALADS;
  cartItems: Salads[] = [];
  cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) {
    this.salads = SALADS.map((item) => ({ ...item, selected: false }));
    this.cartItemsSubscription = this.cartService.cartItems$.subscribe(
      (items) => {
        this.cartItems = items;
        this.resetSelectionState();
      }
    );
  }

  toggleSelection(salad: Salads): void {
    salad.selected = !salad.selected;
    if (salad.selected) {
      this.cartService.addToCart(salad);
    } else {
      this.cartService.removeFromCart(salad);
    }
  }

  resetSelectionState(): void {
    this.salads.forEach((salad) => {
      salad.selected = this.cartItems.some((item) =>
        this.isSameSalads(item, salad)
      );
    });
  }

  isSameSalads(item: any, salad: Salads): boolean {
    return item && item.title === salad.title;
  }

  ngOnDestroy(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }
}
