import Link from "next/link";
import React from "react";
import classNames from 'classnames';

interface MenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const links = [
  { name: "PARA VOCÊ", href: "/dashboard" },
  { name: "SOBRE NÓS", href: "/dashboard/invoices" },
  { name: "ESPORTE", href: "/dashboard/customers" },
  { name: "EDUCAÇÃO", href: "/dashboard/customers" },
];

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  return (
    <nav
      className={classNames(
        'w-full md:w-auto absolute md:static md:flex md:top-0 opacity-65 transition-transform duration-300 top-[12vh] left-0 bg-white',
        {
          'block': open,
          'hidden': !open,
        }
      )}
      onClick={() => setOpen(!open)}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className='flex h-5 grow items-center justify-center gap-2 border border-zinc-700 bg-gray-50 p-3 text-sm font-medium 
          hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
        >
          <p className="block">{link.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
