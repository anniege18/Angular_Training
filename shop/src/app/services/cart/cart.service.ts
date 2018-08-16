import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsToBuy: Array<{ name: string; price: number; value: number; }>;
  private productTotalQty = 0;

  constructor() {
    this.productsToBuy = [];
  }

  add(product) {
    const foundIndex = this.productsToBuy.findIndex(({ name }) => name === product.name);

    if (foundIndex !== -1) {
      const foundProduct = this.productsToBuy[foundIndex];
      this.productsToBuy[foundIndex] = { ...foundProduct, value: foundProduct.value + 1 };
    } else {
      const { name, price } = product;
      this.productsToBuy.push({ name, price, value: 1 });
    }
  }

  getCartProducts() {
    return this.productsToBuy;
  }

  getTotalQty() {
    return this.productsToBuy.reduce((acc, { value }) => acc + value, 0);
  }
}
