import {IProduct} from '../../products/models';

export interface ICartProduct extends IProduct {
  qty: number;
}
