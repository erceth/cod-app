import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { InfoComponent } from './info/info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [ //stating what components and directives belong to it
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    InfoComponent,
    CheckoutComponent,
    CartComponent,
    QuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule
  ],
  entryComponents: [QuestionDialogComponent],
  providers: [], //service providers
  bootstrap: [AppComponent] //the root component that Angular creates and inserts into the index.html
})
export class AppModule { }
