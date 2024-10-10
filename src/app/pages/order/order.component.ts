import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/service/cart.service';
import { OrderService } from 'src/app/shared/service/order.service';
import { ModalCheckoutComponent } from 'src/app/shared/components/modal-checkout/modal-checkout.component';
import { Appetizers } from 'src/app/shared/components/item-appetizers/appetizers';
import { ColdDrinks } from 'src/app/shared/components/item-cold-drinks/cold-drinks';
import { HotDrinks } from 'src/app/shared/components/item-hot-drinks/hot-drinks';
import { RiceDishes } from 'src/app/shared/components/item-rice-dishes/rice-dishes';
import { Salads } from 'src/app/shared/components/item-salads/salads';
import { SavoryWaffles } from 'src/app/shared/components/item-savory-waffles/savory-waffles';
import { SweetWaffles } from 'src/app/shared/components/item-sweet-waffles/sweet-waffles';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @ViewChild(ModalCheckoutComponent, { static: true })
  modalCheckout!: ModalCheckoutComponent;

  selectedCategory: string = 'appetizers';

  openModal() {
    this.modalCheckout.open();
  }

  cartItems$: Observable<
    (
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
    )[]
  >;

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {
    this.cartItems$ = this.cartService.cartItems$;
  }

  ngOnInit() {
    this.cartItems$.subscribe((cartItems) => {
      this.orderService.setCartItems(cartItems);
      this.orderService.setItemTitleFn(this.getItemTitle.bind(this));
      this.orderService.setItemPriceFn(this.getItemPrice.bind(this));
      this.orderService.setCalculateSubtotalFn(
        this.calculateSubtotal.bind(this)
      );
      this.orderService.setCalculateVatFn(this.calculateVat.bind(this));
      this.orderService.setCalculateTotalPriceFn(
        this.calculateTotalPrice.bind(this)
      );
    });
  }

  incrementItemQuantity(
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) {
    const maxQuantity = 10;

    if (item.quantity < maxQuantity) {
      const updatedItem = { ...item, quantity: item.quantity + 1 };
      this.cartService.updateCartItem(updatedItem);
    } else {
      console.log('Maximum quantity reached');
    }
  }

  decrementItemQuantity(
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      this.cartService.updateCartItem(updatedItem);
    } else {
      this.cartService.removeFromCart(item);
    }
  }

  totalItemsInCart(): number {
    let total = 0;
    this.cartItems$.subscribe((item) => {
      total = item.length;
    });
    return total;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
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
    this.cartService.removeFromCart(item);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    this.cartItems$.subscribe((items) => {
      items.forEach((item) => {
        subtotal += item.price * item.quantity;
      });
    });
    return subtotal;
  }

  calculateVat(): number {
    let totalVat = 0;
    this.cartItems$.subscribe((items) => {
      items.forEach((item) => {
        const itemPrice = item.price;
        const vatAmount = itemPrice * 0.12;
        totalVat += vatAmount * item.quantity;
      });
    });
    return totalVat;
  }

  calculateTotalPrice(): number {
    const subtotal = this.calculateSubtotal();
    const totalVat = this.calculateVat();
    const totalPrice = subtotal + totalVat;
    return totalPrice;
  }

  getItemImageUrl(
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ): string {
    if (item && item.hasOwnProperty('imageUrl')) {
      return item.imageUrl;
    } else {
      return 'default-image.jpg';
    }
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
    if (item && item.hasOwnProperty('title')) {
      return item.title;
    } else if (item && item.hasOwnProperty('name')) {
      return item.title;
    } else {
      return 'Unknown Item';
    }
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
    if (item && typeof item.price === 'number') {
      return item.price.toString();
    } else {
      return 'N/A';
    }
  }
}
