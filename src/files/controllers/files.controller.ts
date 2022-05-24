import {
  Post,
  Get,
  Param,
  Res,
  Controller,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiTags('Files')
@Controller('files')
export class FilesController {
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload file' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @UseInterceptors(FilesInterceptor('file'))
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadFile(@UploadedFiles() files) {
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        originalName: file.originalName,
        encoding: file.encoding,
        mimeType: file.mimeType,
        id: file.id,
        fileName: file.fileName,
        metaData: file.metaData,
        bucketName: file.bucketName,
        chunkSize: file.chunkSize,
        size: file.size,
        md5: file.md5,
        uploadDate: file.uploadDate,
        contentType: file.contentType,
      };
      response.push(fileReponse);
    });
    return response;
  }
}
