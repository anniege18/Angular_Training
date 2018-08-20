import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {IProduct} from '../../interfaces';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<IProduct>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
