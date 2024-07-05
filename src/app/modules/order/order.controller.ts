import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Order } from './order.model';
import { orderServices } from './order.service';

const createOrder = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await orderServices.createOrderintoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order created successfully',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const result = await orderServices.getAllOrdersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'orders fetched successfully',
    // meta: result.meta,
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req, res) => {
  const { email } = req.query;

  const result = await orderServices.getSingleOrderFromDB(email as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order fetched successfully for user email!',
    data: result,
  });
});

export const orderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
