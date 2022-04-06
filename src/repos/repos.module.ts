import { Module } from '@nestjs/common';
import { ReposController } from './controllers';
import { ReposService } from './services';

@Module({
  controllers: [ReposController],
  providers: [ReposService],
})
export class ReposModule {}
