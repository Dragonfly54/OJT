import { Transactions } from './transactions';

function getRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function getRandomPaymentMethod(): string {
  const methods = ['Cash'];
  const randomIndex = Math.floor(Math.random() * methods.length);
  return methods[randomIndex];
}

function getRandomTransactionPrice(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomTransactionPrice(
  minTransactionId,
  maxTransactionId
);

function getAscendingTransactionId() {
  let currentTransactionId = 0;

  return function () {
    currentTransactionId++;
    if (currentTransactionId > 10000) {
      console.warn('Maximum transaction ID reached. Resetting to 10000.');
      currentTransactionId = 10000;
    }
    return currentTransactionId;
  };
}

const getNextTransactionId = getAscendingTransactionId();

export const TRANSACTIONS: Transactions[] = [
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Hans',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Hans',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Ian',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Ian',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Ron',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Ron',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Keith',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Keith',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Ian',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
  {
    transactionId: getNextTransactionId(),
    payMethod: getRandomPaymentMethod(),
    addDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    addBy: 'Hans',
    subTotal: getRandomTransactionPrice(200, 99999),
    vat: getRandomTransactionPrice(200, 99999),
    total: getRandomTransactionPrice(200, 99999),
  },
];
