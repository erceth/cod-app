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
  private cartSource = new BehaviorSubject<Array<CartItem>>(this.cartItems);
  currentCart = this.cartSource.asObservable();
    
  addToCart(newProduct: Product): Observable<any> {
    let alreadyAdded  = _.find(this.cartItems, (ci) => ci.product._id === newProduct._id);
    if (alreadyAdded) {
      alreadyAdded.count += 1;
    } else {
      let newCartItem = new CartItem(newProduct, 1);
      this.cartItems.push(newCartItem);
    }
    this.cartSource.next(this.cartItems);
    console.log('this.cartItems', this.cartItems)
    return this.currentCart;

  }


}
