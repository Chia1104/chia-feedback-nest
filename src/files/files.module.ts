import { Module } from '@nestjs/common';
import { FilesController } from './controllers';
import { FilesService, GridFsMulterConfigService } from './services';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: GridFsMulterConfigService,
    }),
  ],
  controllers: [FilesController],
  providers: [FilesService, GridFsMulterConfigService],
})
export class FilesModule {}
