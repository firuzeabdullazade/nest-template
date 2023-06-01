import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ArticleService } from './articles/article.service';
import { ArticlesController } from './articles/articles.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectService } from './projects/project.service';

@Module({
  imports: [AuthModule],
  controllers: [
    AppController,
    ArticlesController,
    ProjectsController,
    UsersController,
  ],
  providers: [AppService, ArticleService, ProjectService, UsersService],
})
export class AppModule {}
