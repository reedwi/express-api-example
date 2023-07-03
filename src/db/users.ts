import prismadb from "../lib/prismadb";
import { type Prisma } from '@prisma/client'


export const getAllUsers = () => prismadb.user.findMany();

export const getUser = (id: string) => prismadb.user.findUnique({
  where: {
    id: id
  }
});

export const createUser = (user: Prisma.UserCreateInput) => prismadb.user.create({ data: user });

export const deleteUser = (id: string) => prismadb.user.delete( {
  where: {
    id: id
  }
});

export const updateUser = (id: string, user: Prisma.UserUpdateInput) => prismadb.user.update({
  where: {
    id: id
  },
  data: user
});
