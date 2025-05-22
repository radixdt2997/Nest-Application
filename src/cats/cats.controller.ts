import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard, Roles, RolesGuard } from 'src/guard';
import { Role } from 'src/users/types';
import { CatsService } from './cats.service';
import { CatAPIResponse, CatKillsAPIResponse, CreateCatsDto } from './types';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  @Roles(Role.Admin)
  @ApiOperation({ summary: 'Create a new cat' })
  createCat(@Body() catCreate: CreateCatsDto): Promise<CatAPIResponse> {
    return this.catService.createCat(catCreate);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cats' })
  getCats(): Promise<CatAPIResponse[]> {
    return this.catService.getCats();
  }

  @Get('kills')
  @ApiOperation({ summary: 'Get kill count of a cat by name' })
  getCatKills(@Query('name') name: string): Promise<CatKillsAPIResponse> {
    return this.catService.getCatKillsByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cat by ID' })
  getCat(@Param('id') id: string): Promise<CatAPIResponse> {
    return this.catService.getCatById(id);
  }
}
