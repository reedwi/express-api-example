import express from 'express';

import { 
  getAllUsers as dbGetAllUsers, 
  getUser as dbGetUser, 
  createUser as dbCreateUser,
  deleteUser as dbDeleteUser,
  updateUser as dbUpdateUser 
} from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await dbGetAllUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const user = await dbGetUser(id);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await dbDeleteUser(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { email, firstName, lastName } = req.body;

    if (!email && !firstName && !lastName) {
      return res.status(400).json({ message: "Please ensure firstName, lastName, or0- email are included"});
    }

    const updatedUser = await dbUpdateUser(id, {
      email,
      firstName,
      lastName
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createUser = async (req: express.Request, res: express.Response) => {
  try {
    const { email, firstName, lastName } = req.body;
    
    if (!email || !firstName || !lastName) {
      return res.status(400).json({ message: "Please ensure firstName, lastName, and email are included"});
    }

    const createdUser = await dbCreateUser({
      email: email,
      firstName: firstName,
      lastName: lastName
    });

    return res.status(200).json(createdUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}