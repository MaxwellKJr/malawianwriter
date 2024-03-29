"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: any) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
