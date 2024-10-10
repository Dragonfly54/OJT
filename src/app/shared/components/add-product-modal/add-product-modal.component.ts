import {
  Component,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/product';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent {
  @ViewChild(ProductComponent, { static: true })
  productComponent!: ProductComponent;
  @Output() newproductAdded = new EventEmitter<Product>();
  @ViewChild('addProduct', { static: true }) addProduct?: TemplateRef<any>;

  product = {
    type: '',
    title: '',
    price: 0,
  };

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.addProduct, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      size: 'xl',
    });
  }

  onSubmit() {
    const newProduct: Product = {
      type: this.product.type,
      title: this.product.title,
      price: this.product.price,
    };

    this.newproductAdded.emit(newProduct);

    console.log('Adding Product:', newProduct);
    this.modalService.dismissAll();
  }
}
