import { Controller, Get, Param } from '@nestjs/common';
import { Post } from 'src/models/post';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Post[] {
    console.log(`GET posts`);
    return this.postsService.getPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string): Post {
    console.log(`GET post with id ${id}`);
    return this.postsService.getPostById(+id);
  }
}
