import { Injectable} from '@nestjs/common';

import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { Lend } from "./lending.model";

@Injectable()
export class LendingService {
    constructor(@InjectModel('Lend') private readonly lendsModel: Model<Lend>){}


    async saveLend(book, user, startDate, endDate){
        //Creating the new lend
        let lend = new this.lendsModel(book, user, startDate, endDate);

        //Save the book to the database
        let result = await lend.save();

        return result;
    }
}
