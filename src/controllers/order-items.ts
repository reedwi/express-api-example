import express from 'express';

import { 
  getAllOrderItemsForOrder as dbGetAllOrderItemsForOrder,
  getAllOrderItems as dbGetAllOrderItems, 
  getOrderItem as dbGetOrderItem, 
  createOrderItem as dbCreateOrderItem,
  deleteOrderItem as dbDeleteOrderItem,
  updateOrderItem as dbUpdateOrderItem 
} from '../db/order-items';

export const getAllOrderItemsForOrder = async (req: express.Request, res: express.Response) => {
  try {
    const { orderId } = req.params;

    const orderItems = await dbGetAllOrderItemsForOrder(orderId);

    return res.status(200).json(orderItems);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getAllOrderItems = async (req: express.Request, res: express.Response) => {
  try {
    const orderItems = await dbGetAllOrderItems();

    return res.status(200).json(orderItems);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getOrderItem = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const orderItem = await dbGetOrderItem(id);

    return res.status(200).json(orderItem);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const createOrderItem = async (req: express.Request, res: express.Response) => {
  try {
    const { orderId, serviceId } = req.body;
    
    if (!orderId || !serviceId) {
      return res.status(400).json({ message: "Please ensure orderId and serviceId are included"});
    }

    const createdOrderItem = await dbCreateOrderItem(orderId, serviceId);

    return res.status(200).json(createdOrderItem);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const deleteOrderItem = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedOrderItem = await dbDeleteOrderItem(id);

    return res.json(deletedOrderItem);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateOrderItem = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { ...orderItemUpdates } = req.body;

    const updatedOrderItem = await dbUpdateOrderItem(id, orderItemUpdates);

    return res.status(200).json(updatedOrderItem);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
