import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const studentCount = await prisma.student.count();
    res.status(200).json({ count: studentCount });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter a contagem de alunos' });
  } finally {
    await prisma.$disconnect();
  }
}
