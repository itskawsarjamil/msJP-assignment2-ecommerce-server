import { z } from 'zod';

const variantsZodValidationSchema = z.object({
  type: z.string().nonempty(),
  value: z.string().nonempty(),
});

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string().nonempty(),
    tags: z.array(z.string()),
    variants: z.array(variantsZodValidationSchema),
    inventory: z.object({
      quantity: z.number(),
      inStock: z.boolean(),
    }),
  }),
});

export const productValidationSchema = {
  createProductValidationSchema,
};
