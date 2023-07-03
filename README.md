# Node-TS-API-Boilerplate
A general boilerplate for backend API setup using
* node
* express
* typescript
* postgres
* prisma

I did use supabase for my database, but I didn't use the js client, instead I setup using prisma. One variation would be to use the supabase client in place of prisma if you don't want to use that ORM.

## Structure

1. `index.ts` in the root of `/src` folder where the express app is configured and started. 
2. Router is added from `/src/router/index.ts` where you make a router for each path. In this case users, orders, order items, payments, services
3. Each route in the individual router files is tied to a controller function. Example
```
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
```
In the order-items router to get a specific order-item when you pass the id, it goes to the `getOrderItem` function.

4. It is then passed to the controller function, `/src/controllers` where it is in charge of getting data. 
5. The controller functions are looking to `/src/db` where the actual connection and query to the database is being done

If I needed to add middleware it would be included in the middlewares folder and would be another parameter passed in the router files. 