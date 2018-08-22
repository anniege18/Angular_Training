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

  onAddToCart(product) {
    this.addToCart.emit(product);
  }
}
