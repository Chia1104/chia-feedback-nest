import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesController } from './controllers';
import { ImagesService } from './services';
import { ImagesSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Images', schema: ImagesSchema }]),
  ],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
