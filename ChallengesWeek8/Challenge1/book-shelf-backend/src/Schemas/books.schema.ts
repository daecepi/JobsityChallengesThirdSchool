import * as mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authors: { type: [], required: true },
  publishedDate: { type: String, required: true },
  pageCount: { type: Number, required: true },
  imageLinks: { type: [], required: true },
  city: { type: String, required: true },
  type: { type: String, required: true },
  lent: { type: { user: String, date: String } },
});
