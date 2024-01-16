import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { favicons as icons } from "@/constants/favicons";
import { Footer } from "@/components/footer";

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
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <>
            {children}
            <Footer />
          </>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
