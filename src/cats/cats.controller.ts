import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import {
  CatResponseDto,
  CreateCatDto,
  GetCatKillsResponseDto,
  GetCatsResponseDto,
} from './dto/catAPI.dto';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new cat' })
  @ApiResponse({ status: 201, description: 'Cat created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  createCat(@Body() catCreate: CreateCatDto): {
    status: number;
    message: string;
  } {
    return this.catService.createCat(catCreate);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cats' })
  @ApiResponse({
    status: 200,
    description: 'List of cats returned successfully',
    type: GetCatsResponseDto,
  })
  getCats(): GetCatsResponseDto {
    return this.catService.getCats();
  }

  @Get('kills')
  @ApiOperation({ summary: 'Get kill count of a cat by name' })
  @ApiResponse({
    status: 200,
    description: 'Kill count retrieved',
    type: GetCatKillsResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Cat not found' })
  getCatKills(@Query('name') name: string): GetCatKillsResponseDto {
    return this.catService.getCatKillsByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cat by ID' })
  @ApiResponse({
    status: 200,
    description: 'Cat found',
    type: CatResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Cat not found' })
  getCat(@Param('id') id: string): {
    status: number;
    message: string;
    data: CatResponseDto | null;
  } {
    return this.catService.getCatById(id);
  }
}
