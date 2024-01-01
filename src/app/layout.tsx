import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { favicons as icons } from "@/constants/favicons";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: 'Edson Souza',
  description: 'Edson Souza - Software engineer adventurer',
  url: 'https://scaylart.dev',
  type: 'website',
  robots: 'follow, index',
  icons,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen font-sans antialiased",
        inter.variable
      )}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="mx-auto min-h-screen max-w-[640px] px-4 pt-24 pb-10 sm:pt-40">
              {children}
            </main>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
