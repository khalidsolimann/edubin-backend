import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { Shop, ShopDocument } from './schemas/shop.schema';
import { v4 as uuid } from 'uuid';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class ShopService {
  constructor(
    @InjectModel(Shop.name) private readonly shopModel: Model<ShopDocument>
    ) {}

  async createItem(createItemDto: CreateItemDto): Promise<Shop> {

    return await this.shopModel.create({...createItemDto, id: uuid()});
  }

  async getItems(): Promise<Shop[]> {
    return await this.shopModel.find().exec();
  }

  async getItemById(id: string): Promise<Shop> {
    const found = await this.shopModel.findOne({ id });
    if (!found) {
      throw new NotFoundException(`Item with ID "${id}" not found`);
    }
    return found;
  }

  async deleteItem(id: string): Promise<boolean> {
    const result = await this.shopModel.deleteOne({ id });
    if (!result.deletedCount) {
      throw new NotFoundException(`Item with ID "${id}" not found`);
    }
    return true;
  }
}
