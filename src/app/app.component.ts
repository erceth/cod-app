import { Component } from '@angular/core';
import { CartItem } from './data-schemas/cart-items';
import { CartService } from './cart.service';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  providers: [CartService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cartItems: Array<CartItem>;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.currentCart.subscribe(currentCart => this.cartItems = currentCart);
  }

  countCartItems(cartItems) {
    return _.reduce(cartItems, (runningCount, item) => item.count + runningCount, 0);
  }
}
