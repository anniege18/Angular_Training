import { Injectable } from '@angular/core';
import { Product } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[];
  constructor() {
    this.products = [
      new Product('Car', 'small plastic toy', 23.56, 0, true, ['child', 'yellow', 'toy', 'car']),
      new Product('Rice', 'Vietnamese rice', 4.11, 1, true, ['asian', 'rice']),
      new Product('Washing machine', 'household goods', 23.56, 4, false, ['goods', 'wash', 'big']),
    ];
  }

  getAll() {
      return this.products;
  }
}
