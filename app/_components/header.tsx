import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const headerVariants = cva("flex items-center", {
  variants: {
    variant: {
      admin: "bg-primary h-10",
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

export {Header}