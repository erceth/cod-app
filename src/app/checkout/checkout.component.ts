import { Component, OnInit } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {FormGroup, FormBuilder, Validators, } from '@angular/forms';
import * as _ from "lodash";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  shippingAddressForm: FormGroup;
  billingForm: FormGroup;
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.shippingAddressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstAddressLine: ['', Validators.required],
      secondAddressLine: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required]
    });

    // TODO: copy to shipping to billing automatically
    this.billingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstAddressLine: ['', Validators.required],
      secondAddressLine: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required]
    });

    this.paymentForm = this.fb.group({
      creditCardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)] ],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)] ]

      
    });
  }

  ngOnInit() {
  }
  


}

//going off this: 
/*
https://angular.io/guide/reactive-forms#more-formcontrols
*/