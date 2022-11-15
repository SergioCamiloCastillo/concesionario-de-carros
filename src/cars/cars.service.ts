import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from "uuid";

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Delorean', model: 'DMC' },
    { id: uuid(), brand: 'Renault', model: 'R9' },
  ];

  findAll() {
    return this.cars;
  }
  findAllById(id: string) {
    const car = this.cars.find((result) => result.id === id);

    if (!car) {
      throw new NotFoundException(`Lo sentimos, el carro no fue encontrado`);
    }
    return car;
  }
}
