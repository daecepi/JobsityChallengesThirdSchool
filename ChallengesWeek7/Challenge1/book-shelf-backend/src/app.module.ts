import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

//MOdule to serve static files (like the dist folder)
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LendingModule } from './lending/lending.module';

import { ConfigModule } from 'nest-config'; //For dockerization in next iteration of the project
import * as path from 'path';

@Module({
  imports: [
    UsersModule,
    BooksModule,
    MongooseModule.forRoot('mongodb://localhost/BookshelfBD', { useNewUrlParser: true, useUnifiedTopology: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      renderPath: '/',
    }),
    AuthModule,
    LendingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
