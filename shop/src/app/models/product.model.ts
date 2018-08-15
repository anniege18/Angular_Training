import { ProductCategory } from './enums.model';

interface IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
}

export class Product implements IProduct {
  name: string;
  description: string;
  price: number;
  category: number;
  isAvailable: boolean;

  constructor(
    name: string,
    description: string,
    price: number,
    category: number,
    isAvailable: boolean,
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = ProductCategory[ProductCategory[category]];
    this.isAvailable = isAvailable;
  }
}


