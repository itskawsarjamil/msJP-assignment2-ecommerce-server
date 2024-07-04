import { z } from 'zod';

const createVariantsZodValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});
const updateVariantsZodValidationSchema = z.object({
  type: z.string().optional(),
  value: z.string().optional(),
});

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string().nonempty(),
    tags: z.array(z.string()),
    variants: z.array(createVariantsZodValidationSchema),
    inventory: z.object({
      quantity: z.number(),
      inStock: z.boolean(),
    }),
    isDeleted: z.boolean().optional(),
  }),
});
const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    variants: z.array(updateVariantsZodValidationSchema).optional(),
    inventory: z
      .object({
        quantity: z.number().optional(),
        inStock: z.boolean().optional(),
      })
      .optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const productValidationSchema = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
