import { Component, ViewChild, OnInit } from '@angular/core';
import { AddCustomerModalComponent } from '../add-customer-modal/add-customer-modal.component';
import { Customers } from './customers';
import { CUSTOMERS } from './customers.data';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  @ViewChild(AddCustomerModalComponent, { static: true })
  addCustomerModal!: AddCustomerModalComponent;

  customers: Customers[] = CUSTOMERS;
  pagedCustomers: Customers[] = [];
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  initialPage: number;
  pageSize: number = 4;

  constructor() {
    this.initialPage = 1;
    this.updatePagedCustomers();
  }

  sort(column: string): void {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.customers.sort((a, b) => {
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
    this.updatePagedCustomers();
  }

  getColumnValue(item: Customers, column: string): any {
    switch (column) {
      case 'transactionId':
      case 'mobileNum':
      case 'email':
        return item[column];
      case 'cusName':
        return item[column].toLowerCase();
      default:
        throw new Error('Unhandled column: ${column}');
    }
  }

  ngOnInit(): void {}

  updatePagedCustomers() {
    const startIndex = (this.initialPage - 1) * this.pageSize;
    const endIndex = Math.min(
      startIndex + this.pageSize,
      this.customers.length
    );
    this.pagedCustomers = this.customers.slice(startIndex, endIndex);
  }

  pageChange(page: number) {
    this.initialPage = page;
    this.updatePagedCustomers();
  }

  updatePageSize() {
    this.customers = CUSTOMERS.map((customer, i) => ({
      ...customer,
      id: i + 1,
    }));
    this.updatePagedCustomers();
  }

  openModal() {
    this.addCustomerModal.open();
  }
}
