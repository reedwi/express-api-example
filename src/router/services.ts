import express from 'express';

import { 
  getAllServices, 
  deleteService, 
  updateService,
  createService,
  getService 
} from '../controllers/services';

export default (router: express.Router) => {
  router.get('/services', getAllServices);
  router.post('/services/new', createService);
  router.get('/services/:id', getService);
  router.delete('/services/:id', deleteService);
  router.patch('/services/:id', updateService);
};