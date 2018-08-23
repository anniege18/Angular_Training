import { IProduct } from '.';

export class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public price: number,
    public category: string,
    public isAvailable: boolean,
    public description?: string,
    public tags?: Array<string>
  ) { }
}
