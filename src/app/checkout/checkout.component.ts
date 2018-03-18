import { Component, OnInit } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {FormGroup, FormBuilder, Validators, } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  nameAddressForm: FormGroup;
  billingForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.nameAddressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstAddressLine: ['', Validators.required],
      secondAddressLine: ['', Validators.required],
      city: ['', Validators.required]
    });
// Deep copy nameAddressForm to billingForm when user clicks, Next: Billing the first time.
    this.billingForm = this.fb.group({
      firstName: ['', Validators.required]
    })
  }

  ngOnInit() {
  }


}

//going off this: https://angular.io/guide/reactive-forms#more-formcontrols