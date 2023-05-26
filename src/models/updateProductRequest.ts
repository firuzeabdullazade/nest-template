export interface UpdateProductRequest {
  categoryId: number;
  title: string;
  image?: string;
  imageColor: string;
  colors: string[];
  sizes: string[];
  price: number;
}
