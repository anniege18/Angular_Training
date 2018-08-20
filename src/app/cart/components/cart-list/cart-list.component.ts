import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cart: any[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getAll();
  }

}
