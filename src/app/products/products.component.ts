import { Component } from '@angular/core';
import { Products } from '../models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  
  public lista?: Products;

  constructor() {
    fetch('https://dummyjson.com/products/')
      .then((res) => res.json())
      .then((json) => (this.lista = json));
  }
}
