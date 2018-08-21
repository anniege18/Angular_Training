import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts = [];
  private total = { qty: 0, sum: 0};

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
    } else {
      this.cartProducts.push({ ...product, qty: 1});
    }

    const total = this.calcTotal();
    this.total.qty = total.qty;
    this.total.sum = total.sum;
  }

  removeFromCart(product: any) {
    const productInCart = this.cartProducts.find(({id}) => product.id === id);

    if (productInCart) {
      const filteredCart = this.cartProducts.filter(({ id }) => id === product.id);
      this.cartProducts = filteredCart;
    }
  }

  getTotal() {
    return this.total;
  }

  calcTotal() {
    return this.cartProducts.reduce((acc, {price, qty}) =>
      ({
        qty: acc.qty + qty,
        sum: acc.sum + (price * qty)}),
      {qty: 0, sum: 0})
  }

  clearAll() {
    this.cartProducts = [];
  }
}
