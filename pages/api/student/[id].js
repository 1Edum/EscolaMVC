import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const student = await prisma.student.findUnique({
        where: { id: id },
      });

      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }

      res.status(200).json(student);
    } catch (error) {
      console.error('Error fetching student:', error);
      res.status(500).json({ error: 'Failed to fetch student' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


