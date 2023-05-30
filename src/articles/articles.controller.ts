import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticlesGridItemProps } from 'src/models/product';
import { ArticleService } from './article.service';
import { CreateArticleRequest } from 'src/models/createArticleRequest';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly productService: ArticleService) {}

  @Get()
  getArticles(): ArticlesGridItemProps[] {
    console.log(`GET articles`);
    return this.productService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id') id: string): ArticlesGridItemProps {
    console.log(`GET product with id ${id}`);
    return this.productService.getArticleById(+id);
  }

  @Post()
  createArticle(@Body() request: CreateArticleRequest): number {
    return this.productService.createArticle(request);
  }

  @Put(':id')
  updateArticle(
    @Param('id') id: string,
    @Body() request: CreateArticleRequest,
  ) {
    this.productService.updateArticle(+id, request);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: string) {
    this.productService.deleteArticle(+id);
  }
}
