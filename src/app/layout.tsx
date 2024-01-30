import "@/styles/globals.css";

import { Kalam } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { favicons as icons } from "@/constants/favicons";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "./theme-provider";

const fontFamily = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Edson Souza",
  description: "Edson Souza - Software engineer adventurer",
  url: "https://scaylart.dev",
  type: "website",
  robots: "follow, index",
  icons,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${fontFamily.variable} bg-slate-900`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider>
            {children}
            <Footer />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
