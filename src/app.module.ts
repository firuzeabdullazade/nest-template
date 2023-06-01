import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ArticleService } from './articles/article.service';
import { ArticlesController } from './articles/articles.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PostController } from './posts/posts.controller';
import { PostService } from './posts/post.service';

@Module({
  imports: [AuthModule],
  controllers: [
    AppController,
    ArticlesController,
    PostController,
    UsersController,
  ],
  providers: [AppService, ArticleService, PostService, UsersService],
})
export class AppModule {}
