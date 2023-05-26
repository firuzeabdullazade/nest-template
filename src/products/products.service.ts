import { Injectable } from '@nestjs/common';
import { CreateProductRequest } from 'src/models/createProductRequest';
import { Product } from 'src/models/product';
import { UpdateProductRequest } from 'src/models/updateProductRequest';

let products: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    imageColor: 'red',
    colors: ['black', 'orange'],
    sizes: ['XS', 'S', 'L'],
    price: 1000,
  },
  {
    id: 2,
    title: 'Product 2',
    imageColor: 'yellow',
    colors: ['black', 'white'],
    sizes: ['S', 'L'],
    price: 200,
  },
  {
    id: 3,
    title: 'Product 3',
    imageColor: 'green',
    colors: ['red', 'white'],
    sizes: ['L', 'XL'],
    price: 400,
  },
  {
    id: 4,
    title: 'Product 4',
    imageColor: 'blue',
    colors: ['orange'],
    sizes: ['XS', 'S'],
    price: 500,
  },
  {
    id: 5,
    title: 'Product 5',
    imageColor: 'deepskyblue',
    colors: ['white'],
    sizes: ['XS', 'L'],
    price: 1000,
  },
  {
    id: 6,
    title: 'Product 6',
    imageColor: 'lightgreen',
    colors: ['black', 'blue'],
    sizes: ['L'],
    price: 600,
  },
  {
    id: 7,
    title: 'Product 7',
    imageColor: 'purple',
    colors: ['white', 'green', 'yellow'],
    sizes: ['XS', 'S', 'L', 'XL'],
    price: 700,
  },
  {
    id: 8,
    title: 'Product 8',
    imageColor: 'tomato',
    colors: ['red', 'orange'],
    sizes: ['M'],
    price: 200,
  },
];

@Injectable()
export class ProductsService {
  getProducts(): Product[] {
    return products;
  }

  getProductById(id: number): Product {
    return products.find((product) => product.id === id);
  }

  createProduct(request: CreateProductRequest): number {
    const newId = products[products.length - 1].id + 1;
    const newProduct: Product = {
      id: newId,
      // colors: request.colors,
      // imageColor: request.imageColor,
      // price: request.price,
      // sizes: request.sizes,
      // title: request.title,
      ...request,
    };
    products.push(newProduct);

    return newId;
  }

  updateProduct(id: number, request: UpdateProductRequest) {
    const productToChange = this.getProductById(id);
    productToChange.colors = request.colors;
    productToChange.imageColor = request.imageColor;
    productToChange.price = request.price;
    productToChange.sizes = request.sizes;
    productToChange.title = request.title;
  }

  deleteProduct(id: number) {
    products = products.filter((product) => product.id !== id);
  }
}
