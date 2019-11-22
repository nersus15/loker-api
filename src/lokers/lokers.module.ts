import { Module } from '@nestjs/common';
import { LokersController } from './lokers.controller';
import { LokersService } from './lokers.service';

@Module({
  controllers: [LokersController],
  providers: [LokersService]
})
export class LokersModule {}
