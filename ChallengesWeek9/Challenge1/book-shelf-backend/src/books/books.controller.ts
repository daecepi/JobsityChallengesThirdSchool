import { Controller, Body, Get, Param, UseGuards, Put, Query, HttpException } from '@nestjs/common';

import { BooksService } from './books.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  /**
   * Endpoint to retrieve the books of API that has the ability to search by city, type and word in the titl
   * @param words words that going to be compared as regular expressions on the database
   * @param city : contains the city the book should be in
   * @param type : contains the type the book should have
   * @param startIndex : contains the index at which the books should be sent
   */
  @UseGuards(AuthGuard('jwt'))
  @Get()
  public async getBooks(
    @Query('words') words: string,
    @Query('cities') city: string,
    @Query('types') type,
    @Query('startIndex') startIndex: string,
  ) {
    return await this.booksService.searchBooks(words, city, type, startIndex);
  }

  /**
   * Endpoint to get a specific book
   * @param id id of the book to retrieve
   */
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  public async getBook(@Param('id') id: string) {
    let book = await this.booksService.getBook(id);

    return book;
  }

  /**
   * Endpoint to lend a book
   * @param id : holds the book id
   * @param userId : holds the identification of the user
   */
  @UseGuards(AuthGuard('jwt'))
  @Put('lend')
  public async lendBook(@Body('bookId') id: string, @Body('userId') userId: string, @Body('startDate') startDate: string, @Body('endDate') endDate: string) {
    console.log("Step one",startDate, endDate);
    console.log("Converted", new Date(startDate).toString(), new Date(endDate).toString());
    let result = await this.booksService.lendBook(id, userId, startDate, endDate);

    return result;
  }
}
