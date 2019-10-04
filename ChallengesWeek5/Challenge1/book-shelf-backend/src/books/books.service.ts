import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

//Books interface
import { Book } from "./books.model";


@Injectable()
export class BooksService{

    /**
     * 
     * @param bookModel : model of the books based on the interface created for it
     */
    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

    /**
     * Service function destined to retriev all of the books from the service
     */
    async getBooks(): Promise<Book[] | undefined>{
        let books = this.bookModel.find();
        return books;
    }

    /**
     * Function that looks for a book and retrieves it 
     * @param id : contains the id of the book that is required
     */
    async getBook(id: string): Promise<Book[] | undefined>{
        const book = this.bookModel.findById(id);
        if (!book) {
            throw new NotFoundException;
        }
        return book;
    }

    /**
     * Proceduyre in the service destined to lend the book if the book is not lent
     * @param id : holds the id of the book
     * @param user : holds the identification of the user
     */
    async lendBook(id, user){
        const book = this.bookModel.findById(id);
        
        if (!book) {
            throw new NotFoundException('Couldnt find book');
        }

        if (book.type === 'digital') {
            throw new HttpException('Digital books cannot be lent', 403);
        }

        if(book.lendingInfo !== undefined){
            throw new HttpException("The books is already lent", 403);
        }

        book.lendingInfo = user;
        let result = book.save();
        return result;
    }


    /**
     * Proceduyre in the service destined to return the book if the user was the one thatlent it
     * @param id : holds the id of the book
     * @param user : holds the identification of the user
     */
    async returnBook(id, user){
        let book = this.bookModel.findById(id);
        console.log(id, user);
        if(!book){
            throw new NotFoundException('Couldn\'t find the books');
        }

        //Making sure that the propertie exists
        if (!book.lendingInfo) {
            book.lendingInfo = undefined;
        }

        if (book.type === 'digital') {
            throw new HttpException('Digital books cannot be lent and thus till now not necessarrily returned', 403);
        }

        if(book.lendingInfo !== undefined){
            throw new HttpException("The books is already lent", 403);
        }

        book.lendingInfo = undefined;
        let result = book.save();

        return result;
    }
}