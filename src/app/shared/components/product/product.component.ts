import { Component, ViewChild } from '@angular/core';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';
import { Product } from './product';
import { PRODUCT } from './product.data';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @ViewChild(AddProductModalComponent, { static: true })
  addProductModal!: AddProductModalComponent;

  products: Product[] = PRODUCT;
  pagedProduct: Product[] = [];
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  initialPage: number;
  pageSize: number = 4;

  constructor() {
    this.initialPage = 1;
    this.updatePagedProducts();
  }

  sort(column: string): void {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.products.sort((a, b) => {
      const direction = this.sortDirection === 'asc' ? 1 : -1;
      const columnA = this.getColumnValue(a, column);
      const columnB = this.getColumnValue(b, column);

      if (typeof columnA === 'number' && typeof columnB === 'number') {
        return (columnA - columnB) * direction;
      } else if (typeof columnA === 'string' && typeof columnB === 'string') {
        return columnA.localeCompare(columnB) * direction;
      } else {
        return 0;
      }
    });
    this.updatePagedProducts();
  }

  getColumnValue(item: Product, column: string): any {
    switch (column) {
      case 'price':
        return item[column];
      case 'type':
      case 'title':
        return item[column].toLowerCase();
      default:
        throw new Error('Unhandled column: ${column}');
    }
  }

  updatePagedProducts() {
    const startIndex = (this.initialPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.products.length);
    this.pagedProduct = this.products.slice(startIndex, endIndex);
  }

  pageChange(page: number) {
    this.initialPage = page;
    this.updatePagedProducts();
  }

  updatePageSize() {
    this.products = PRODUCT.map((product, i) => ({
      ...product,
      id: i + 1,
    }));
    this.updatePagedProducts();
  }

  openModal() {
    this.addProductModal.open();
  }

  addNewProduct(newProduct: Product) {
    this.products.push(newProduct);
    this.updatePagedProducts();
  }

  generatePDF() {
    const doc = new jsPDF() as any;

    const tableData = this.pagedProduct.map((item) => [
      item.type,
      item.title,
      item.price,
    ]);

    const tableHeaders = ['Category', 'Product Name', 'Price'];

    (doc as any).autoTable({
      head: [tableHeaders],
      body: tableData,
      startY: 20,
    });

    doc.save('products.pdf');
  }

  editProduct(product: Product) {
    product.editing = true;
  }

  saveProduct(product: Product) {
    product.editing = false;
  }

  cancelEdit(product: Product) {
    product.editing = false;
  }

  updateProduct(
    product: Product,
    updatedValue: string,
    field: 'type' | 'title' | 'price'
  ) {
    switch (field) {
      case 'type':
        product.type = updatedValue;
        break;
      case 'title':
        product.title = updatedValue;
        break;
      case 'price':
        product.price = parseFloat(updatedValue);
        break;
      default:
        break;
    }
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.updatePagedProducts();
    }
  }
}
