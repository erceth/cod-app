import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../data-schemas/cart-items';
import { config } from '../config';
import { CheckoutService } from './checkout.service';
import * as _ from "lodash";

declare let StripeCheckout: any;

@Component({
  selector: 'checkout',
  providers: [CheckoutService],
  template: `
    <button *ngIf="!successStripeResult" (click)="checkoutPopUp()">Checkout</button>
    <div *ngIf="successStripeResult">Transation successful!  Charge ID: {{successStripeResult.id}}</div>
  `
})
export class CheckoutComponent implements OnInit {
  @Input() cartItems: Array<CartItem>;
  successStripeResult;
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
        let orderDetails = {
          description: this.description,
          totalCost: this.totalCost
        }
        this.checkoutService.newOrder(token.id, orderDetails).subscribe((success) => {
          console.log('success sending to server', success)
          this.successStripeResult = success;
        }, (error) => {
          //order failed
          console.log('could not send to server, error', error);
          // TODO: using different cc numbers, get different errors and display.
        });
      }
    });

    this.handler.open({
      name: 'Cup Of Dirt Checkout',
      description: this.description,
      amount: this.totalCost
    });
  }
}
