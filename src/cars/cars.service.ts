import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';
import { map } from 'rxjs';

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

  create(createCardDTO: CreateCarDTO) {
    const car: Car = {
      id: uuid(),
      ...createCardDTO,
    };
    return this.cars.push(car);
  }
  update(id: string, updateCarDTO: UpdateCarDTO) {
    let carDB = this.findAllById(id);
    if (updateCarDTO.id && updateCarDTO.id !== id) {
      throw new BadRequestException('Car id no es valido en el body');
    }
    this.cars = this.cars.map((item) => {
      if (item.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDTO,
          id,
        };
        return carDB;
      }
      return item;
    });
    return carDB;
  }
  delete(id: string) {
    const car = this.findAllById(id);
    this.cars = this.cars.filter((car) => car.id !== id); 
    return 
  }
  fillCarsWithSeedData(cars: Car[]){
    this.cars = cars;
  }
}
