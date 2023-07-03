import prismadb from "../lib/prismadb";
import { Service } from "@prisma/client";
import { type Prisma } from '@prisma/client'


export const getAllServices = () => prismadb.service.findMany();

export const getService = (id: string) => prismadb.service.findUnique({
  where: {
    id: id
  },
  include: {
    orderItems: true
  }
});

export const createService = (service: Prisma.ServiceCreateInput) => prismadb.service.create({ data: service });

export const deleteService = (id: string) => prismadb.service.delete( {
  where: {
    id: id
  }
});

export const updateService = (id: string, service: Prisma.ServiceUpdateInput) => prismadb.service.update({
  where: {
    id: id
  },
  data: service
});
