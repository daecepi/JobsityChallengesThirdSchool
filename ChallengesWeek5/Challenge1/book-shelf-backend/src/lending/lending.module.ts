import { Module } from '@nestjs/common';
import { LendingService } from './lending.service';

@Module({
  providers: [LendingService]
})
export class LendingModule {}
