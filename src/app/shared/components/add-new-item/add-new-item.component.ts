import {
  Component,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InventoryReportComponent } from '../inventory-report/inventory-report.component';
import { Inventory } from '../inventory-report/inventory';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss'],
})
export class AddNewItemComponent {
  @ViewChild(InventoryReportComponent, { static: true })
  inventoryReportComponent!: InventoryReportComponent;
  @Output() newItemAdded = new EventEmitter<Inventory>();
  @ViewChild('addItem', { static: true }) addItem?: TemplateRef<any>;

  item = {
    title: '',
    price: 0,
    imageFile: null as File | null,
    imageUrl: '',
    category: '',
    brand: '',
    quantity: 0,
  };

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.addItem, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      size: 'xl',
    });
  }

  onSubmit() {
    const newItem: Inventory = {
      prodImg: this.item.imageUrl,
      prodName: this.item.title,
      category: this.item.category,
      brand: this.item.brand,
      price: this.item.price,
      qty: this.item.quantity,
    };

    this.newItemAdded.emit(newItem);

    console.log('Adding Item:', newItem);
    this.modalService.dismissAll();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.item.imageFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.item.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
