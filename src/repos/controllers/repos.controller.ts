import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ReposService } from '../services';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Repos')
@Controller('api/repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get()
  @ApiOperation({ summary: 'Get all repos' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async getRepos() {
    return await this.reposService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get repo by id(_id)' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async getRepo(@Param('id') _id: string) {
    return await this.reposService.findOne(_id);
  }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create new repo' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createRepo(@Body() body: any) {
    return await this.reposService.create(body);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update repo by id(_id)' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async updateRepo(@Param('id') _id: string, @Body() body: any) {
    return await this.reposService.update(_id, body);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete repo by id(_id)' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async deleteRepo(@Param('id') _id: string) {
    return await this.reposService.delete(_id);
  }
}
