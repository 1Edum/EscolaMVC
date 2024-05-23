import Image from "next/image";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center py-8 w-screen h-screen">
      <Image src="/login/bg-login.png" alt="" fill className="opacity-95" />
      <div className="z-50 gap-y-4 flex flex-col">
        <div>
          <Image
            src="/logo.png"
            alt=""
            width={200}
            height={400}
            className="block md:hidden"
          />
          <Image
            src="/logo.png"
            alt=""
            width={350}
            height={500}
            className=" hidden md:block"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/login/icon-login.png"
            alt=""
            width={150}
            height={300}
            className=""
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
        </div>
        <Button variant="outline" className="hover:bg-primary-foreground">
          Entrar
        </Button>
        <div className="flex w-full justify-end">
          <h3 className="text-sm  font-semibold">Esqueceu sua Senha?</h3>
        </div>
      </div>
    </div>
  );
}
