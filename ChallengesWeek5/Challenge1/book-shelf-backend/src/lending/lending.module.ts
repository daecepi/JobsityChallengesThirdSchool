import { Module } from '@nestjs/common';
import { LendingService } from './lending.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Lend', schema: LendSchema}]),
  ],
  providers: [LendingService],

})
export class LendingModule {}
