import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('shop')
export class ShopController {
  constructor(private readonly ShopService: ShopService) {}
SSSS
  @Post()
  async createItem(@Body() createItemDto: CreateItemDto) {
    return await this.ShopService.createItem(createItemDto);
  }

  @Get('/:id')
  async getItemById(@Param('id') id: string) {
    return await this.ShopService.getItemById(id);
  }

  @Get()
  async getItems() {
    return await this.ShopService.getItems();
  }

  @Delete('/:id')
  async deleteItem(@Param('id') id: string) {
    return await this.ShopService.deleteItem(id);
  }
}
