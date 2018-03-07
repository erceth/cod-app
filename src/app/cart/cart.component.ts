import { Component, OnInit } from '@angular/core';
import { CartItem } from '../data-schemas/cart-items';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'cart',
  // providers: [CartService],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Array<CartItem>;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.currentCart.subscribe(currentCart => this.cartItems = currentCart);
  } 

  increaseAmount(cartItem: CartItem) {
    this.cartService.addToCart(cartItem.product);
  }
  decreaseAmount(cartItem: CartItem) {
    if (cartItem.count <= 0) {
      console.log('do you want to delete modal?');
    } else {
      this.cartService.decreaseAmount(cartItem.product);
    }
  }
}
