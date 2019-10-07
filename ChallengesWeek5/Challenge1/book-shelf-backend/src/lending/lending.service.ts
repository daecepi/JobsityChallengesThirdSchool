import { Injectable} from '@nestjs/common';

import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { Lend } from "./lending.model";

/**
 * CLASS DESTINED TO MANAGE LENDINGS
 * Actual approach: save the lendings finished for history (since the keeper of the book can be more easily consulted in book itself)
 */
@Injectable()
export class LendingService {
    constructor(@InjectModel('Lend') private readonly lendsModel: Model<Lend>){}


    async saveLend(book, user, startDate, endDate): Promise<Lend>{
        //Creating the new lend
        let lend = new this.lendsModel(book, user, startDate, endDate);

        //Save the book to the database
        let result = await lend.save();

        return result;
    }
}
