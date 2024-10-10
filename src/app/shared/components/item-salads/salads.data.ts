import { Salads } from './salads';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomNumber(minTransactionId, maxTransactionId);

export const SALADS: Salads[] = [
  {
    title: 'Chicken Tamarind',
    description:
      'Introducing Chicken Tamarind Waffle – a savory delight with a tangy twist! Enjoy tender chicken infused with zesty tamarind sauce atop a crispy waffle. Perfect for a flavorful meal or snack on the go.',
    prodId: getRandomNumber(10000, 99999),
    price: 400.0,
    quantity: 0,
    imageUrl: 'assets/img/product/chickenTamarind.jpg',
    selected: false,
  },
  {
    title: 'Haus Salad',
    description:
      'Introducing Haus Salad Waffle – a fresh and crispy delight thats sure to tantalize your taste buds! Elevate your salad experience, Whether youre craving a light lunch or a satisfying snack.',
    prodId: getRandomNumber(10000, 99999),
    price: 300.0,
    quantity: 0,
    imageUrl: 'assets/img/product/hausSalad.jpg',
    selected: false,
  },
];
