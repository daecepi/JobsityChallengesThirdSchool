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
    public async getBooks(@Param('words') words: string){
        if(words){
            return await this.booksService.searchBooks(words);
        }
        return await this.booksService.getBooks();
    }

    /**
     * Endpoint to get all digital books
     */
    @UseGuards(AuthGuard('jwt'))
    @Get('digital')
    public async getDigitalBook(){
        let book = await this.booksService.getBooksByType('Digital');

        return book;
    }

    /**
     * Endpoint to get all hardcover books (still not needed for the actual requirements)
     */
    @UseGuards(AuthGuard('jwt'))
    @Get('hardcover')
    public async getHardcoverBook(){
        let book = await this.booksService.getBooksByType('Hardcover');

        return book;
    }

    /**
     * Endpoint to get all books from a city
     * @param city : string of the city where to look the books from
     */
    @UseGuards(AuthGuard('jwt'))
    @Get('city/:city')
    public async getBooksByCity(@Param('city')city: string){
        let book = await this.booksService.getBooksbyCity(city);

        return book;
    }


    /**
     * Endpoint to looks for books that match the words passed in
     * @param words words that going to be compared as regular expressions on the database
     */
    @UseGuards(AuthGuard('jwt'))
    @Get('/search/:words')
    public async searchBooks(@Param('words') words: string){
        let book = await this.booksService.getBook(words);

        return book;
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


    
}