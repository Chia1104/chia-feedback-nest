import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReposController } from './controllers';
import { ReposService } from './services';
import { ReposSchema } from './models';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Repos', schema: ReposSchema }]),
  ],
  controllers: [ReposController],
  providers: [ReposService],
})
export class ReposModule {}
