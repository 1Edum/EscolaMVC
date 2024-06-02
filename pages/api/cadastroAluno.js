import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password, room } = req.body;

    console.log('Received POST request with data:', { name, email, password, room });

    if (!name || !email || !password || !room) {
      console.error('Validation error: All fields are required');
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Verificar se a sala existe, senão criar uma nova sala
      let existingRoom = await prisma.room.findUnique({
        where: { name: room },
      });

      if (!existingRoom) {
        existingRoom = await prisma.room.create({
          data: { name: room },
        });
        console.log('Room created successfully:', existingRoom);
      } else {
        console.log('Found room:', existingRoom);
      }

      // Criar o aluno e associar à sala
      const student = await prisma.student.create({
        data: {
          name,
          email,
          password,
          roomId: existingRoom.id,
        },
      });

      console.log('Student created successfully:', student);
      res.status(200).json(student);
    } catch (error) {
      console.error('Error creating student:', error);
      res.status(500).json({ error: 'Failed to create student', details: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const students = await prisma.student.findMany({
        include: { room: true },
      });
      console.log('Fetched students successfully:', students);
      res.status(200).json(students);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ error: 'Failed to fetch students', details: error.message });
    }
  } else {
    console.error('Method not allowed');
    res.status(405).json({ message: 'Method not allowed' });
  }
}
