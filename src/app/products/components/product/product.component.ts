import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { IProduct } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: IProduct;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  public qty = 1;

  onAddToCart(product) {
    this.addToCart.emit({ product, qty: this.qty });
  }

  onIncProduct() {
    this.qty += 1;
  }

  onDecProduct() {
    if ( this.qty === 0 ) return;
    this.qty -= 1;
  }
}
