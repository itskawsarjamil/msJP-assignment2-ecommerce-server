import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productServices } from './product.services';

const createProduct = catchAsync(async (req, res) => {
  const productInfo = req.body;
  const result = await productServices.createProductIntoDB(productInfo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product created successfully',
    data: result,
  });
});

// const createProducts2 = async (req, res) => {
//   try {
//     const { productInfo } = req.body;
//     const result = await productServices.createProductIntoDB(productInfo);

//     res.status(200).json({
//       success: true,
//       message: 'User created successfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: 'something went wrong.User creation Failed',
//       error: {
//         code: err.code,
//         description: err.message,
//       },
//     });
//   }
// };
// const createProducts3 = async (req, res,next) => {
//   try {
//     const { productInfo } = req.body;
//     const result = await productServices.createProductIntoDB(productInfo);

//     res.status(200).json({
//       success: true,
//       message: 'User created successfully',
//       data: result,
//     });
//   } catch (err: any) {
//     next(err)
//   }
// };

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await productServices.getSingleProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product fetched successfully',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'products are retrieved successfully',
    // meta: result.meta,
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { productInfo } = req.body;
  const result = await productServices.updateProdcutIntoDB(id, productInfo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product is updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.deleteProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product deleted successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
