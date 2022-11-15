import { IsString } from 'class-validator';

export class CreateCarDTO {
  @IsString({message: `No se esta pasando el brand al servidor`})
  readonly brand: string;
  @IsString()
  readonly model: string;
}
