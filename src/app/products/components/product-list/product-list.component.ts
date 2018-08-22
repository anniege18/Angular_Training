import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models';
import { ProductService } from '../../services/product.service';
import { CartService} from '../../../cart/services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<IProduct>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }

}
