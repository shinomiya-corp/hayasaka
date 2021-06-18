import { PrismaClient } from '@prisma/client';
import { resetDatabase } from '../src/common/test/resetDatabase';
const prisma = new PrismaClient();

resetDatabase(prisma)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
