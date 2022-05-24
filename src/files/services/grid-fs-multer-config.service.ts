import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import { GridFsStorage } from 'multer-gridfs-storage';

@Injectable()
export class GridFsMulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: new GridFsStorage({
        url: process.env.MONGODB_CONNECTION_URI,
        file: (req, file) => {
          return new Promise((resolve) => {
            const filename = file.originalname.trim();
            const fileInfo = {
              filename: filename,
            };
            resolve(fileInfo);
          });
        },
      }),
    };
  }
}
