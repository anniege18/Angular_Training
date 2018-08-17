import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getCartProducts();
  }

  checkCart() {
    return Boolean(this.products.length);
  }
}
