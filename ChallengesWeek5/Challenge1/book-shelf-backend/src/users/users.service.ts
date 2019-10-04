import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { User } from "./users.model";



@Injectable()
export class UsersService {
    private readonly users: any[];
    constructor(@InjectModel('User') private readonly userModel: Model<User>){
        this.users = [
            {
                userId: 1,
                user: 'max',
                password: 'maxter'
            },
            {
                userId: 2,
                user: 'meso',
                password: 'osem'
            },
            {
                userId: 3,
                user: 'michell',
                password: 'holamichelle'
            },
        ];
    }

    //userCreated: User
    async insertUser(identification: string, name: string, lname: string, username: string, password: string, age: number, email: string): Promise<User | undefined>{
        let user = new this.userModel({identification, name, lname, username, password, age, email});
        let result = await user.save();

        return result;
    }

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user=>user.user === username);
    }
}
