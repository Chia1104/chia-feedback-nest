import * as mongoose from 'mongoose';

//JavaScript object
export const ImagesSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  image_name: {
    type: String,
    required: true,
  },
  image_type: {
    type: String,
    required: true,
  },
  image_size: {
    type: Number,
    required: true,
  },
  image_path: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  image_created_at: {
    type: Date,
    required: true,
  },
  image_updated_at: {
    type: Date,
    required: true,
  },
});
