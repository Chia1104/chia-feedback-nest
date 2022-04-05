import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ReposController } from './repos/controllers/repos.controller';
import { UsersController } from './users/controllers/users.controller';
import { FeedbacksController } from './feedbacks/controllers/feedbacks.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI, {
      dbName: process.env.MONGODB_DATABASE,
    }),
  ],
  controllers: [
    AppController,
    ReposController,
    UsersController,
    FeedbacksController,
  ],
  providers: [AppService],
})
export class AppModule {}
