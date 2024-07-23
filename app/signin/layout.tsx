

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="w-screen h-screen flex items-center justify-center">

          {children}

        </body>
      </html>
    );
  }