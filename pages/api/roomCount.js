import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const roomCount = await prisma.room.count();
    res.status(200).json({ count: roomCount });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter a contagem de salas" });
  } finally {
    await prisma.$disconnect;
  }
}
