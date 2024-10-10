import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCustomerModalComponent } from '../add-customer-modal/add-customer-modal.component';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Observable } from 'rxjs';
import { Appetizers } from '../item-appetizers/appetizers';
import { ColdDrinks } from '../item-cold-drinks/cold-drinks';
import { HotDrinks } from '../item-hot-drinks/hot-drinks';
import { RiceDishes } from '../item-rice-dishes/rice-dishes';
import { Salads } from '../item-salads/salads';
import { SavoryWaffles } from '../item-savory-waffles/savory-waffles';
import { SweetWaffles } from '../item-sweet-waffles/sweet-waffles';
import { Transactions } from '../dashcontent/transactions';
import { TRANSACTIONS } from '../dashcontent/transactions.data';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent implements OnInit {
  @ViewChild(AddCustomerModalComponent, { static: true })
  addCustomerModal!: AddCustomerModalComponent;

  selectedCategory: string = 'appetizers';

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
    private router: Router,
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

  openModal() {
    this.addCustomerModal.open();
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

  checkout() {
    const newTransaction: Transactions = {
      transactionId: this.generateTransactionId(),
      payMethod: 'Cash',
      addDate: new Date(),
      addBy: 'Hans',
      subTotal: this.calculateSubtotal(),
      vat: this.calculateVat(),
      total: this.calculateTotalPrice(),
    };

    this.orderService.setSubTotal(this.calculateSubtotal());
    this.orderService.setVat(this.calculateVat());
    this.orderService.setTotal(this.calculateTotalPrice());

    // Not Working
    this.cartItems$.subscribe((cartItems) => {
      this.orderService.setCartItems(cartItems);
    });

    TRANSACTIONS.push(newTransaction);
    this.cartService.clearCart();
    this.router.navigate(['/dashboard/invoice-report']);
  }

  generateTransactionId(): number {
    const startingTransactionId = 10;
    const currentLength = TRANSACTIONS.length;

    if (currentLength === 0) {
      return startingTransactionId;
    } else {
      const lastTransaction = TRANSACTIONS[currentLength - 1];
      const lastTransactionId = lastTransaction.transactionId;
      return lastTransactionId + 1;
    }
  }
}
