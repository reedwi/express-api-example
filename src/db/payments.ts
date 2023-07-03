import prismadb from "../lib/prismadb";
import { type Prisma } from '@prisma/client'


export const getAllPayments = async () => await prismadb.payment.findMany({
  include: {
    order: true,
    user: true
  }
});

export const getPayment = async (id: string) => await prismadb.payment.findUnique({
  where: {
    id: id
  },
  include: {
    order: true,
    user: true
  }
});

export const createPayment = async (payment: Prisma.PaymentCreateInput) => await prismadb.payment.create({
  data: payment
})

export const deletePayment = async (id: string) => await prismadb.payment.delete( {
  where: {
    id: id
  }
});

export const updatePayment = async (id: string, payment: Prisma.PaymentUpdateInput) => await prismadb.payment.update({
  where: {
    id: id
  },
  data: payment
});
