import { Injectable, NotFoundException, HttpException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

//Books interface
import { Book } from "./books.model";

//Adding the lending service
import { LendingService } from "../lending/lending.service";

@Injectable()
export class BooksService{

    /**
     * 
     * @param bookModel : model of the books based on the interface created for it
     */
    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>, private readonly lendService: LendingService){}

    /**
     * Function that looks for a book and retrieves it 
     * @param id : contains the id of the book that is required
     */
    async getBook(id: string): Promise<Book | HttpException>{
        const book = this.bookModel.findById(id);

        //Verifing that the book exists
        if (!book) {
            return new HttpException('Digital books cannot be lent', 404);
        }
        return book;
    }

    /**
     * Service function destined to retriev all of the books from the service
     *  @retuns Promise of books wanted
     */
    async getBooks(): Promise<Book[] | HttpException>{
        let books = this.bookModel.find();

        //Verifing that books were resolved
        if (!books) {
            return new HttpException('Could not resolve any books', 500);
        }

        return books;
    }

    /**
     * Service function destined to retriev all of the books that are digital
     *  @retuns Promise of books wanted
     */
    async getBooksByType(type: string): Promise<Book[] | HttpException>{
        let books = this.bookModel.find({type: type});

        //Verifing that books were resolved
        if (!books) {
            return new HttpException('Could not resolve any books', 500);
        }

        return books;
    }

    /**
     * Service function destined to retriev all of the books that are digital
     *  @retuns Promise of books wanted
     */
    async getBooksbyCity(city: string): Promise<Book[] | HttpException>{
        let books = this.bookModel.find({city: city});

        //Verifing that books were resolved
        if (!books) {
            return new HttpException('Could not resolve any books', 500);
        }

        return books;
    }

    /**
     * Service function destined to retriev all of the books that in the title posses the substring wanted
     *  @retuns Promise of books wanted
     */
    async searchBooks(words: string): Promise<Book[] | HttpException>{
        const books = this.bookModel.find({name: {regex: `/${words}/`}})

        //Verifing that the book exists
        if (!books) {
            return new HttpException('No books with that description were found', 404);
        }

        return books;
    }

    /**
     * Proceduyre in the service destined to lend the book if the book is not lent
     * @param id : holds the id of the book
     * @param user : holds the identification of the user
     */
    async lendBook(id: string, user: string): Promise<Book | HttpException>{
        
        //Looking for the book in the database
        const book = await this.bookModel.findById(id);
        
        //Making sure the book exists
        if (!book) {
            return new HttpException('Digital books cannot be lent', 404);
        }
        console.log(book.type);
        //Verifing the book is not digital
        if (book.type === 'Digital') {
            return new HttpException('Digital books cannot be lent', 400);
        }

        //Verifing that the book is not already lent
        if(book.lent !== undefined){
            return new HttpException("The books is already lent", 204); //Status code recommended by a programmer at jobsity Cartagena
        }

        //Updating the book's lent property with a user and the date when the lent started
        book.lent = {user: user, startDate: new Date().toString()};

        //Updating the book in the database
        let result = await book.save();

        return result;
    }


    /**
     * Proceduyre in the service destined to return the book if the user was the one thatlent it
     * @param id : holds the id of the book
     * @param user : holds the identification of the user
     */
    async returnBook(id: string, user: string): Promise<Book | HttpException>{
        //Looking for the book in the database
        let book = await this.bookModel.findById(id);
        
        //Making sure the book exists
        if(!book){
            throw new NotFoundException('Couldn\'t find the books');
        }

        //Verifing the book is not digital
        if (book.type === 'Digital') {
            return new HttpException('Digital books cannot be lent and thus till now not necessarrily returned', 400);
        }

        //Verifing that the book is actually lent
        if(book.lent === undefined){
            return new HttpException("The book hasn't been lent", 400);
        }

        //Verifing the user returning it is the one that lent it
        if(book.lent.user !== user){
            return new HttpException("The book wasn't lend by this user", 400);
        }

        //Insertion of the lend details in the lends database
        let date = new Date().toString();
        console.log(book.lent);
        await this.lendService.saveLend({user: user, book: id, startingDate: book.lent.startDate, finishDate: date});
        
        //Clearing state of the book's lent property
        book.lent = undefined;

        
        //Updating book
        let result = await book.save();

        return result;
    }
}