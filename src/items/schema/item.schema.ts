import { Schema } from 'mongoose';

export const ItemSchema = new Schema(
    {
        name: String,
        qty: Number,
        desc: String
    }
);