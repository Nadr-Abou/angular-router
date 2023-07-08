import { Component, Input } from '@angular/core';
import {Product} from "../models"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() prodotto?: Product 
  id?: Number

  constructor(private route?:ActivatedRoute, private router?:Router){
    this.id = route?.snapshot.params["id"] ?? null
    if(this.id){
      fetch('https://dummyjson.com/products/'+this.id)
      .then((res) => res.json())
      .then((json) => (this.prodotto = json));
    }
  }

  vaiAProdotto(){
    console.log(this.route)
    this.router?.navigate(['/products',this.prodotto?.id])
  }
}
