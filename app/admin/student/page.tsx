"use client";

import React, { useEffect, useState } from "react";
import InputCadastro from "../_components/input-cadastro";
import useStudentCount from "../../_helpers/hooks/useStudentCount";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import useRoomCount from "../../_helpers/hooks/useRoomCount";
import { Users2Icon, School2Icon } from "lucide-react";
import variationStudent from "@/app/_helpers/variationStudent";

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
  const [percentageLastMonth, setPercentageLastMonth] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const percentage = await variationStudent();
        setPercentageLastMonth(percentage);
      } catch (error) {
        console.error('Error fetching student statistics:', error);
      }
    }

    fetchData();
  }, []);
  const cardsConfig = [
    { title: "Number of Registered Students", description: studentCount, icon:<Users2Icon /> },
    { title: "Quantidade de Salas Cadastradas", description: roomCount, icon:<School2Icon />  },
  ];
  return (
    <main className="flex flex-col gap-y-2">
      <section className="flex flex-col md:flex-row w-full justify-around  gap-y-2">
        {cardsConfig.map((card) => (
          <Card
            className="p-5 flex md:flex-col justify-between bg-red-700 border-none md:w-1/3"
            key={card.title}
          >
            <CardHeader className="p-0 flex flex-row items-center gap-1 md:gap-x-10">
              <CardTitle className="text-sm w-5/6 md:w-full text-slate-200">
                {card.title}
              </CardTitle>
              <div className="text-slate-200 flex items-center justify-center">
                {card.icon}          
              </div>
            </CardHeader>
            <CardDescription className="md:mt-3 text-3xl text-white font-extrabold">
              {card.description}
            </CardDescription>
            <CardDescription className="text-sm hidden md:flex text-slate-200">
              {percentageLastMonth} from last month
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
