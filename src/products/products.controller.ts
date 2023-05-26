import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductRequest } from 'src/models/createProductRequest';
import { Product } from 'src/models/product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Product[] {
    console.log(`GET products`);
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Product {
    console.log(`GET product with id ${id}`);
    return this.productsService.getProductById(+id);
  }

  @Post()
  createProduct(@Body() request: CreateProductRequest): number {
    return this.productsService.createProduct(request);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() request: CreateProductRequest,
  ) {
    this.productsService.updateProduct(+id, request);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    this.productsService.deleteProduct(+id);
  }
}
