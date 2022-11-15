import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findAllById(id);
  }
  @Post()
  createCar(@Body() createCardDTO: CreateCarDTO) {
    return createCardDTO;
  }
  @Patch(':id')
  updateCar(@Body() body: any) {
    return body;
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return { method: 'delete', id };
  }
}
