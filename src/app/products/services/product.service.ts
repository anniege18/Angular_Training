import { Injectable } from '@angular/core';
import { Product } from '../models';
import { IProduct } from '../models';
import books from './books.json';

const booksProducts = books
  .map(({id, name, author, price, category, isAvailable, description, tags}) =>
    new Product(id, name, author, price, category, isAvailable, description, tags));

@Injectable()
export class ProductService {
  private products: Promise<IProduct[]>;

  constructor() {
    this.products = Promise.resolve(booksProducts);
  }

  getProducts() {
    return this.products;
  }
}
