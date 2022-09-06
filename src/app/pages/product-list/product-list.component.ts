import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert("The product has been shared")
  }

}