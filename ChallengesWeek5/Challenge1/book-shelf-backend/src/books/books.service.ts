import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

//Class fro books
import { Book } from "./books.model";


@Injectable()
export class BooksService{

    private books: Book[] = [];

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

    async insertBook(title: string, description: string, authors: string[], publishedDate: string ,pageCount: number, imageLinks: string[], city: string, type: string, lent: string ){
        let book = new this.bookModel({title, description, authors, publishedDate, pageCount, imageLinks, city, type, lent});
        let result = await book.save();

        console.log(result);
        
        return result;
    }

    /**
     * Service function destined to retriev all of the books from the service
     */
    getBooks(){
        let books = this.bookModel.find({});

        console.log(books);
        
        return books;
    }

    /**
     * Function that looks for a book and retrieves it 
     * @param id : contains the id of the book that is required
     */
    async getBook(id: string){
        const product = this.bookModel.findById(id);
        if (!product) {
            throw new NotFoundException;
        }
        return product;
    }

    /**
     * Proceduyre in the service destined to lend the book if the book is not lent
     * @param id : holds the id of the book
     * @param user : holds the identification of the user
     */
    async lendBook(id, user){

    }

    /**
     * Proceduyre in the service destined to return the book if the user was the one thatlent it
     * @param id : holds the id of the book
     * @param user : holds the identification of the user
     */
    async returnBook(id, user){

    }

    async updateBook(id:string){

    }
}