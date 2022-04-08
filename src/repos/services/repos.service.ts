import { Injectable, NotFoundException } from '@nestjs/common';
import { ReposRepository } from '../repositories';
import { ReposDTO } from '../dtos';

@Injectable()
export class ReposService {
  constructor(private readonly reposRepository: ReposRepository) {}

  async findAll(): Promise<ReposDTO[]> {
    return await this.reposRepository.findAll();
  }

  async findOne(_id: string): Promise<ReposDTO> {
    if (!_id.match(/^[0-9a-fA-F]{24}$/))
      throw new NotFoundException('Repos not found');
    const repos = await this.reposRepository.findOne(_id);
    if (!repos) throw new NotFoundException('Repos not found');
    return repos;
  }

  async create(reposDTO: ReposDTO): Promise<ReposDTO> {
    return await this.reposRepository.create(reposDTO);
  }

  async update(_id: string, reposDTO: ReposDTO): Promise<ReposDTO> {
    if (!_id.match(/^[0-9a-fA-F]{24}$/))
      throw new NotFoundException('Repos not found');
    const updatedRepos = await this.reposRepository.update(_id, reposDTO);
    if (!updatedRepos) throw new NotFoundException('Repos not found');
    return updatedRepos;
  }

  async delete(_id: string): Promise<ReposDTO> {
    if (!_id.match(/^[0-9a-fA-F]{24}$/))
      throw new NotFoundException('Repos not found');
    const deletedRepos = await this.reposRepository.delete(_id);
    if (!deletedRepos) throw new NotFoundException('Repos not found');
    return deletedRepos;
  }
}
