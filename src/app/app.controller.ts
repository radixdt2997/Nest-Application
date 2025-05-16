import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // You can mention the base of API like (/api/v1)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // (/api/v1)
  getHello(): string {
    return this.appService.getHello();
  }
}
