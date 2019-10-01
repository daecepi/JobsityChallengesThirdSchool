import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

//Class fro books
import { Book } from "./books.model";


@Injectable()
export class BooksService{

    private books: Book[] = [];

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

    async insertBook(){
        let book = new this.bookModel({title: 'tie', description: 'sdadsda', authors: ['matt', 'beacon'], publishedDate: 'asda', pageCount: 10, imageLinks: ['asda', 'sadd'], city: 'CArtagena', type: 'digital'});
        let result = await book.save();

        console.log(result);
        
        return result;
    }

    async initializeData(){
        
    }


    retrieveBooks(){
        return [...this.books];
    }



    findBooks(){

    }




    getBook(){
        const product = {};
        if (!product) {
            throw new NotFoundException;
        }
        return product;
    }
}