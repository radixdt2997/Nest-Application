import { Injectable } from '@nestjs/common';
import {
  CatResponseDto,
  CreateCatDto,
  GetCatKillsResponseDto,
  GetCatsResponseDto,
} from './dto/catAPI.dto';
import { NotFoundException } from './not-found.exception';

@Injectable()
export class CatsService {
  private readonly cats: CatResponseDto[] = [];

  createCat(catCreate: CreateCatDto): { status: number; message: string } {
    const newCat: CatResponseDto = {
      id: this.cats.length + 1,
      ...catCreate,
    };
    this.cats.push(newCat);
    return { status: 201, message: 'Cat Created' };
  }

  getCats(): GetCatsResponseDto {
    return { status: 200, message: 'Cats Found', data: this.cats };
  }

  getCatById(catId: string): {
    status: number;
    message: string;
    data: CatResponseDto | null;
  } {
    const cat = this.cats.find((cat) => cat.id === Number(catId));
    if (!cat) {
      throw new NotFoundException('Cat Not Found');
    }
    return { status: 200, message: 'Cat Found', data: cat };
  }

  getCatKillsByName(name: string): GetCatKillsResponseDto {
    const cat = this.cats.find((cat) => cat.name === name);
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
