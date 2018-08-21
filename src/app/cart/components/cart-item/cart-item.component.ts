import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ICartProduct} from '../../../models/interfaces';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: ICartProduct;
  @Output() delete: EventEmitter<ICartProduct> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(product) {
   this.delete.emit(product);
  }

}
