import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReposDTO } from '../dtos';

@Injectable()
export class ReposRepository {
  constructor(
    @InjectModel('Repos') private readonly reposModel: Model<ReposDTO>,
  ) {}

  async findAll(): Promise<ReposDTO[]> {
    return await this.reposModel.find().exec();
  }

  async findOne(_id: string): Promise<ReposDTO> {
    return await this.reposModel.findById(_id).exec();
  }

  async create(repos: ReposDTO): Promise<ReposDTO> {
    return await new this.reposModel(repos).save();
  }

  async update(_id: string, repos: ReposDTO): Promise<ReposDTO> {
    return await this.reposModel
      .findByIdAndUpdate(_id, repos, { new: true })
      .exec();
  }

  async delete(_id: string): Promise<ReposDTO> {
    return await this.reposModel.findByIdAndRemove(_id).exec();
  }
}
