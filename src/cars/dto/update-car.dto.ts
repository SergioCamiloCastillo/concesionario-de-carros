import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDTO {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: `No se esta pasando el brand al servidor` })
  @IsOptional()
  readonly brand?: string;
  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'Debe tener el menos 3 letras' })
  readonly model?: string;
}
