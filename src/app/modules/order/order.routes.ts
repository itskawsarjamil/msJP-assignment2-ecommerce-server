import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { OrderValidationSchema } from './order.validation';
import { orderController } from './order.controller';

const router = Router();

router.post(
  '/',
  validateRequest(OrderValidationSchema.createOrderValidationSchema),
  orderController.createOrder,
);

router.get('/', orderController.getSingleOrder);

router.get('/', orderController.getAllOrders);

export const OrderRoutes = router;
