import prismadb from "../lib/prismadb";
import { type Prisma } from '@prisma/client'


export const getAllOrderItemsForOrder = async (orderId: string) => await prismadb.orderItem.findMany({
  where: {
    orderId
  }
});

export const getAllOrderItems = async () => await prismadb.orderItem.findMany({ include: {order: true, service: true}});

export const getOrderItem = async (id: string) => await prismadb.orderItem.findUnique({
  where: {
    id: id
  },
  include: {
    order: true,
    service: true
  }
});

export const createOrderItem = async (orderId: string, serviceId: string) => {

  const createOrderItemOperation = await prismadb.orderItem.create({
    data: {
      serviceId: serviceId,
      orderId: orderId
    }
  });


  return createOrderItemOperation;
};

export const deleteOrderItem = async (id: string) => await prismadb.orderItem.delete( {
  where: {
    id: id
  }
});

export const updateOrderItem = async (id: string, orderItem: Prisma.OrderItemUpdateInput) => await prismadb.orderItem.update({
  where: {
    id: id
  },
  data: orderItem
});
