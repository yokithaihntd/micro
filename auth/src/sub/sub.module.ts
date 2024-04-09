import { Module } from '@nestjs/common';
import { SubService } from './sub.service';
import { SubController } from './sub.controller';
import { HttpModule } from '@nestjs/axios';


@Module({
  controllers: [SubController],
  providers: [SubService],
  imports: [HttpModule]
})
export class SubModule {}
