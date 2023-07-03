import express from 'express';

import { 
  getAllPayments as dbGetAllPayments, 
  getPayment as dbGetPayment, 
  createPayment as dbCreatePayment,
  deletePayment as dbDeletePayment,
  updatePayment as dbUpdatePayment 
} from '../db/payments';

export const getAllPayments = async (req: express.Request, res: express.Response) => {
  try {
    const payments = await dbGetAllPayments();

    return res.status(200).json(payments);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getPayment = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const payment = await dbGetPayment(id);

    return res.status(200).json(payment);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deletePayment = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedPayment = await dbDeletePayment(id);

    return res.json(deletedPayment);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updatePayment = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const paymentData = req.body;

    if (!paymentData) {
      return res.status(400).json({ message: "Please ensure payment data is included"});
    }

    const updatedPayment = await dbUpdatePayment(id, paymentData);

    return res.status(200).json(updatedPayment);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createPayment = async (req: express.Request, res: express.Response) => {
  try {
    const paymentData = req.body;
    
    if (!paymentData) {
      return res.status(400).json({ message: "Please ensure payment data is included"});
    }

    const createdPayment = await dbCreatePayment(paymentData);

    return res.status(200).json(createdPayment);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
