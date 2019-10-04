
import { Model } from "mongoose";

export interface Lend extends Model{
    user: string,
    book: string,
    
    startingDate: Date,
}