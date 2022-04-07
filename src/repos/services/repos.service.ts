import { Injectable } from '@nestjs/common';
import { ReposRepository } from '../repositories';
import { Repos } from '../models';

@Injectable()
export class ReposService {
  constructor(private readonly reposRepository: ReposRepository) {}

  async findAll(): Promise<Repos[]> {
    return await this.reposRepository.findAll();
  }
}
