import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models';
import { ProductsService } from '../../services/products/products.service';
import { CartService } from "../../services/cart/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<IProduct>;

  constructor(private productService: ProductsService, private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onAddToCart(product) {
    this.cartService.add(product);
  }

}
