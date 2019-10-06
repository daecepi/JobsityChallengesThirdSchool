
import * as mongoose from 'mongoose';

export const lendSchema = new mongoose.Schema({
    user: String,
    book: String,
    startingDate: Date,
    finishDate: Date,
});