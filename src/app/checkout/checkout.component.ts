import { Component, OnInit, Input } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {FormGroup, FormControl } from '@angular/forms';
import { CartItem } from '../data-schemas/cart-items';
import { config } from '../config';
import { CheckoutService } from './checkout.service';
import * as _ from "lodash";

declare let StripeCheckout: any;

@Component({
  selector: 'checkout',
  providers: [CheckoutService],
  template: `
    <button *ngIf="!checkoutToken" (click)="checkoutPopUp()">Checkout</button>
    <div *ngIf="checkoutToken">{{checkoutToken}}</div>
  `
})
export class CheckoutComponent implements OnInit {
  @Input() cartItems: Array<CartItem>;
  checkoutToken;
  private handler;
  private description;
  private totalCost: number;

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit() {
    this.description = _.reduce(this.cartItems, (descriptionString, cartItem) => {
      return descriptionString + cartItem.count + ' x ' + cartItem.product.name + ',';
    }, '');

    this.totalCost = _.reduce(this.cartItems, (total, cartItem) => {
      return total + (cartItem.product.price * cartItem.count);
    }, 0);
    this.totalCost = this.totalCost * 100; //convert to pennies
  }

  checkoutPopUp() {
    this.handler = StripeCheckout.configure({
      key: config.stripePublicKey,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      
      billingAddress: true,
      shippingAddress: true,
      token: (token) => {
        console.log(token);
        let orderDetails = {
          description: this.description,
          totalCost: this.totalCost
        }
        this.checkoutService.newOrder(token.id, orderDetails).subscribe((success) => {
          console.log('success sending to server', success)
          //order success
        }, (error) => {
          console.log('could not send to server, error', error)
          //order failed
        });
        
        
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    this.handler.open({
      name: 'Cup Of Dirt Checkout',
      description: this.description,
      amount: this.totalCost
    });
  }

}