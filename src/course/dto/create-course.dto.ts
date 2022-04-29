import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  title: string;

  @IsNotEmpty()
  @IsUUID('4')
  teacher: string;

  @IsNotEmpty()
  @IsString()
  cover: string;
}
