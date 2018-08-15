import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;

  constructor() { }

  ngOnInit() {
  }

}
