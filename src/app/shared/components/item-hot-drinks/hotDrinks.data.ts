import { HotDrinks } from './hot-drinks';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomNumber(minTransactionId, maxTransactionId);

export const HOTDRINKS: HotDrinks[] = [
  {
    title: 'Americano',
    description:
      'Americano - Savor the robust and smooth flavor of our expertly brewed Americano, perfect for those who enjoy a rich and satisfying coffee experience.',
    prodId: getRandomNumber(10000, 99999),
    price: 175.0,
    quantity: 0,
    imageUrl: 'assets/img/product/americano.jpeg',
    selected: false,
  },
  {
    title: 'Cappuccino',
    description:
      'Cappuccino - Indulge in the creamy foam and rich espresso of our classic Cappuccino, meticulously crafted for a luxurious and comforting coffee break.',
    prodId: getRandomNumber(10000, 99999),
    price: 200.0,
    quantity: 0,
    imageUrl: 'assets/img/product/cappuccino.jpg',
    selected: false,
  },
  {
    title: 'Espresso',
    description:
      'Espresso - Experience the bold intensity of our Espresso, made with the finest beans for a powerful and invigorating coffee shot thats sure to awaken your senses.',
    prodId: getRandomNumber(10000, 99999),
    price: 125.0,
    quantity: 0,
    imageUrl: 'assets/img/product/espresso.jpg',
    selected: false,
  },
];
