import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ICartProduct} from '../../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  qty: number;
  @Input() product: ICartProduct;
  @Output() delete: EventEmitter<ICartProduct> = new EventEmitter();
  @Output() quantityUpdate: EventEmitter<{productId: number; qty: number}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.qty = this.product.qty;
  }

  onChange() {
    this.quantityUpdate.emit({ productId: this.product.id, qty: this.qty});
  }

  onDelete(product) {
   this.delete.emit(product);
  }

}
