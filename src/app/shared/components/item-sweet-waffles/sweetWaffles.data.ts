import { SweetWaffles } from './sweet-waffles';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomNumber(minTransactionId, maxTransactionId);

export const SWEETWAFFLES: SweetWaffles[] = [
  {
    title: 'Banana Choco',
    description:
      'Introducing Banana Choco Waffle – a delicious blend of ripe bananas and rich chocolate in every bite. Perfect for breakfast or dessert cravings.',
    prodId: getRandomNumber(10000, 99999),
    price: 200.0,
    quantity: 0,
    imageUrl: 'assets/img/product/bananaChoco.jpg',
    selected: false,
  },
  {
    title: 'Peach Mango',
    description:
      'Introducing Peach Mango Waffle – Enjoy the sweet flavors of ripe peaches and juicy mangoes in every bite. Perfect for a sunny start to your day.',
    prodId: getRandomNumber(10000, 99999),
    price: 200.0,
    quantity: 0,
    imageUrl: 'assets/img/product/peachMangoWaffle.png',
    selected: false,
  },
  {
    title: 'Strawberry Nutella',
    description:
      'Introducing Strawberry Nutella Waffle – Indulge in the perfect blend of juicy strawberries and creamy Nutella atop a fluffy waffle. Perfect for any time of day.',
    prodId: getRandomNumber(10000, 99999),
    price: 299.0,
    quantity: 0,
    imageUrl: 'assets/img/product/strawberryNutella.jpg',
    selected: false,
  },
];
