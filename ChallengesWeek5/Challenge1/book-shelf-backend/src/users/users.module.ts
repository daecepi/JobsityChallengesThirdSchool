import { Module } from '@nestjs/common';

import { MongooseModule } from "@nestjs/mongoose";
import { userSchema } from "../Schemas/users.schema";

import { UsersService } from './users.service';
import { UsersController } from './users.controller';



@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: userSchema}])
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
