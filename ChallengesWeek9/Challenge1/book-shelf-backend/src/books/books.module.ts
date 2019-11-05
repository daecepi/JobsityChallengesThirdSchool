import { Module, forwardRef } from '@nestjs/common';

//Database module
import { MongooseModule } from '@nestjs/mongoose';

//Schema for mongoose
import { bookSchema } from '../Schemas/books.schema';

//Import of the base files
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { LendingModule } from '../lending/lending.module';
import { EeventsGateway } from '../eevents.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: bookSchema }]), LendingModule],
  controllers: [BooksController],
  providers: [BooksService, EeventsGateway],
  exports: [BooksService],
})
export class BooksModule {}
