import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout, NestSchedule } from 'nest-schedule';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { BooksService } from '../books/books.service';

@Injectable() // Only support SINGLETON scope
export class ReturnService extends NestSchedule {
  constructor(private readonly bookService: BooksService){
    super();
  }
  
  @Cron('0 * * * * *',  { key: 'books-available-cron' })
  async cronJob() {
    this.bookService.returnBooksOfDay()
    //const date = new Date();
    console.log("Books available for today done");
  }
}