import { Controller, Body, Get, Param, UseGuards, Put } from "@nestjs/common";

import { BooksService } from './books.service';
import { AuthService } from "src/auth/auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('books')
export class BooksController{
    constructor(private readonly booksService: BooksService){}

    /**
     * Endpoint to retrieve the books of API
     */
    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async getBooks(){
        console.log("tere");
        return await this.booksService.getBooks();
    }

    /**
     * Endpoint to get a specific book
     * @param id id of the book to retrieve
     */
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    public async getBook(@Param('id') id: string){
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
    public async lendBook(@Body('bookId') id: string, @Body('userId') userId: string){
        //Calling the procedure destined for it
        let result = await this.booksService.lendBook(id, userId);
        
        return result ;
    }

    /**
     * Endpoint to return a lent book
     * @param id : holds the book id
     * @param userId : holds the identification of the user
     */
    @UseGuards(AuthGuard('jwt'))
    @Put('return')
    public async returnBook(@Body('bookId') id: string, @Body('userId') userId: string){
        let result = await this.booksService.returnBook(id, userId);

        return result;
    }
}