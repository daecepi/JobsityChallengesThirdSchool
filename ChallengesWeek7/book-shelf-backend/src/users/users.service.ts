import { Injectable, NotFoundException, HttpException } from '@nestjs/common';

import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { User } from "./users.model";
import { BooksService } from '../books/books.service';



@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>, private readonly booksService: BooksService){}

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
     * Function that looks for a user
     * @param username : contains the username of the user to for
     */
    async findOne(username: string): Promise<User | HttpException>{
        console.log(username)
        return this.userModel.find({ username: username});
    }

    async addBookToFavorites(userId, bookId){
        let user = await this.userModel.find({id: userId});
        let book = await this.booksService.getBook(bookId);

        try {
            user.favorites.push(book);

            user.save();
        } catch (error) {
            return new HttpException('Error in the server while saving', 500);
        }
        return {status: 'success', message: 'Book saved to favorites list'};
    }

    async addBookToReadings(userId, bookId){
        let user = await this.userModel.find({id: userId});
        let book = await this.booksService.getBook(bookId);

        try {
            user.readings.push(book);

            user.save();
        } catch (error) {
            return new HttpException('Error in the server while saving', 500);
        }
        return {status: 'success', message: 'Book saved to readings list'};
    }

    async addBookToLaterReading(userId, bookId){
        
        let user = await this.userModel.find({id: userId});
        let book = await this.booksService.getBook(bookId);

        try {
            user.laterReadings.push(book);

            user.save();
        } catch (error) {
            return new HttpException('Error in the server while saving', 500);
        }
        return {status: 'success', message: 'Book saved to readings for later'};
    }
}
