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
  // cartItems$: BehaviorSubject<Array<CartItem>>;
  // cartItems = ['test', 'asdf']
  cartItems: Array<CartItem>;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.currentCart.subscribe(currentCart => this.cartItems = currentCart);
    // console.log('this.cartService.cart$', this.cartService.cart$);
     
    // this.cartService.cart$.subscribe({
    //   next: () => {
    //     console.log('cart.component');
        
    //   }
    // })
    
  } // LEFT OFF: shop.component and cart.component to share the same cart.service
  // add to cart from shop will cause behaviorsubject to call .next and update cart in cart.compoent

}
