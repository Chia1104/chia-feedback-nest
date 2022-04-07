import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repos } from '../models';

@Injectable()
export class ReposRepository {
  constructor(
    @InjectModel('Repos') private readonly reposModel: Model<Repos>,
  ) {}

  async findAll(): Promise<Repos[]> {
    return await this.reposModel.find().exec();
  }

  async findOne(_id: string): Promise<Repos> {
    const repos = await this.reposModel.findById(_id).exec();
    if (!repos) throw new NotFoundException('Repos not found');
    return repos;
  }

  async create(repos: Repos): Promise<Repos> {
    const newRepos = new this.reposModel(repos);
    return await newRepos.save();
  }

  async update(_id: string, repos: Repos): Promise<Repos> {
    const updatedRepos = await this.reposModel
      .findByIdAndUpdate(_id, repos, { new: true })
      .exec();
    if (!updatedRepos) throw new NotFoundException('Repos not found');
    return updatedRepos;
  }

  async delete(_id: string): Promise<Repos> {
    const deletedRepos = await this.reposModel.findByIdAndRemove(_id).exec();
    if (!deletedRepos) throw new NotFoundException('Repos not found');
    return deletedRepos;
  }
}
