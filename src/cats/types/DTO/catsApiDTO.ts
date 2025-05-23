import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatsDto {
  @ApiProperty({ example: 'Tiger', description: 'The name of the cat' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 3, description: 'Number of kills' })
  @IsNumber()
  @IsNotEmpty()
  kills!: number;
}
