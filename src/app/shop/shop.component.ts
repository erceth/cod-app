import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() : void {
    this.http.get('/api/products').subscribe(data => {
      console.log('results', data);
    })
  }

}
