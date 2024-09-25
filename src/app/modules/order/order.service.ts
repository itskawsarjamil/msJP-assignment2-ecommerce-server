import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderintoDB = async (payload: TOrder) => {
  const { productId, quantity: orderedQuantity } = payload;
  const productInfo = await Product.findById(productId);
  const inventory = productInfo?.inventory;

  const availableQuantity = inventory?.quantity as number;
  const inStock = inventory?.inStock;
  if (!inStock) {
    throw new Error('Insufficient quantity available in inventory');
  }
  if (orderedQuantity > availableQuantity) {
    throw new Error('Insufficient quantity available in inventory');
  }
  const updatedQuantity = availableQuantity - orderedQuantity;
  const stockUpdate = updatedQuantity ? true : false;
  const updatedInventory = {
    quantity: updatedQuantity,
    inStock: stockUpdate,
  };
  // const session = await mongoose.startSession();
  // try {
  //   session.startTransaction();
  //   const updateProductInventory = await Product.findByIdAndUpdate(
  //     productId,
  //     { inventory: updatedInventory },
  //     { new: true, session },
  //   );
  //   if (!updateProductInventory) {
  //     throw new AppError(httpStatus.BAD_REQUEST, 'failed to update product');
  //   }

  //   const result = await Order.create([payload], { session });
  //   if (!result) {
  //     throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create order');
  //   }

  //   await session.commitTransaction();
  //   await session.endSession();
  // } catch (err: any) {
  //   await session.abortTransaction();
  //   await session.endSession();
  //   throw new Error(err);
  // }

  const updateProductInventory = await Product.findByIdAndUpdate(
    productId,
    { inventory: updatedInventory },
    { new: true },
  );
  if (!updateProductInventory) {
    throw new AppError(httpStatus.BAD_REQUEST, 'failed to update product');
  }

  const result = await Order.create(payload);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create order');
  }
  const finalResult = await Order.findById(result.id).select(
    '-__v -isDeleted -createdAt -updatedAt',
  );

  return finalResult;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find().select(
    '-__v -isDeleted -createdAt -updatedAt',
  );
  return result;
};

const getSingleOrderFromDB = async (email: string) => {
  const result = await Order.findOne({ email }).select(
    '-__v -isDeleted -createdAt -updatedAt',
  );
  return result;
};

export const orderServices = {
  createOrderintoDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
};
