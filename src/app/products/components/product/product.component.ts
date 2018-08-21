import { Component, OnInit, Input } from '@angular/core';
import {IProduct} from '../../../models/interfaces';
import {CartService} from "../../../cart/services/cart/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onAddToCart(product) {
    console.log('product', product);
    this.cartService.addToCart(product);
  }
}
