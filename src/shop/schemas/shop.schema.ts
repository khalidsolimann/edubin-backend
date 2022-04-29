import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShopDocument = Shop & Document;

@Schema()
export class Shop {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  picture: string;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);
