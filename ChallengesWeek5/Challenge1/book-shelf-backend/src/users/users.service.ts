import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { User } from "./users.model";



@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    //userCreated: User
    async insertUser(userCreated: User): Promise<User | undefined>{
        let user = new this.userModel(userCreated);
        let result = await user.save();

        return result;
    }

    async findOne(username: string): Promise<User | undefined>{
        return this.userModel.find({ username: username});
    }
}
