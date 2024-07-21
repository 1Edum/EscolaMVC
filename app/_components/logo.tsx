import Image, { ImageProps } from 'next/image'
import React from 'react'

interface LogoProps extends Omit<ImageProps, 'alt' | 'src'> {
    className: string;
    alt?: string;
    src?: string;
  }
  
  function Logo({ className, ...rest }: LogoProps) {
    return (
      <Image
        src="/logo-emvc.png"
        alt="Logo Escola MVC"
        height={200}
        width={120}
        className={`${className} bg-red-800`}
        priority
        quality={100}
        {...rest}
      />
    );
  }

export default Logo