import { Component, OnInit } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  private preventCopyShippingToBilling = false;
  

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.shippingAddressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstAddressLine: ['', Validators.required],
      secondAddressLine: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required]
    });

    this.billingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstAddressLine: ['', Validators.required],
      secondAddressLine: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
    this.billingForm.disable();

    this.paymentForm = this.fb.group({
      creditCardNumber: ['4444444444444', [Validators.required, Validators.minLength(16), Validators.maxLength(16)] ],
      cvv: ['123', [Validators.required, Validators.minLength(3), Validators.maxLength(4)] ]

      
    });
  }

  

  copyShippingToBilling(shippingForm) {
    if (!this.preventCopyShippingToBilling) {
      this.preventCopyShippingToBilling = true; //only allow once
      //TODO: There is probably a better way to do this.
      this.billingForm = this.fb.group({
        firstName: [shippingForm.firstName, Validators.required],
        lastName: [shippingForm.lastName, Validators.required],
        firstAddressLine: [shippingForm.firstAddressLine, Validators.required],
        secondAddressLine: [shippingForm.secondAddressLine],
        city: [shippingForm.city, Validators.required],
        zipCode: [shippingForm.firstzipCodeAddressLine, Validators.required]
      });
      this.billingForm.disable();
    }
    
  }
  


}

//LEFT OFF, watch Lynda chapter abou angular forms


/*
Useful form example
https://angular.io/guide/reactive-forms#more-formcontrols
*/