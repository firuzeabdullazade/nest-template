import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticlesGridItem } from 'src/models/article';
import { ArticleService } from './article.service';
import { FilterArticlesRequest } from 'src/models/filterArticlesRequest';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly productService: ArticleService) {}

  @Get()
  getArticles(): ArticlesGridItem[] {
    console.log(`GET articles`);
    return this.productService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: string): ArticlesGridItem {
    console.log(`GET product with id ${id}`);
    return this.productService.getArticleById(+id);
  }

  @Post('filter')
  filterArticles(@Body() request: FilterArticlesRequest): ArticlesGridItem[] {
    return this.productService.filterArticles(request);
  }
}
