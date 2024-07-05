import { Router } from 'express';
import { ProductControllers } from './product.controller';

import { productValidationSchema } from './product.validation';
import validateRequest from '../../middleware/validateRequest';

const router = Router();
router.post(
  '/',
  validateRequest(productValidationSchema.createProductValidationSchema),
  ProductControllers.createProduct,
);

router.get('/', ProductControllers.getAllProduct);

router.get('/:id', ProductControllers.getSingleProduct);

router.put(
  '/:id',
  validateRequest(productValidationSchema.updateProductValidationSchema),
  ProductControllers.updateProduct,
);

router.delete('/:id', ProductControllers.deleteProduct);

export const ProductRoutes = router;
