"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./button";
import Menu from "./menu/menu";
import Burger from "./menu/burger";
import Logo from "./logo";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="h-[12vh] py-2  md:px-7 flex items-center px-4 justify-between shadow-xl border-b border-zinc-200">
      <Logo className={"w-56"}/>
      <div>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}
