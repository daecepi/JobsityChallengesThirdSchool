import { Controller, Get, Body, Post, Param, UseGuards } from "@nestjs/common";

import { BooksService } from './books.service';
import { AuthService } from "src/auth/auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('books')
export class BooksController{
    constructor(private readonly booksService: BooksService){}
    @Post()
    public initializeBooks(){

    }

    
    @Post('add')
    public async addSomething(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('authors') authors: [],
        @Body('publishedDate') publishedDate: string,
        @Body('pageCount') pageCount: number,
        @Body('imageLinks') imageLinks: [],
        @Body('city') city: string,
        @Body('type') type: string,
        @Body('Lent') lent: string,
    ){
        let result = await this.booksService.insertBook(title, description, authors, publishedDate, pageCount, imageLinks, city, type, lent);
        console.log(result);

        return result;  
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async getBooks(){
        return this.booksService.getBooks();
    }


    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    public async getBook(@Param('id') id: string){
        let book = this.booksService.getBook(id);

        console.log(book);

        return book;
    }


    /**
     * 
     * @param id : holds the book id
     * @param userId : holds the identification of the user
     */
    @UseGuards(AuthGuard('jwt'))
    @Post('lend')
    public async lendBook(@Param('id') id: string, @Param('userId') userId: string){
        console.log(id, userId);

        let result = await this.booksService.lendBook(id, userId);
        
        
        return result ;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('return')
    public async returnBook(@Param('id') id: string, @Param('userId') userId: string){
        let result = await this.booksService.returnBook(id, userId);

        console.log(id, userId);

        return result;
    }
}