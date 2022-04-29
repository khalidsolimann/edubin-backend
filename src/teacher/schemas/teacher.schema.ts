import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  jobTitle: string;

  @Prop()
  picture: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
