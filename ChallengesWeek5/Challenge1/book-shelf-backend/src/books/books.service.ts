import { Injectable, NotFoundException } from "@nestjs/common";


@Injectable()
export class BooksService{

    private books: [] = [];

    async initializeData(){
        
    }


    retrieveBooks(){
        return [...this.books];
    }



    findBooks(){

    }




    getBook(){
        const product = {};
        if (!product) {
            throw new NotFoundException;
        }
        return product;
    }
}