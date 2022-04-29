import { IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  title: string;

  @IsNotEmpty()
  @IsNumberString()
  price: number;

  @IsNotEmpty()
  @IsString()
  picture: string;
}
