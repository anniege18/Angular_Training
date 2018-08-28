import {Component, IterableDiffers, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cart: any[];
  total: any;
  selectedOption: string;
  reverseOption = false;
  updateDate: any = null;
  iterableDiffer: any;

  constructor(private cartService: CartService, private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers
      .find([])
      .create(null);
  }

  ngOnInit() {
    this.cart = this.cartService.getAll();
    this.total = this.cartService.getTotal();
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.cart);
    if (changes) {
      if (this.cart.length) {
        this.updateDate = new Date();
      } else {
        this.updateDate = null;
      }
    }
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
