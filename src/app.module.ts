import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ReposModule } from './repos/repos.module';
import { UsersModule } from './users/users.module';
import { TodoController } from './todo/todo.controller';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI, {
      dbName: process.env.MONGODB_DATABASE,
    }),
    ReposModule,
    UsersModule,
    ImagesModule,
  ],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
