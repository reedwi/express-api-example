import express from 'express';

import { 
  getAllOrderItems,
  getOrderItem,
  deleteOrderItem,
  updateOrderItem,
  createOrderItem,
  getAllOrderItemsForOrder 
} from '../controllers/order-items';

export default (router: express.Router) => {
  router.get('/order-items', getAllOrderItems);
  router.get('/orders/:id/order-items', getAllOrderItemsForOrder)
  router.post('/order-items/new', createOrderItem);
  router.get('/order-items/:id', getOrderItem);
  router.delete('/order-items/:id', deleteOrderItem);
  router.patch('/order-items/:id', updateOrderItem);
};