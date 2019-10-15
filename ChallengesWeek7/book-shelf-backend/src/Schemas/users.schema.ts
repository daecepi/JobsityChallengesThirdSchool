import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    identification: {type: String, required: true},
    name: {type: String, required: true},
    lname: {type: String, required: true},
    username:{type: String, required: true},
    password: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    favorites: [],
    readings: [],
    laterReadings: [],
});