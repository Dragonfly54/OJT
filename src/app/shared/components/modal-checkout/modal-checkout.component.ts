import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs';
import { Appetizers } from '../item-appetizers/appetizers';
import { ColdDrinks } from '../item-cold-drinks/cold-drinks';
import { HotDrinks } from '../item-hot-drinks/hot-drinks';
import { RiceDishes } from '../item-rice-dishes/rice-dishes';
import { Salads } from '../item-salads/salads';
import { SavoryWaffles } from '../item-savory-waffles/savory-waffles';
import { SweetWaffles } from '../item-sweet-waffles/sweet-waffles';

@Component({
  selector: 'app-modal-checkout',
  templateUrl: './modal-checkout.component.html',
  styleUrls: ['./modal-checkout.component.scss'],
})
export class ModalCheckoutComponent {
  @ViewChild('modalPayment', { static: true }) modalPayment?: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private authService: AuthService
  ) {}

  @Input() cartItems$!: Observable<
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

  @Input() getItemTitle!: (
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) => string;

  @Input() getItemPrice!: (
    item:
      | Appetizers
      | ColdDrinks
      | HotDrinks
      | RiceDishes
      | Salads
      | SavoryWaffles
      | SweetWaffles
  ) => string;

  @Input() calculateSubtotal!: () => number;
  @Input() calculateVat!: () => number;
  @Input() calculateTotalPrice!: () => number;

  open() {
    this.modalRef = this.modalService.open(this.modalPayment, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      centered: true,
    });
  }

  close(this: ModalCheckoutComponent) {
    if (this.modalRef) {
      this.modalRef.dismiss();
    }
  }

  proceedToPayment(): void {
    this.close();
    this.router.navigate(['/payment']);
  }
}
