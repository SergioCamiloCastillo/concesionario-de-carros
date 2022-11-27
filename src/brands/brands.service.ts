import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'DeLorean',
      createAt: new Date().getTime(),
    },
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((item) => item.id == id);
    if (!brand)
      throw new NotFoundException(`No fue encontrado el brand con el id ${id}`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((item) => {
      if (item.id == id) {
        brandDB.updateAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return item;
    });
    return `This action updates a #${id} brand`;
  }

  remove(id: string) {
    this.brands = this.brands.filter(item => item.id !==id);
    return `This action removes a #${id} brand`;
  }
  fillBrandsWithSeedData(brands: Brand[]){
    this.brands = brands;
  }
}
