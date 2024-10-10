import { Inventory } from './inventory';

function getRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function getRandomProductId(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomProductId(
  minTransactionId,
  maxTransactionId
);

function getRandomBrandMethod(): string {
  const methods = [
    'UFC',
    'Nestle',
    'ALASKA',
    'Del Monte',
    'Knor',
    'San Remo',
    'McCormick',
    'LEE KUM KEE',
  ];
  const randomIndex = Math.floor(Math.random() * methods.length);
  return methods[randomIndex];
}

export const INVENTORY: Inventory[] = [
  {
    prodImg: 'assets/img/product/product1.jpg',
    prodName: 'Flour',
    category: 'Grains',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product2.jpg',
    prodName: 'Orange',
    category: 'Fruit',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product3.jpg',
    prodName: 'Pineapple',
    category: 'Fruit',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product4.jpg',
    prodName: 'Strwaberry',
    category: 'Fruit',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product5.jpg',
    prodName: 'Avocado',
    category: 'Fruit',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product6.jpg',
    prodName: 'Rice',
    category: 'Grains',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product7.jpg',
    prodName: 'Milk',
    category: 'Dairy',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product8.jpg',
    prodName: 'Butter',
    category: 'Dairy',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product9.jpg',
    prodName: 'Crackers',
    category: 'Grains',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product10.jpg',
    prodName: 'Chicken',
    category: 'Protein',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
  {
    prodImg: 'assets/img/product/product11.jpg',
    prodName: 'Banana',
    category: 'Fruit',
    brand: getRandomBrandMethod(),
    price: getRandomProductId(10000, 20000),
    qty: getRandomProductId(100, 1000),
  },
];
