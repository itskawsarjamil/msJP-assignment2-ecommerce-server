import { z } from 'zod';

const createOrderValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number(),
  }),
});
const updateOrderValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number().optional(),
    quantity: z.number().optional(),
  }),
});

export const OrderValidationSchema = {
  createOrderValidationSchema,
  updateOrderValidationSchema,
};
