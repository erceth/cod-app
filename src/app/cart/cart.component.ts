import { Component, OnInit } from '@angular/core';
import { CartItem } from '../data-schemas/cart-items';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatDialog } from '@angular/material';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

@Component({
  selector: 'cart',
  // providers: [CartService],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Array<CartItem>;

  constructor(private cartService: CartService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.cartService.currentCart.subscribe(currentCart => this.cartItems = currentCart);
  } 

  increaseAmount(cartItem: CartItem) {
    this.cartService.addToCart(cartItem.product);
  }
  decreaseAmount(cartItem: CartItem) {
    if (cartItem.count <= 1) {
      let dialogRef = this.dialog.open(QuestionDialogComponent, {
        data: { 
          question: `Do you want to delete "${cartItem.product.name}" from your cart?`,
          confirm: "Delete",
          deny: "Keep in Cart"
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.cartService.decreaseAmount(cartItem.product);
          this.cartService.deleteFromCart(cartItem.product);
        }
      });
    } else {
      this.cartService.decreaseAmount(cartItem.product);
    }
    
  }
}
