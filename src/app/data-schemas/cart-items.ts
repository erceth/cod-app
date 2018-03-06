//TODO: move this to module to share with api
import { Product } from "./products";
export class CartItem {
  product: Product;
  count: number;
  constructor(product: Product, count: number) {
    this.product = product;
    this.count = count;
  }
}
