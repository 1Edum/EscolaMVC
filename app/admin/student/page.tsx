"use client";

import React from "react";
import InputCadastro from "../_components/input-cadastro";
import useStudentCount from "../../hooks/useStudentCount";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import useRoomCount from "../../hooks/useRoomCount";
import { Users2Icon } from "lucide-react";

const studentFields = [
  { name: "name", type: "text", placeholder: "Name", required: true },
  { name: "email", type: "text", placeholder: "Email", required: true },
  { name: "room", type: "text", placeholder: "Room", required: true },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    required: true,
  },
];

function Page() {
  const studentCount = useStudentCount();
  const roomCount = useRoomCount();
  const cardsConfig = [
    { title: "Quantidade de Alunos Cadastrados", description: studentCount },
    { title: "Quantidade de Salas Cadastradas", description: roomCount },
  ];
  return (
    <main className="flex flex-col gap-y-2">
      <section className="flex flex-col md:flex-row w-full justify-around  gap-y-2">
        {cardsConfig.map((card) => (
          <Card
            className="px-5 py-3 flex md:flex-col justify-between"
            key={card.title}
          >
            <CardHeader className="p-0 flex flex-row items-center">
              <CardTitle className="text-lg ">
                {card.title}
              </CardTitle>
              <div>
                <Users2Icon />
              </div>
            </CardHeader>
            <CardDescription className="text-xl md:mt-3">
              <h3>{card.description}</h3>
            </CardDescription>
          </Card>
        ))}
      </section>
      <div className="md:flex w-full">
        <section className="md:w-1/2 w-full bg-zinc-200 p-3 rounded-md">
          <InputCadastro endpoint="/api/cadastroAluno" fields={studentFields} />
        </section>
        <section className="bg-red-600 w-1/2 p-3 rounded-md">
          {/* Conteúdo adicional */}
        </section>
      </div>
    </main>
  );
}

export default Page;
