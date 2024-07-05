import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderintoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  const data = { ...result?._doc };
  delete data['isDeleted'];
  delete data['createdAt'];
  delete data['updatedAt'];
  delete data['__v'];
  delete data['_id'];

  return data;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find().select(
    '-__v -isDeleted -createdAt -updatedAt -_id -id',
  );
  return result;
};

const getSingleOrderFromDB = async (email: string) => {
  const result = await Order.findOne({ email }).select(
    '-__v -isDeleted -createdAt -updatedAt -_id -id',
  );
  return result;
};

export const orderServices = {
  createOrderintoDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
};
