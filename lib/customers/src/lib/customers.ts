import { prisma } from 'nextjs/';

type CustomerType = {
  id: number;
  name: string;
  email: string;
};

export async function getAllCustomers(): Promise<CustomerType[]> {
  await prisma;
  return [];
}
