import { Module } from '@nestjs/common';
import { LokersModule } from './lokers/lokers.module';
import { LokersController } from './lokers/lokers.controller';
import { LokersService } from './lokers/lokers.service';

@Module({
  imports: [LokersModule],
  controllers: [LokersController],
  providers: [LokersService],
})
export class AppModule { }
