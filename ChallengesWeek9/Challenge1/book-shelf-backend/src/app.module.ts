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

//import { Book } from './books/books.model';

import { ConfigModule } from 'nest-config'; //For dockerization in next iteration of the project
import { EeventsGateway } from './eevents.gateway';
import * as path from 'path';

//CRON section
import { ScheduleModule } from 'nest-schedule';
import { ReturnService } from './cron/return.service';

@Module({
  imports: [
    UsersModule,
    BooksModule,
    MongooseModule.forRoot('mongodb://localhost/BookshelfBD', { useNewUrlParser: true, useUnifiedTopology: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule,
    LendingModule,
    ScheduleModule.register(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    EeventsGateway,
    ReturnService
  ],
})
export class AppModule {}
