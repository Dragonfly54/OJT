import { Component } from '@angular/core';
import { Transactions } from '../dashcontent/transactions';
import { TRANSACTIONS } from '../dashcontent/transactions.data';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-invoice-report',
  templateUrl: './invoice-report.component.html',
  styleUrls: ['./invoice-report.component.scss'],
})
export class InvoiceReportComponent {
  transactions: Transactions[] = TRANSACTIONS;
  pagedTransactions: Transactions[] = [];
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  initialPage: number;
  pageSize: number = 4;

  constructor() {
    this.initialPage = 1;
    this.updatePagedTransactions();
  }

  sort(column: string): void {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.transactions.sort((a, b) => {
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
    this.updatePagedTransactions();
  }

  getColumnValue(item: Transactions, column: string): any {
    switch (column) {
      case 'transactionId':
      case 'addBy':
      case 'subTotal':
      case 'vat':
      case 'total':
        return item[column];
      case 'addDate':
        return new Date(item[column]);
      case 'payMethod':
        return item[column].toLowerCase();
      default:
        throw new Error('Unhandled column: ${column}');
    }
  }

  ngOnInit(): void {
    this.transactions = TRANSACTIONS.map((transaction) => ({
      ...transaction,
      addDate: new Date(transaction.addDate),
    }));
    this.updatePagedTransactions();
  }

  updatePagedTransactions() {
    const startIndex = (this.initialPage - 1) * this.pageSize;
    const endIndex = Math.min(
      startIndex + this.pageSize,
      this.transactions.length
    );
    this.pagedTransactions = this.transactions.slice(startIndex, endIndex);
  }

  pageChange(page: number) {
    this.initialPage = page;
    this.updatePagedTransactions();
  }

  updatePageSize() {
    this.transactions = TRANSACTIONS.map((transaction, i) => ({
      ...transaction,
      id: i + 1,
    }));
    this.updatePagedTransactions();
  }

  generatePDF() {
    const doc = new jsPDF() as any;

    const tableData = this.pagedTransactions.map((item) => [
      item.transactionId,
      item.payMethod,
      item.addDate,
      item.subTotal,
      item.vat,
      item.total,
      item.addBy,
    ]);

    const tableHeaders = [
      'Transaction Id',
      'Payment Method',
      'Added Date',
      'Sub Total',
      'VAT',
      'Total',
      'Added By',
    ];

    (doc as any).autoTable({
      head: [tableHeaders],
      body: tableData,
      startY: 20,
    });

    doc.save('transaction.pdf');
  }
}
