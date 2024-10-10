import { ColdDrinks } from './cold-drinks';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomNumber(minTransactionId, maxTransactionId);

export const COLDDRINKS: ColdDrinks[] = [
  {
    title: 'Blueberry',
    description:
      'Blueberry - Bursting with the sweet and tangy flavor of ripe blueberries, our Blueberry yogurt is a deliciously refreshing treat for any time of day. Each spoonful is filled with plump, juicy blueberries.',
    prodId: getRandomNumber(10000, 99999),
    price: 205.0,
    quantity: 0,
    imageUrl: 'assets/img/product/blueberry.jpg',
    selected: false,
  },
  {
    title: 'Peach Mango',
    description:
      'Peach Mango - Indulge in the tropical sweetness of juicy mangoes blended with the delicate flavor of ripe peaches in our Peach Mango yogurt, offering a taste of paradise in every spoonful.',
    prodId: getRandomNumber(10000, 99999),
    price: 175.0,
    quantity: 0,
    imageUrl: 'assets/img/product/peachMango.png',
    selected: false,
  },
  {
    title: 'Vanilla',
    description:
      'Vanilla - Experience the timeless classic flavor of smooth and creamy vanilla in our Vanilla yogurt, perfect for those who appreciate the simple pleasure of pure indulgence.',
    prodId: getRandomNumber(10000, 99999),
    price: 170.0,
    quantity: 0,
    imageUrl: 'assets/img/product/vanilla.jpg',
    selected: false,
  },
];
