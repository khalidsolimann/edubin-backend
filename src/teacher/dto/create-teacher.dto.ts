import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  picture: string;
}
