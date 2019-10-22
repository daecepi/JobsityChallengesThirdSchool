import { Module } from '@nestjs/common';
import { LendingService } from './lending.service';
import { MongooseModule } from '@nestjs/mongoose';

import { lendSchema } from '../Schemas/lends.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Lend', schema: lendSchema }])],
  providers: [LendingService],
  exports: [LendingService],
})
export class LendingModule {}
