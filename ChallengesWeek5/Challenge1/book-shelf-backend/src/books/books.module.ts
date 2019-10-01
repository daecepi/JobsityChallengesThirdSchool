import { Module } from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

//Import of the base files
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";


@Module({
    imports: [
        //MongooseModule.forFeature([{name: 'Book'}])
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule {}