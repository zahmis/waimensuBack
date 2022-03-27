import { Injectable } from '@nestjs/common';

import { Article } from './types/Article';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getArticle(): Article {
    return { id: 1, title: 'this is a Article' };
  }
}
