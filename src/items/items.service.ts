import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/items.interface';


@Injectable()
export class ItemsService 
{
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

    // private readonly items: Item[] = [
    //     {
    //         id: '1',
    //         name: 'item one',
    //         desc: 'this is item one',
    //         qty: 100
    //     },
    //     {
    //         id: '2',
    //         name: 'item two',
    //         desc: 'this is item two',
    //         qty: 200
    //     },
    //     {
    //         id: '3',
    //         name: 'item three',
    //         desc: 'this is item three',
    //         qty: 50
    //     },
    //     {
    //         id: '4',
    //         name: 'item four',
    //         desc: 'this is item four',
    //         qty: 421
    //     }
    // ]

    async getAll(): Promise<Item[]>
    {
        return await this.itemModel.find();
    }

    async getOne(id: string): Promise<Item | null>
    {
        return await this.itemModel.findById(id);
    }

    async create(item: Item): Promise<Item>
    {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }


    async delete(id: string): Promise<Item | null>
    {
        return await this.itemModel.findByIdAndDelete(id);
    }

    async update(id: string, item: Item): Promise<Item | null>
    {
        return await this.itemModel.findByIdAndUpdate(id, item, {new: true});
    }
}
