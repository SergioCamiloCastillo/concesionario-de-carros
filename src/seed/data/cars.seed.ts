import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Mazda',
    model: '9',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: '323',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cheroke',
  }
];
