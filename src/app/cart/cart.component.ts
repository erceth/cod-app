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
    if (cartItem.count <= 1) {
      let answer = confirm(`Do you want to delete "${cartItem.product.name}" from your cart?`);
      if (answer) {
        this.cartService.decreaseAmount(cartItem.product);
        this.cartService.deleteFromCart(cartItem.product);
      }
      // let dialogRef = this.dialog.open(QuestionDialogComponent, {
      //   data: { 
      //     question: `Do you want to delete "${cartItem.product.name}" from your cart?`,
      //     confirm: "Delete",
      //     deny: "Keep in Cart"
      //   }
      // });

      // dialogRef.afterClosed().subscribe(result => {
      //   if (result) {
      //     this.cartService.decreaseAmount(cartItem.product);
      //     this.cartService.deleteFromCart(cartItem.product);
      //   }
      // });
    } else {
      this.cartService.decreaseAmount(cartItem.product);
    }
    
  }
}
