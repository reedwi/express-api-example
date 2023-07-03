import express from 'express';

import { 
  getAllOrders,
  getOrder,
  deleteOrder,
  updateOrder,
  createOrder 
} from '../controllers/orders';

export default (router: express.Router) => {
  router.get('/orders', getAllOrders);
  router.post('/orders/new', createOrder);
  router.get('/orders/:id', getOrder);
  router.delete('/orders/:id', deleteOrder);
  router.patch('/orders/:id', updateOrder);
};