import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  await prisma.player.deleteMany()
  const objects = await prisma.object.findMany({
    where: {
      gameName: 'Dubai'
    },
    include: {
      players: true
    }
  })

  console.log(objects);
}

await main();

export default prisma;