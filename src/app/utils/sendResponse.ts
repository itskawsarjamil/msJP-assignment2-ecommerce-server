import { Response } from 'express';

// type TMeta = {
//   page: number;
//   limit: number;
//   total: number;
//   totalPage: number;
// };

type TResponse<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  // meta: TMeta;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    // meta: data.meta,
    data: data.data,
  });
};

export default sendResponse;
