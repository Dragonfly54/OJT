import { Appetizers } from './appetizers';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomNumber(minTransactionId, maxTransactionId);

export const APPETIZERS: Appetizers[] = [
  {
    title: 'Garlic Fries',
    description:
      'Discover our Garlic Fries – crispy potato slices seasoned with savory garlic and aromatic herbs. A gourmet twist on classic fries, perfect for satisfying cravings or as a delicious side.',
    prodId: getRandomNumber(10000, 99999),
    price: 99.0,
    quantity: 0,
    imageUrl: 'assets/img/product/garlicFries.jpg',
    selected: false,
  },
  {
    title: 'Karne Azada Fries',
    description:
      'Introducing Karne Asada Fries – tender steak strips atop golden fries, layered with melted cheese, tangy salsa, and creamy guacamole. Perfect for satisfying cravings or sharing with friends.',
    prodId: getRandomNumber(10000, 99999),
    price: 350.0,
    quantity: 0,
    imageUrl: 'assets/img/product/karneAzadaFries.jpg',
    selected: false,
  },
  {
    title: 'Sweet Potato Poutine',
    description:
      'Introducing Sweet Potato Poutine – crispy sweet potato fries topped with rich gravy and savory cheese curds. A delightful twist on the classic Canadian dish, perfect for sharing with friends.',
    prodId: getRandomNumber(10000, 99999),
    price: 200.0,
    quantity: 0,
    imageUrl: 'assets/img/product/sweetPotatoPoutine.jpeg',
    selected: false,
  },
];
