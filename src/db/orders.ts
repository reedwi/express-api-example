import prismadb from "../lib/prismadb";
import { type Prisma } from '@prisma/client'


export const getAllOrders = () => prismadb.order.findMany();

export const getOrder = (id: string) => prismadb.order.findUnique({
  where: {
    id: id
  },
  include: {
    orderItems: true,
    payment: true
  }
});

export const createOrder = async (isPaid: boolean, userId: string) => {
  const createOrderOperation = prismadb.user.update({
    where: { id: userId },
    data: {
      orders: {
        create: { isPaid }
      }
    },
  });

  const fetchLatestOrderOperation = prismadb.order.findFirst({
    where: { userId: userId },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const [, latestOrder] = await prismadb.$transaction([createOrderOperation, fetchLatestOrderOperation]);

  return latestOrder;
};

export const deleteOrder = (id: string) => prismadb.order.delete( {
  where: {
    id: id
  }
});

export const updateOrder = (id: string, order: Prisma.OrderUpdateInput) => prismadb.order.update({
  where: {
    id: id
  },
  data: order
});
