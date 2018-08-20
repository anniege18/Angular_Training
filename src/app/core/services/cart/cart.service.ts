import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: any[];

  constructor() { }

  getAll() {
    return this.cartProducts;
  }

  getProductByCategory(productCategory) {
    return this.cartProducts.filter(({ category }) => category === productCategory);
  }

  addToCart(product: any) {
    const indexOfProduct = this.cartProducts.findIndex(({ id }) => id === product.id);

    if (indexOfProduct !== -1) {
      const foundProduct = this.cartProducts[indexOfProduct];
      this.cartProducts[indexOfProduct] = { ...foundProduct, qty: foundProduct.qty + 1 };
    }

    this.cartProducts.push({ ...product, qty: 1});
  }

  removeFromCart(product: any) {
    const productInCart = this.cartProducts.find(product);

    if (productInCart) {
      const filteredCart = this.cartProducts.filter(({ id }) => id === product.id);
      this.cartProducts = filteredCart;
    }
  }

  clearAll() {
    this.cartProducts = [];
  }
}
