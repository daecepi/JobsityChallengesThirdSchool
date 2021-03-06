import { Module } from "@nestjs/common";

//Database module
import {MongooseModule} from "@nestjs/mongoose";

//Schema for mongoose
import { bookSchema } from "../Schemas/books.schema";

//Import of the base files
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";
import { LendingModule } from "../lending/lending.module";
import { UsersModule } from "../users/users.module";


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Book', schema: bookSchema}]),
        LendingModule,
        UsersModule,
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule {}