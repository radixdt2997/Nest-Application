import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ example: 'Tiger', description: 'The name of the cat' })
  name: string;

  @ApiProperty({ example: 3, description: 'Number of kills' })
  kills: number;
}

export class CatResponseDto {
  @ApiProperty({ example: 1, description: 'Cat ID' })
  id: number;

  @ApiProperty({ example: 'Tiger', description: 'Name of the cat' })
  name: string;

  @ApiProperty({ example: 3, description: 'Number of kills' })
  kills: number;
}

export class GetCatsResponseDto {
  @ApiProperty({ example: 200 })
  status: number;

  @ApiProperty({ example: 'Cats Found' })
  message: string;

  @ApiProperty({ type: [CatResponseDto] })
  data: CatResponseDto[];
}

export class GetCatKillsResponseDto {
  @ApiProperty({ example: 200 })
  status: number;

  @ApiProperty({ example: 'Cat Tiger found' })
  message: string;

  @ApiProperty({ example: 3, nullable: true })
  kills: number | null;
}
