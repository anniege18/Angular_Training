import { Injectable } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[];
  constructor() {
    this.products = [
      new Product('Car', 'small plastic toy', 23.56, 1, true),
      new Product('Rice', 'Vietnamese rice', 4.11, 2, true),
      new Product('Washing machine', 'household goods', 23.56, 4, true),
    ];
  }

  getAll() {
      return this.products;
  }
}
