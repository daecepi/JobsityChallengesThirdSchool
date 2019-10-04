import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    identification: String,
    name: String,
    lname: String,
    username:String,
    password: String,
    age: Number,
    email: String,
});