import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [AuthModule],
  controllers: [
    AppController,
    ProductsController,
    UsersController,
    PostsController,
  ],
  providers: [AppService, ProductsService, UsersService, PostsService],
})
export class AppModule {}
