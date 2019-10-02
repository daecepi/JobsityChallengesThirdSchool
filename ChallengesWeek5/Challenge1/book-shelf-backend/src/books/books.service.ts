import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

//Class fro books
import { Book } from "./books.model";


@Injectable()
export class BooksService{

    private books: Book[] = [];

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

    async insertBook(title: string, description: string, authors: string[], publishedDate: string ,pageCount: number, imageLinks: string[], city: string, type: string ){
        let book = new this.bookModel({title, description, authors, publishedDate, pageCount, imageLinks, city, type});
        let result = await book.save();

        console.log(result);
        
        return result;
    }

    /**
     * Service function destined to retriev all of the books from the service
     */
    retrieveBooks(){
        return [...this.books];
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

    async updateBook(id:string){

    }

    async initializeData(){
        
    }
}