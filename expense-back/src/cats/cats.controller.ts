import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): string[] {
    return this.catsService.getCats();
  }

  @Get(':name')
  getCatByName(@Param('name') name: string): string {
    return `Meow! Here's ${name}, your cute cat`;
  }
}
