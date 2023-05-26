import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Post } from 'src/models/post';

@Controller('posts')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getProducts(): Post[] {
    console.log(`GET products`);
    return this.blogService.getPosts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Post {
    console.log(`GET product with id ${id}`);
    return this.blogService.getPostById(+id);
  }
}
