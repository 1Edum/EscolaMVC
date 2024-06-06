import { useState, useEffect } from 'react';

const useStudentCount = () => {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const response = await fetch('/api/student/studentCount');
        const data = await response.json();
        setStudentCount(data.count);
      } catch (error) {
        console.error('Erro ao buscar a contagem de alunos:', error);
      }
    };

    fetchStudentCount();
  }, []);

  return studentCount;
};

export default useStudentCount;
