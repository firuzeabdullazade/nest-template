import { Injectable } from '@nestjs/common';
import { Post } from 'src/models/post';

const posts: Post[] = [];

@Injectable()
export class BlogService {
  getPosts(): Post[] {
    return posts;
  }

  getPostById(id: number): Post {
    return posts.find((post) => post.id === id);
  }
}
