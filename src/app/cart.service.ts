import { Injectable } from '@angular/core';
import { Product } from './data-schemas/products';
import { ProductService } from './product-service';
import * as _ from "lodash";
import { error } from 'util';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './data-schemas/cart-items';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {
  
  private cartItems: Array<CartItem> = [];
  // private cartItems: Array<CartItem> = [new CartItem(new Product(1, 'classic COD', 'The original the built the company', 50), 1)]; //DEBUG
  private cartSource = new BehaviorSubject<Array<CartItem>>(this.cartItems);
  currentCart = this.cartSource.asObservable();
    
  addToCart(newProduct: Product): Observable<any> {
    let alreadyAdded  = this.findCartItem(this.cartItems, newProduct);;
    if (alreadyAdded) {
      alreadyAdded.count += 1;
    } else {
      let newCartItem = new CartItem(newProduct, 1);
      this.cartItems.push(newCartItem);
    }
    this.cartSource.next(this.cartItems);
    return this.currentCart;
  }

  /**
   * Decreases amount but does not remove when count reaches 0
   * @param product product to remove from cart
   */
  decreaseAmount(product: Product) {
    let alreadyAdded  = this.findCartItem(this.cartItems, product);
    if (alreadyAdded.count > 0) {
      alreadyAdded.count--;
    }
    this.cartSource.next(this.cartItems);
  }

  deleteFromCart(product: Product) {
    _.remove(this.cartItems, (ci) => ci.product._id === product._id);
    this.cartSource.next(this.cartItems);
  }

  private findCartItem(cartItems: CartItem[], newProduct: Product): CartItem {
    return _.find(this.cartItems, (ci) => ci.product._id === newProduct._id);
  }


}
