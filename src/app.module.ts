import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ReposModule } from './repos/repos.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI, {
      dbName: process.env.MONGODB_DATABASE,
    }),
    ReposModule,
    FilesModule,
  ],
})
export class AppModule {}
