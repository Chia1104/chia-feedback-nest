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

@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get()
  async getRepos() {
    return await this.reposService.findAll();
  }

  @Get(':id')
  async getRepo(@Param('id') _id: string) {
    return await this.reposService.findOne(_id);
  }

  @Post()
  async createRepo(@Body() body: any) {
    return await this.reposService.create(body);
  }

  @Patch(':id')
  async updateRepo(@Param('id') _id: string, @Body() body: any) {
    return await this.reposService.update(_id, body);
  }

  @Delete(':id')
  async deleteRepo(@Param('id') _id: string) {
    return await this.reposService.delete(_id);
  }
}
