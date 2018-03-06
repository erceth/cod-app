import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product-service';
import { Product } from '../data-schemas/products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-shop',
  providers: [ProductService, CartService],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() : void { //gets called after the constructor
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
