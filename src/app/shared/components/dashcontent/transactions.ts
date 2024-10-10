export interface Transactions {
  transactionId: number;
  payMethod: string;
  addDate: Date;
  addBy: string;
  subTotal: number;
  vat: number;
  total: number;
}
