import { IsString, MinLength } from 'class-validator';

export class CreateCarDTO {
  @IsString({message: `No se esta pasando el brand al servidor`})
  readonly brand: string;
  @IsString()
  @MinLength(3,{message:'Debe tener el menos 3 letras'})
  readonly model: string;
}
