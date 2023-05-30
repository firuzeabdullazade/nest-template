import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ArticleService } from './products/article.service';
import { ArticlesController } from './products/articles.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, ArticlesController, UsersController],
  providers: [AppService, ArticleService, UsersService],
})
export class AppModule {}
