import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { User } from "./users.model";



@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    /**
     * Contains the user to update in the database
     * @param userToInsert : user that will be stored in the database
     */
    async insertUser(userToInsert: User): Promise<User | undefined>{
        let user = new this.userModel(userToInsert);
        let result = await user.save();

        return result;
    }

    /**
     * 
     * @param username : contains the username of the user to for
     */
    async findOne(username: string): Promise<User | undefined>{
        return this.userModel.find({ username: username});
    }
}
