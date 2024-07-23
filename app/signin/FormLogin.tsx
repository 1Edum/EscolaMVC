"use client";

import Logo from "../_components/logo";
import Button from "../_components/button";
import Input from "../_components/input";

function FormLogin() {
  return (
    <form className="border-2 rounded-md flex flex-col text-center gap-y-4 p-4">
      <Logo className="w-56 mx-auto" />
      <h1 className="text-xl font-semibold mb-4">Faça seu Login</h1>

      <Input text="Digite seu Email:" type="email" name="email" required />

      <Input text="Digite sua Senha:" type="password" name="password" required />


      <Button type="submit">Entrar</Button>
    </form>
  );
}

export default FormLogin;
