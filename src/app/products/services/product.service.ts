import { Injectable } from '@angular/core';
import { Product } from '../models';
import { IProduct } from '../models';
import books from './books.json';

@Injectable()
export class ProductService {
  private products: Array<IProduct>;

  constructor() {
    this.products = books
      .map(({id, name, author, price, category, isAvailable, description, tags}) =>
      new Product(id, name, author, price, category, isAvailable, description, tags));
  }

  getProducts() {
    return this.products;
  }
}
