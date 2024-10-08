import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './produc.constant';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  const finalResult = await Product.findById(result.id).select(
    '-__v -isDeleted -createdAt -updatedAt',
  );

  return finalResult;
};
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter();
  const result = await productQuery.ModelQuery.select(
    '-__v -isDeleted -createdAt -updatedAt',
  );
  // await Product.find().select('-__v -isDeleted -createdAt -updatedAt -_id -id');
  return result;
};
const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId).select(
    '-__v -isDeleted -createdAt -updatedAt',
  );

  return result;
};
const updateProdcutIntoDB = async (
  productId: string,
  payload: Partial<TProduct>,
) => {
  const existingProduct = await Product.isProductExist(productId);
  if (!existingProduct) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }
  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return result;
};
const deleteProductFromDB = async (productId: string) => {
  const existingProduct = await Product.isProductExist(productId);
  if (!existingProduct) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await Product.findByIdAndUpdate(
    productId,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return null;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProdcutIntoDB,
  deleteProductFromDB,
};
