"use client";
import { SessionProvider } from "next-auth/react";

import { NextUIProvider } from "@nextui-org/react";

interface Providers {
  children: React.ReactNode;
}

export default function Providers({ children }: Providers) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
