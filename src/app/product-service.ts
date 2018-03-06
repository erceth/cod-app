//EE: not sure if this is the best place for this file
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './data-schemas/products';
import * as _ from "lodash";


@Injectable() //decorate as a service
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
  
  getSingleProduct(productId): Observable<Product> {
    return this.getProducts()
      .map(products => products.filter(pr => pr._id === productId)[0]);
  }

}
