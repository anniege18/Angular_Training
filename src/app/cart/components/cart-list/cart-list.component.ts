import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cart: any[];
  total: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getAll();
    this.total = this.cartService.getTotal();
  }

  deleteProduct(product) {
    this.cartService.removeFromCart(product);
  }

  quantityUpdate(params) {
    const { productId, qty } = params;
    this.cartService.updateQty(productId, qty);
  }

  onCartClear() {
    this.cartService.clear();
  }
}
