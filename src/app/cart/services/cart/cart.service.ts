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

  getTotal() {
    return this.total;
  }

  addToCart(product: any) {
    const indexOfProduct = this.cartProducts.findIndex(({ id }) => id === product.id);

    if (indexOfProduct !== -1) {
      const foundProduct = this.cartProducts[indexOfProduct];
      this.cartProducts[indexOfProduct] = { ...foundProduct, qty: foundProduct.qty + 1 };
    } else {
      this.cartProducts.push({ ...product, qty: 1});
    }
    this.calcTotal();
  }

  removeFromCart(product: any) {
    const productInCartIndex = this.cartProducts.findIndex(({id}) => product.id === id);

    if (productInCartIndex !== -1) {
      this.cartProducts.splice(productInCartIndex, 1);
      this.calcTotal();
    }
  }

  calcTotal() {
    const total = this.cartProducts.reduce((acc, {price, qty}) =>
      ({
        qty: acc.qty + qty,
        sum: acc.sum + (price * qty)}),
      {qty: 0, sum: 0});

    this.total.qty = total.qty;
    this.total.sum = total.sum;
  }

  updateQty(productId: number, qty: number) {
    const productIndex = this.cartProducts.findIndex(({id}) => productId === id );

    if (qty >= 0 && productIndex !== -1) {
      this.cartProducts[productIndex].qty = qty;
      this.calcTotal();
    }
  }
}
