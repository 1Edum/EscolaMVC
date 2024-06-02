'use client';

import React from "react";
import InputCadastro from "../_components/input-cadastro";
import useStudentCount from '../../hooks/useStudentCount';

const studentFields = [
  { name: 'name', type: 'text', placeholder: 'Name', required: true },
  { name: 'email', type: 'text', placeholder: 'Email', required: true },
  { name: 'room', type: 'text', placeholder: 'Room', required: true },
  { name: 'password', type: 'password', placeholder: 'Password', required: true },
];

function Page() {
  const studentCount = useStudentCount();

  return (
    <main>
      <section>
        {studentCount}
      </section>
      <div className="md:flex w-full">
        <section className="md:w-1/2 w-full bg-zinc-200 p-3 rounded-md">
          <InputCadastro endpoint="/api/cadastroAluno" fields={studentFields} />
        </section>
        <section className="bg-red-600 w-1/2">
          {/* Conteúdo adicional */}
        </section>
      </div>
    </main>
  );
}

export default Page;
