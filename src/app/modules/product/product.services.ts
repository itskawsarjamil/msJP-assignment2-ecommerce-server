import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  console.log(query);
  const result = await Product.find();
  return result;
};
const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};
const updateProdcutIntoDB = async (
  productId: string,
  payload: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return result;
};
const deleteProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProdcutIntoDB,
  deleteProductFromDB,
};
