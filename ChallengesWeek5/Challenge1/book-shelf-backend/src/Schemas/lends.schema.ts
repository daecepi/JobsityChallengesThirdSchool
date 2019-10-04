
import * as mongoose from 'mongoose';

export const lendSchema = new mongoose.Schema({
    title: String,
    description: String,
    authors: [],
    publishedDate: String,
    pageCount: Number,
    imageLinks: [],
    city: String,
    type: String,
    lent: String,
});