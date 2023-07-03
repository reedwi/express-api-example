import express from 'express';

import users from './users';
import services from './services';
import orders from './orders';
import orderItems from './order-items';
import payments from './payments';

const router = express.Router();

export default (): express.Router => {
  users(router);
  services(router);
  orders(router);
  orderItems(router);
  payments(router);

  return router;
};