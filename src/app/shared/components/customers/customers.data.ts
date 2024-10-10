import { Customers } from './customers';

function getRandomTransactionId(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomTransactionId(
  minTransactionId,
  maxTransactionId
);

export const CUSTOMERS: Customers[] = [
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Alice Tikband',
    mobileNum: '+63 9664706969',
    email: 'alice@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Anita Bang',
    mobileNum: '+63 9983273995',
    email: 'anita@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Brooke Ennail',
    mobileNum: '+63 9983278468',
    email: 'brooke@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Chester Minit',
    mobileNum: '+63 9983278500',
    email: 'chester@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Claude N. Skretchem',
    mobileNum: '+63 9983278188',
    email: 'claudeN@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Dan Druff',
    mobileNum: '+63 9298385006',
    email: 'danD@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Dolores Beto-Morrow',
    mobileNum: '+63 757130314',
    email: 'dolores@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Ed Banger',
    mobileNum: '+63 9563585432',
    email: 'edbanger@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Evan Tually',
    mobileNum: '+63 9563584866',
    email: 'evanT@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Gus Comzadia',
    mobileNum: '+63 9563584869',
    email: 'gusC@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Hugh G. Rection',
    mobileNum: '+63 9563585381',
    email: 'hugeG@gmail.com',
  },
  {
    transactionId: getRandomTransactionId(10000, 99999),
    cusName: 'Jack Hoffman',
    mobileNum: '+63 9561577735',
    email: 'jackhoffman@gmail.com',
  },
];
