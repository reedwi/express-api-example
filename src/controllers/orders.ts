import express from 'express';

import { 
  getAllOrders as dbGetAllOrders, 
  getOrder as dbGetOrder, 
  createOrder as dbCreateOrder,
  deleteOrder as dbDeleteOrder,
  updateOrder as dbUpdateOrder 
} from '../db/orders';

export const getAllOrders = async (req: express.Request, res: express.Response) => {
  try {
    const orders = await dbGetAllOrders();

    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getOrder = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const order = await dbGetOrder(id);

    return res.status(200).json(order);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteOrder = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedOrder = await dbDeleteOrder(id);

    return res.json(deletedOrder);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateOrder = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { isPaid } = req.body;

    if (!isPaid) {
      return res.status(400).json({ message: "Please ensure at least one of isPaid is included"});
    }

    const updatedOrder = await dbUpdateOrder(id, {
      isPaid
    });

    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createOrder = async (req: express.Request, res: express.Response) => {
  try {
    const { userId, isPaid } = req.body;
    
    if (!userId && !isPaid) {
      return res.status(400).json({ message: "Please ensure userId, isPaid are included"});
    }

    const createdOrder = await dbCreateOrder(isPaid, userId);

    return res.status(200).json(createdOrder);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}