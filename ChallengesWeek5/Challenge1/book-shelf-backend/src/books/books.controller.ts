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

    @Get('test')
    public async addSomething(){
        //let result = await this.booksService.insertBook();
        let result = "";
        console.log(result);

        return result;  
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public getBooks(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('authors') authors: [],
        @Body('publishedDate') publishedDate: string,
        @Body('pageCount') pageCount: number,
        @Body('imageLinks') imageLinks: [],
        @Body('city') city: string,
        @Body('type') type: string
    ){

    }


    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    public getBook(@Param('id') id: string){
        this.booksService.getBook(id);
    }
}