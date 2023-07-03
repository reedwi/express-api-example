import express from 'express';

import { 
  getAllServices as dbGetAllServices, 
  getService as dbGetService, 
  createService as dbCreateService,
  deleteService as dbDeleteService,
  updateService as dbUpdateService 
} from '../db/services';

export const getAllServices = async (req: express.Request, res: express.Response) => {
  try {
    const services = await dbGetAllServices();

    return res.status(200).json(services);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getService = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const service = await dbGetService(id);

    return res.status(200).json(service);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteService = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedService = await dbDeleteService(id);

    return res.json(deletedService);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateService = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!name && !description && !price) {
      return res.status(400).json({ message: "Please ensure at least one of name, description, price are included"});
    }

    const updatedService = await dbUpdateService(id, {
      name,
      description,
      price
    });

    return res.status(200).json(updatedService);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createService = async (req: express.Request, res: express.Response) => {
  try {
    const { name, description, price } = req.body;
    
    if (!name && !description && !price) {
      return res.status(400).json({ message: "Please ensure name, description, price are included"});
    }

    const createdService = await dbCreateService({
      name,
      description,
      price
    });

    return res.status(200).json(createdService);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}