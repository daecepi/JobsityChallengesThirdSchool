import { Controller, Get, Body, Post, Param } from "@nestjs/common";

import { BooksService } from './books.service';

@Controller('books')
export class BooksController{

    @Post()
    public initializeBooks(){

    }

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

    @Get(':id')
    public getBook(@Param('id') id: string){

    }
}