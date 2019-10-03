import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    identification: String,
    user: String,
    password: String,
    age: Number,
    email: String,
});