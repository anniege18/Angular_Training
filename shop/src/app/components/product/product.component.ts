import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct;
  @Output() addToCart: EventEmitter<IProduct> = new EventEmitter();

  onClick(product) {
    this.addToCart.emit(product);
  }
}
