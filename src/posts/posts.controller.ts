import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { BlogPartGridItem } from 'src/models/post';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(): BlogPartGridItem[] {
    console.log(`GET posts`);
    return this.postService.getPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string): BlogPartGridItem {
    console.log(`GET post with id ${id}`);
    return this.postService.getPostById(+id);
  }
}
