import { Injectable } from '@nestjs/common';
import { Cron, NestSchedule } from 'nest-schedule';

import { BooksService } from '../books/books.service';

@Injectable() // Only support SINGLETON scope
export class ReturnService extends NestSchedule {
  constructor(private readonly bookService: BooksService){
    super();
  }
  
  @Cron('0 */3 * * * *',  { key: 'books-available-cron' })
  async cronJob() {
    let result = await this.bookService.returnBooksOfDay();
    console.log("Books available for today task runned: "+result['nModified']+ "new books freed");
  }
}