import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[];
  constructor() {
    this.products = [
      new Product('Car', 'small plastic toy', 23.56, 0, true, ['child', 'yellow', 'toy', 'car']),
      new Product('Rice', 'vietnamese rice', 4.11, 1, true, ['asian', 'rice']),
      new Product('Washing machine', 'household goods', 223.56, 3, false, ['goods', 'wash', 'big']),
      new Product('Doll', 'small plastic toy', 56.78, 0, false, ['toy', 'doll', 'small', 'girl']),
      new Product('Olive oil', 'vegetable oil', 7.15, 1, true, ['oil', 'olive', 'vegetable', 'food']),
      new Product('Skirt', 'branded blue jeans skirt', 90.25, 2, true, ['clothes', 'skirt', 'blue']),
    ];
  }

  getAll() {
      return this.products;
  }

  filterByCategory(filter: number) {
    return this.products.filter(({ category }) => category === filter);
  }
}
