import { Injectable } from '@angular/core';
import { Product } from '../models';
import { IProduct } from '../../models/interfaces';
import books from './books.json';
console.log('!!!!!!!!!!!', books);

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Array<IProduct>;

  constructor() {
    this.products = (books as any[]).map(({id, name, author, price, category, isAvailable, description, tags}) =>
      new Product(id, name, author, price, category, isAvailable, description, tags));

    console.log('fsegs', this.products);
  }

  getProducts() {
    return this.products;
  }
}
