import { Injectable } from '@nestjs/common';

import { Article } from './types/Article';

@Injectable()
export class ArticleService {
  getArticle(): Article {
    return { id: 1, title: 'this is a Article' };
  }
}
