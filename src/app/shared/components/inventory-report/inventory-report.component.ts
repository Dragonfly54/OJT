import { Component, ViewChild } from '@angular/core';
import { AddNewItemComponent } from '../add-new-item/add-new-item.component';
import { Inventory } from './inventory';
import { INVENTORY } from './inventory.data';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-inventory-report',
  templateUrl: './inventory-report.component.html',
  styleUrls: ['./inventory-report.component.scss'],
})
export class InventoryReportComponent {
  @ViewChild(AddNewItemComponent, { static: true })
  addItemModal!: AddNewItemComponent;

  inventories: Inventory[] = INVENTORY;
  pagedInventories: Inventory[] = [];
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  initialPage: number;
  pageSize: number = 4;

  constructor() {
    this.initialPage = 1;
    this.updatePagedInventories();
  }

  sort(column: string): void {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.inventories.sort((a, b) => {
      const direction = this.sortDirection === 'asc' ? 1 : -1;
      const columnA = this.getColumnValue(a, column);
      const columnB = this.getColumnValue(b, column);

      if (typeof columnA === 'number' && typeof columnB === 'number') {
        return (columnA - columnB) * direction;
      } else if (typeof columnA === 'string' && typeof columnB === 'string') {
        return columnA.localeCompare(columnB) * direction;
      } else if (columnA instanceof Date && columnB instanceof Date) {
        return (columnA.getTime() - columnB.getTime()) * direction;
      } else {
        return 0;
      }
    });
    this.updatePagedInventories();
  }

  getColumnValue(item: Inventory, column: string): any {
    switch (column) {
      case 'prodImg':
      case 'price':
      case 'qty':
        return item[column];
      case 'prodName':
      case 'brand':
      case 'category':
        return item[column].toLowerCase();
      default:
        throw new Error('Unhandled column: ${column}');
    }
  }

  updatePagedInventories() {
    const startIndex = (this.initialPage - 1) * this.pageSize;
    const endIndex = Math.min(
      startIndex + this.pageSize,
      this.inventories.length
    );
    this.pagedInventories = this.inventories.slice(startIndex, endIndex);
  }

  pageChange(page: number) {
    this.initialPage = page;
    this.updatePagedInventories();
  }

  updatePageSize() {
    this.inventories = INVENTORY.map((inventory, i) => ({
      ...inventory,
      id: i + 1,
    }));
    this.updatePagedInventories();
  }

  openModal() {
    this.addItemModal.open();
  }

  addNewItem(newItem: Inventory) {
    this.inventories.push(newItem);
    this.updatePagedInventories();
  }

  generatePDF() {
    const doc = new jsPDF() as any;

    const tableData = this.pagedInventories.map((item) => [
      item.prodName,
      item.category,
      item.brand,
      item.price,
      item.qty,
    ]);

    const tableHeaders = [
      'Product Name',
      'Category',
      'Brand',
      'Price',
      'Quantity',
    ];

    (doc as any).autoTable({
      head: [tableHeaders],
      body: tableData,
      startY: 20,
    });

    doc.save('ingridients.pdf');
  }

  editInventory(inventory: Inventory) {
    inventory.editing = true;
  }

  saveInventory(inventory: Inventory) {
    inventory.editing = false;
  }

  cancelEdit(inventory: Inventory) {
    inventory.editing = false;
  }

  updateProduct(
    inventory: Inventory,
    updatedValue: string,
    field: 'prodImg' | 'prodName' | 'category' | 'brand' | 'price' | 'qty'
  ) {
    switch (field) {
      case 'prodImg':
        inventory.prodImg = updatedValue;
        break;
      case 'prodName':
        inventory.prodName = updatedValue;
        break;
      case 'category':
        inventory.category = updatedValue;
        break;
      case 'brand':
        inventory.brand = updatedValue;
        break;
      case 'price':
        inventory.price = parseFloat(updatedValue);
        break;
      case 'qty':
        inventory.qty = parseFloat(updatedValue);
        break;
      default:
        break;
    }
  }

  deleteInventory(inventory: Inventory) {
    const index = this.inventories.indexOf(inventory);
    if (index !== -1) {
      this.inventories.splice(index, 1);
      this.updatePagedInventories();
    }
  }
}
