import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticlesGridItem } from 'src/models/article';
import { ArticleService } from './article.service';
import { FilterArticlesRequest } from 'src/models/filterArticlesRequest';
import { CreateReplyRequest } from 'src/models/createReplyRequest';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getArticles(): ArticlesGridItem[] {
    console.log(`GET articles`);
    return this.articleService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: string): ArticlesGridItem {
    console.log(`GET product with id ${id}`);
    return this.articleService.getArticleById(+id);
  }

  @Post('filter')
  filterArticles(@Body() request: FilterArticlesRequest): ArticlesGridItem[] {
    return this.articleService.filterArticles(request);
  }

  @Post(':id/reply')
  addReply(@Param('id') id: string, @Body() request: CreateReplyRequest): void {
    this.articleService.addReply(+id, request);
  }
}
