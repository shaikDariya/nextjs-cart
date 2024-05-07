import { prisma } from '@nextjs/prisma';

export async function GET(req: any, res: any) {
  const allUsers = await prisma.customers.findMany({
    select: {
      id: true,
      name: true,
      status: true,
    },
  });
  console.log(allUsers);
  return new Response('Hello, from API!');
}
