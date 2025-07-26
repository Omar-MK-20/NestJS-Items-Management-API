import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface';


@Controller('items')
export class ItemsController 
{

    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async getAll(): Promise<Item[]> {
        return await this.itemsService.getAll();
    }

    @Get(':id')
    async getItem(@Param() param): Promise<Item | null | string>
    {
        if(await this.itemsService.getOne(param.id) === null)
        {
            return `there is no item with id ${param.id}`
        }
        else
        {
            return await this.itemsService.getOne(param.id)
        }
        
    }

    @Post()
    async createItem(@Body() createItemDto: CreateItemDto): Promise<Item> 
    {
        return await this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    async deleteItem(@Param('id') id): Promise<Item | null>
    {
        return await this.itemsService.delete(id); 
    }


    @Put(':id')
    async updateItem(@Param() param, @Body() updtaeItemDto: CreateItemDto ): Promise<Item | null>
    {
        return await this.itemsService.update(param.id, updtaeItemDto) 
    }
}
