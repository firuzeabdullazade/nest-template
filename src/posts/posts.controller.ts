import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from 'src/models/post';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(): Post[] {
    console.log(`GET posts`);
    return this.postService.getPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string): Post {
    console.log(`GET post with id ${id}`);
    return this.postService.getPostById(+id);
  }
}
