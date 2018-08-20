import { IProduct } from '../interfaces';

export class Product implements IProduct {
  id: number;
  name: string;
  author: string;
  price: number;
  category: string;
  isAvailable: boolean;
  description?: string;
  tags: Array<string>;

  constructor(
    id: number,
    name: string,
    author: string,
    price: number,
    category: string,
    isAvailable: boolean,
    description?: string,
    tags?: Array<string>
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.category = category;
    this.isAvailable = isAvailable;
    this.description = description;
    this.tags = tags;
  }
}
