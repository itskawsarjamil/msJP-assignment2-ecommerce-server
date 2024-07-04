import { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
export const validateRequest = (schema: AnyZodObject) => {
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body,
    });
    next();
  });
};
