export interface IProduct {
  id: number;
  name: string;
  author: string;
  price: number;
  category: string;
  isAvailable: boolean;
  description?: string;
  tags?: Array<string>;
}
