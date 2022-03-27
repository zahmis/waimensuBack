import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Article } from './types/Article';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('article')
  getHoge(): Article {
    return this.appService.getArticle();
  }
}
