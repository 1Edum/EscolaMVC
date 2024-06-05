import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const student = await prisma.student.findUnique({ where: { email } });

      if (!student) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const passwordValid = await bcrypt.compare(password, student.password);

      if (!passwordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Redireciona para a página do aluno
      return res.status(200).json({ studentId: student.id });
    } catch (error) {
      console.error('Error logging in student:', error);
      return res.status(500).json({ error: 'Failed to login student' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
