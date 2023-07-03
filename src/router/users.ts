import express from 'express';

import { 
  getAllUsers, 
  deleteUser, 
  updateUser,
  createUser,
  getUser 
} from '../controllers/users';

export default (router: express.Router) => {
  router.get('/users', getAllUsers);
  router.post('/users/new', createUser);
  router.get('/users/:id', getUser);
  router.delete('/users/:id', deleteUser);
  router.patch('/users/:id', updateUser);
};