"use client"

import { SessionProvider } from 'next-auth/react';
import FormLogin from './FormLogin';

export default function SignInPage({ session }: { session: any }) {
  return (
    <SessionProvider session={session}>
      <div className="container mx-auto p-4">
        <FormLogin />
      </div>
    </SessionProvider>
  );
}
