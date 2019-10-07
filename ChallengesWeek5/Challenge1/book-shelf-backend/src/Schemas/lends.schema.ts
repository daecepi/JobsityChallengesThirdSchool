
import * as mongoose from 'mongoose';

export const lendSchema = new mongoose.Schema({
    user: {type: String, required: true},
    book: {type: String, required: true},
    startingDate: {type: Date, required: true},
    finishDate: {type: Date, required: true},
});