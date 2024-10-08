import { Model } from 'mongoose';

export type TVariants = {
  type: string;
  value: string;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
  isDeleted?: boolean;
};

export interface ProductModel extends Model<TProduct> {
  // eslint-disable-next-line no-unused-vars
  isProductExist(id: string): Promise<TProduct | null>;
}
