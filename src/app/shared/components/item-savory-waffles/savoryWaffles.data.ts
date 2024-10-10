import { SavoryWaffles } from './savory-waffles';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const minTransactionId = 10000;
const maxTransactionId = 99999;

const randomTransactionId = getRandomNumber(minTransactionId, maxTransactionId);

export const SAVORYWAFFLES: SavoryWaffles[] = [
  {
    title: 'Divine Truffle',
    description:
      'Introducing Divine Truffle Waffle – a heavenly fusion of gourmet truffles and fluffy waffle goodness. Indulge in the perfect balance of richness and crispiness, elevating every bite to a divine experience.',
    prodId: getRandomNumber(10000, 99999),
    price: 800.0,
    quantity: 0,
    imageUrl: 'assets/img/product/divineTruffle.jpg',
    selected: false,
  },
  {
    title: 'Creamy Kani',
    description:
      'Introducing Creamy Kani Waffle – a delightful blend of sweet and savory, combining fluffy waffle goodness with rich Kani flavor. Indulge in a unique taste experience anytime, anywhere.',
    prodId: getRandomNumber(10000, 99999),
    price: 200.0,
    quantity: 0,
    imageUrl: 'assets/img/product/creamyKani.jpg',
    selected: false,
  },
  {
    title: 'Fiesta Burger',
    description:
      'Introducing Fiesta Burger Waffle – a savory sensation in every bite! Enjoy the delicious fusion of burger flavors in a convenient waffle form. Perfect for a quick meal or a tasty snack on the fly.',
    prodId: getRandomNumber(10000, 99999),
    price: 350.0,
    quantity: 0,
    imageUrl: 'assets/img/product/fiestaBurger.jpg',
    selected: false,
  },
  {
    title: 'Tasty Tuna',
    description:
      'Introducing Tasty Tuna Waffle – a savory sensation! Enjoy premium tuna infused into fluffy waffles for a delicious snack or light meal on the go.',
    prodId: getRandomNumber(10000, 99999),
    price: 250.0,
    quantity: 0,
    imageUrl: 'assets/img/product/tastyTuna.jpg',
    selected: false,
  },
  {
    title: 'Chicken Waffle',
    description:
      'Introducing Chicken Waffle – your savory classic favorite! Enjoy crispy waffles paired with a sweet tender chicken for a delicious meal.',
    prodId: getRandomNumber(10000, 99999),
    price: 600.0,
    quantity: 0,
    imageUrl: 'assets/img/product/chickenWaffle.jpg',
    selected: false,
  },
];
