import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NotFoundException } from './not-found.exception';
import { CatAPIResponse, CatKillsAPIResponse, CreateCatsDto } from './types';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async createCat(catCreate: CreateCatsDto): Promise<CatAPIResponse> {
    const catCreated = await this.prisma.cats.create({
      data: catCreate,
    });

    return catCreated;
  }

  async getCats(): Promise<CatAPIResponse[]> {
    const cats = await this.prisma.cats.findMany();
    return cats;
  }

  async getCatById(catId: string): Promise<CatAPIResponse> {
    const cat = await this.prisma.cats.findFirst({
      where: {
        id: Number(catId),
      },
    });
    if (!cat) {
      throw new NotFoundException('Cat Not Found');
    }
    return cat;
  }

  async getCatKillsByName(name: string): Promise<CatKillsAPIResponse> {
    const cat = await this.prisma.cats.findFirst({
      where: {
        name,
      },
    });
    if (!cat) {
      throw new NotFoundException('Cat Not Found');
    }
    return {
      status: 200,
      message: `Cat ${cat.name} found`,
      kills: cat.kills,
    };
  }
}
