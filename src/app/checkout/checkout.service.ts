import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CheckoutService {

  constructor(private http: HttpClient) { }
  newOrder(stripeToken, orderDetails) {
    return this.http.post('/api/newOrder', {
      stripeToken,
      orderDetails
    })

  //   let stripe = {
  //     "id": "tok_1C8wvt233dVDXLgvj5FiIwUU",
  //     "object": "token",
  //     "card": {
  //       "id": "card_1C8wvs233dVDXLgv8hSZiUcZ",
  //       "object": "card",
  //       "address_city": "test city",
  //       "address_country": "United States",
  //       "address_line1": "1 test st",
  //       "address_line1_check": "pass",
  //       "address_line2": null,
  //       "address_state": "NY",
  //       "address_zip": "12345",
  //       "address_zip_check": "pass",
  //       "brand": "Visa",
  //       "country": "US",
  //       "cvc_check": "pass",
  //       "dynamic_last4": null,
  //       "exp_month": 2,
  //       "exp_year": 2021,
  //       "funding": "credit",
  //       "last4": "4242",
  //       "metadata": {},
  //       "name": "test",
  //       "tokenization_method": null
  //     },
  //     "client_ip": "213.59.159.74",
  //     "created": 1521838577,
  //     "email": "test@test.org",
  //     "livemode": false,
  //     "type": "card",
  //     "used": false
  //   };

  //   console.log(stripe);
  

  }
}
