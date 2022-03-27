import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Article } from './types/Article';

@Controller('article')
export class ArticleController {
  @Get()
  getArticle(): string {
    return 'ghoige';
  }
}
