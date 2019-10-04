import { Injectable} from '@nestjs/common';

import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

@Injectable()
export class LendingService {
    constructor(@InjectModel('Lend') lendsModel: Model<Lend>){}


    async createLend(){

    }
}
