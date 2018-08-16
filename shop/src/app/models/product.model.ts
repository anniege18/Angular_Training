import { ProductCategory } from './enums.model';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  tags: string[];
}

export class Product implements IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  tags: string[];

  constructor(
    name: string,
    description: string,
    price: number,
    category: ProductCategory,
    isAvailable: boolean,
    tags: string[],
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.isAvailable = isAvailable;
    this.tags = tags;
  }
}


