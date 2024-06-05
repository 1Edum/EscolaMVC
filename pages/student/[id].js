import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function StudentPage() {
  const router = useRouter();
  const { id } = router.query;
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      // Fetch student data
      fetch(`/api/student/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setStudent(data);
          }
        })
        .catch((error) => {
          setError('Failed to fetch student data');
          console.error('Error fetching student data:', error);
        });
    }
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{student.name}</h1>
      <p>Email: {student.email}</p>
      <p>Senha: {student.password}</p>
      <p>Room: {student.room}</p>

    </div>
  );
}
