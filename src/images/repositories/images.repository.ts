import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImagesDTO } from '../dtos';

@Injectable()
export class ImagesRepository {
  constructor(
    @InjectModel('Images') private readonly imagesModel: Model<ImagesDTO>,
  ) {}

  async create(images: ImagesDTO): Promise<ImagesDTO> {
    const createdImages = new this.imagesModel(images);
    return await createdImages.save();
  }

  async findAll(): Promise<ImagesDTO[]> {
    return await this.imagesModel.find().exec();
  }

  async findOne(_id: string): Promise<ImagesDTO> {
    return await this.imagesModel.findById(_id).exec();
  }

  async update(_id: string, images: ImagesDTO): Promise<ImagesDTO> {
    return await this.imagesModel
      .findByIdAndUpdate(_id, images, { new: true })
      .exec();
  }

  async delete(_id: string): Promise<ImagesDTO> {
    return await this.imagesModel.findByIdAndDelete(_id).exec();
  }
}
