import { Injectable, NotFoundException, HttpException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';


//Books interface
import { Book } from './books.model';

var mongoose = require("mongoose");

//Adding the lending service
import { LendingService } from '../lending/lending.service';
import { EeventsGateway } from '../eevents.gateway';

@Injectable()
export class BooksService {
  /**
   *
   * @param bookModel : model of the books based on the interface created for it
   */
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<Book>,
    private readonly lendService: LendingService,
    private lendsGateway: EeventsGateway,
  ) {}

  /**
   * Function that looks for a book and retrieves it
   * @param id : contains the id of the book that is required
   */
  async getBook(id: string): Promise<{ state: string; book: Book } | HttpException> {
    //Error handling for mongoose id
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new BadRequestException('Invalid ID!');
    }

    //Searching for books id
    const book = this.bookModel.findById(id);

    //Verifing that the book exists
    if (!book) {
      return new HttpException('Digital books cannot be lent', 404);
    }
    return { state: 'success', book: book };
  }

  /**
   * Service function destined to retriev all of the books that in the title posses the substring wanted
   * @param words words that going to be compared as regular expressions on the database
   * @param city : contains the city the book should be in
   * @param type : contains the type the book should have
   * @param startIndex : contains the index at which the books should be sent
   */
  async searchBooks(
    words: string,
    city: string,
    type: string,
    startIndex: string,
  ): Promise<{ state: string; totalPages: number; pageNumber: number; books: Book[] } | HttpException> {
    //Error handlers
    if (!startIndex) {
      return new HttpException('A start index should be provided', 400);
    } else if (!/^\d+$/.test(startIndex)) {
      //Verifing that the index is a number
      return new HttpException('The start index of the books lookup should be numeric', 400);
    }
    
    const index = parseInt(startIndex);

    let filters = {};
    if (city) {
      filters['cities'] = city;
    }
    if (type) {
      filters['types'] = type;
    }
    if (words) {
      filters['title'] = { $regex: words };
    }

    //Usage of aggregate
    let books = await this.bookModel.aggregate([
      {
        $facet: {
          totalData: [{ $match: filters }, { $skip: index * 10 }, { $limit: 10 }],
          totalCount: [{ $match: filters }, { $count: 'count' }],
        },
      },
    ]);

    let count = 0;
    if (books[0].totalData.length !== 0) {
      //Making sure the query had data before paginating
      count = books[0].totalCount[0].count ? Math.ceil(books[0].totalCount[0].count / 10) : 0; // Build the count object if data exists
    }

    return { state: 'Success', totalPages: count, pageNumber: index, books: books[0].totalData };
  }

  /**
   * Proceduyre in the service destined to lend the book if the book is not lent
   * @param bookId : holds the id of the book
   * @param userId : holds the identification of the user
   */
  async lendBook(bookId: string, userId: string, startDate: string, endDate: string): Promise<{ state: string; book: Book } | any> {
    const isValidBook = mongoose.Types.ObjectId.isValid(bookId);
    const isValidUser = mongoose.Types.ObjectId.isValid(userId);
    

    console.log("Step one",startDate, endDate);
    console.log("Converted", new Date(startDate).toString(), new Date(endDate).toString());

    //Error handling for mongoose ids
    if (!isValidBook|| !isValidUser) {
      throw new BadRequestException('Invalid element ids for book of user!');
    }
    //Error handler for knowing that a
    if (!bookId || !userId) {
      return new HttpException("An identification for the user and the book' id to be lent must be specified", 400);
    }
    //Looking for the book in the database
    const book = await this.bookModel.findById(bookId);
    //Making sure the book exists
    if (!book) {
      return new HttpException('No books found under the information given', 404);
    }

    //Verifing the book is not digital
    if (book.type === 'Digital') {
      return new HttpException('Digital books cannot be lent', 400);
    }

    //Verifing that the book is not already lent
    if (book.lent !== undefined) {
      return new HttpException('The books is already lent', 204); //Status code recommended by a programmer at jobsity Cartagena
    }

    //Calling the procedure destined for it
    if(!startDate){
      return new HttpException("A start date must be provided",400);
    }

    if(!endDate){
      return new HttpException("A end date must be provided",400);
    }


    //Error handlers for date validation
    const actualDate = new Date();
    const startDateGot = new Date(startDate);
    const endDateGot = new Date(endDate);


    //Validating according to current requierements startdate must be when reservation solicited
    if( startDateGot.getDate() !== actualDate.getDate() || startDateGot.getMonth() !== actualDate.getMonth() || startDateGot.getFullYear() !== actualDate.getFullYear()){
      return new HttpException("The start date of the request should be in the present date", 400);
    }

    //Evaluating return date isn't as close (taking a minute as the base delay for the client to connect to server)
    if((endDateGot.getTime() - startDateGot.getTime())/1000 < 60000 ){
      return new HttpException("Return of the book must be more than a minute.", 400);
    }

    if(startDateGot.getTime() > endDateGot.getTime()){
      return new HttpException("The start date can't be after end one", 400);
    }

    //Updating the book's lent property with a user and the date when the lent started
    book.lent = { user: userId, startDate: startDateGot, endDate: endDateGot };

    //Updating the book in the database
    let result = await book.save();

    await this.lendsGateway.wss.emit("LendUpdate",JSON.stringify(result));

    return { state: 'Success', book: result };
  }

  /**
   * Proceduyre in the service destined to return the book if the user was the one thatlent it
   * @param bookId : holds the id of the book
   * @param userId : holds the identification of the user
   */
  async returnBook(bookId: string, userId: string): Promise<{ state: string; book: Book } | HttpException> {
    //Error handling for mongoose ids
    if (!mongoose.Types.ObjectId.isValid(bookId) || !mongoose.Types.ObjectId.isValid(userId)) {
      throw new BadRequestException('Invalid element ids for book of user!');
    }

    //Looking for the book in the database
    let book = await this.bookModel.findById(bookId);

    //Making sure the book exists
    if (!book) {
      throw new NotFoundException("Couldn't find the books");
    }

    //Verifing the book is not digital
    if (book.type === 'Digital') {
      return new HttpException('Digital books cannot be lent and thus till now not necessarrily returned', 400);
    }

    //Verifing that the book is actually lent
    if (book.lent === undefined) {
      return new HttpException("The book hasn't been lent", 400);
    }

    //Verifing the user returning it is the one that lent it
    if (book.lent.user !== userId) {
      return new HttpException("The book wasn't lend by this user", 400);
    }

    //Insertion of the lend details in the lends database
    let date = new Date().toString();
    await this.lendService.saveLend({
      user: userId,
      book: bookId,
      startingDate: book.lent.startDate,
      finishDate: date,
    });

    //Clearing state of the book's lent property
    book.lent = undefined;

    //Updating book
    let result = await book.save();

    return { state: 'success', book: result };
  }


  /**
   * Function that will check for books that will be returned today and free them
   */
  async returnBooksOfDay(){
    const actual = new Date();
    const baseString = actual.getFullYear()+'-'+(actual.getMonth()+1)+'-'+actual.getDate();

    const earlyDate = new Date(baseString+' 00:00:00');
    const lateDate = new Date(baseString+' 23:59:59');

    return await this.bookModel.updateMany({ $and: [{"lent.endDate": {$gte: earlyDate}} , {"lent.endDate": {$lte: lateDate}}]}, {"$unset": {lent: ""}});
  }
}
