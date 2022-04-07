import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReposController } from './controllers';
import { ReposService } from './services';
import { ReposSchema } from './models';
import { ReposRepository } from './repositories';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Repos', schema: ReposSchema }]),
  ],
  controllers: [ReposController],
  providers: [ReposService, ReposRepository],
})
export class ReposModule {}
