import { ApiProperty } from '@nestjs/swagger';

export class ImagesDTO {
  @ApiProperty()
  readonly image: string;

  @ApiProperty()
  readonly image_name: string;

  @ApiProperty()
  readonly image_type: string;

  @ApiProperty()
  readonly image_size: number;

  @ApiProperty()
  readonly image_path: string;

  @ApiProperty()
  readonly image_url: string;

  @ApiProperty()
  readonly image_created_at: Date;

  @ApiProperty()
  readonly image_updated_at: Date;
}
