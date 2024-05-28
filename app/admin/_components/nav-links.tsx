"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const linksIcons = [
  { name: "Home", href: "/admin" },
  { name: "Student", href: "/admin/student" },
  { name: "Teacher", href: "/admin/teacher" },
  { name: "Help", href: "/admin/help" },
];

function NavLinks() {
  const pathaname = usePathname();
  return (
    <div className="flex md:flex-col md:gap-y-2 gap-x-2 items-center ">
      {linksIcons.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "rounded-lg w-full md:px-2 md:py-4  text-center bg-zinc-200  hover:bg-red-700 hover:text-white",
            {
              " text-white bg-[rgb(185,28,28)]": pathaname === link.href,
            }
          )}
        >
          <li className="list-none">{link.name}</li>
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
