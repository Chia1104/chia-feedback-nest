import { Injectable } from '@nestjs/common';
import { ReposRepository } from '../repositories';
import { Repos } from '../models';

@Injectable()
export class ReposService {
  constructor(private readonly reposRepository: ReposRepository) {}

  async findAll(): Promise<Repos[]> {
    return await this.reposRepository.findAll();
  }

  async findOne(_id: string): Promise<Repos> {
    return await this.reposRepository.findOne(_id);
  }

  async create(repos: Repos): Promise<Repos> {
    return await this.reposRepository.create(repos);
  }

  async update(_id: string, repos: Repos): Promise<Repos> {
    return await this.reposRepository.update(_id, repos);
  }

  async delete(_id: string): Promise<Repos> {
    return await this.reposRepository.delete(_id);
  }
}
