import express from 'express';
import {
  getAllPayments,
  getPayment,
  deletePayment,
  updatePayment,
  createPayment,
} from '../controllers/payments';

export default (router: express.Router) => {
  router.get('/payments', getAllPayments);
  router.post('/payments/new', createPayment);
  router.get('/payments/:id', getPayment);
  router.delete('/payments/:id', deletePayment);
  router.patch('/payments/:id', updatePayment);
};