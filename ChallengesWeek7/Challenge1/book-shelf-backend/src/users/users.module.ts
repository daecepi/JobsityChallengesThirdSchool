import { Module, forwardRef } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../Schemas/users.schema';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { BooksModule } from '../books/books.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }]), BooksModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
