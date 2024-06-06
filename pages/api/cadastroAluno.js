import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password, room } = req.body;

    if (!name || !email || !password || !room) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      let existingRoom = await prisma.room.findUnique({
        where: { name: room },
      });

      if (!existingRoom) {
        existingRoom = await prisma.room.create({
          data: { name: room },
        });
      }

      const student = await prisma.student.create({
        data: {
          name,
          email,
          password,
          roomId: existingRoom.id,
          registrationMonth: new Date(),
        },
      });

      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create student', details: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const students = await prisma.student.findMany({
        include: { room: true },
      });

      const currentDate = new Date();
      const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

      const totalStudents = students.length;
      const lastMonthStudents = students.filter(student => {
        const registrationDate = new Date(student.registrationMonth);
        return registrationDate >= lastMonthDate && registrationDate < nextMonthDate;
      }).length;

      const percentageLastMonth = (lastMonthStudents / totalStudents) * 100;

      res.status(200).json({ students, percentageLastMonth });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch students', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
