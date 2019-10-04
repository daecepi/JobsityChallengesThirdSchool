import { Injectable, InjectModel } from '@nestjs/common';

@Injectable()
export class LendingService {
    constructor(@InjectModel('Lend') lendsModel: Lend){}


    async createLend(){

    }
}
