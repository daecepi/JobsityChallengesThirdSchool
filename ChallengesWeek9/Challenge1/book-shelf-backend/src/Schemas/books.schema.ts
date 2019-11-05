import * as mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  authors: { type: [] },
  publishedDate: { type: String },
  pageCount: { type: Number },
  imageLinks: { type: [] },
  city: { type: String },
  type: { type: String },
  lent: { type: { user: String, startDate: Date, endDate: Date } },
});
