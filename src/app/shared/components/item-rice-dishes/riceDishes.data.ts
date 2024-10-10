import { RiceDishes } from './rice-dishes';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomNumber(minTransactionId, maxTransactionId);

export const RICEDISHES: RiceDishes[] = [
  {
    title: 'Wapolicious Chicken',
    description:
      'Introducing Wapolicious Chicken – a savory sensation inspired by Chicken Inasal! Grilled to perfection with traditional Filipino spices, our tender and juicy chicken promises a flavorful delight in every bite.',
    prodId: getRandomNumber(10000, 99999),
    price: 325.0,
    quantity: 0,
    imageUrl: 'assets/img/product/wapoliciousChicken.jpg',
    selected: false,
  },
  {
    title: 'Wings and Rice',
    description:
      'Introducing Wings and Rice – a savory delight thats sure to tantalize your taste buds! Indulge in our perfectly seasoned chicken wings, cooked to crispy perfection and paired with fluffy rice for a satisfying meal thats packed with flavor.',
    prodId: getRandomNumber(10000, 99999),
    price: 280.0,
    quantity: 0,
    imageUrl: 'assets/img/product/wingsAndRice.jpg',
    selected: false,
  },
  {
    title: 'Salizbury Steak',
    description:
      'ntroducing our classic Salisbury Steak – tender beef patties, expertly seasoned and smothered in rich, savory gravy. Served alongside creamy mashed potatoes and crisp green beans, its a comforting meal that never goes out of style.',
    prodId: getRandomNumber(10000, 99999),
    price: 460.0,
    quantity: 0,
    imageUrl: 'assets/img/product/salizburySteak.jpg',
    selected: false,
  },
];
