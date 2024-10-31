
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const headerVariants = cva("flex w-full items-center", {
  variants: {
    variant: {
      admin: "bg-primary h-[12vh] justify-between",
    },
  },
});

interface HeaderProps extends VariantProps<typeof headerVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Header = React.forwardRef<HTMLHeadingElement, HeaderProps>(({ variant, asChild = false, ...props}, ref) => (
  <header
    ref={ref}
    className={cn(headerVariants({variant})
    )}
    {...props}
  />
));
Header.displayName = "Header"

interface LinkItem{
  name: string;
  link: string;
}

interface HeaderLinksProps {
  links?: LinkItem[]; 
}

const HeaderLinks = React.forwardRef<HTMLUListElement, HeaderLinksProps>(({ links }, ref) => (
  
  <ul className="flex items-center" ref={ref}>
    {links?.map((link) => (
      <Link key={link.name} href={link.link}>
        {link.name}
      </Link>
    ))}
  </ul>
));
HeaderLinks.displayName = "HeaderLinks"

export {Header, HeaderLinks}
