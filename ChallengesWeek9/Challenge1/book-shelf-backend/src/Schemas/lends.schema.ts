import * as mongoose from 'mongoose';

export const lendSchema = new mongoose.Schema({
  user: { type: String, required: true },
  book: { type: String, required: true },
  startingDate: { type: String, required: true },
  finishDate: { type: String, required: true },
});
