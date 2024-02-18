import "@/styles/globals.css";

import { Kalam } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { favicons as icons } from "@/constants/favicons";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "./theme-provider";
import { siteConfig } from "@/config/site";
import React from "react";
import { Header } from "@/components/header";
import { BackgroundBeams } from "@/components/ui/background-beams";

const fontFamily = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
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
      <body
        className={`font-sans ${fontFamily.variable} bg-background-100 text-text-950`}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider>
            <BackgroundBeams />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
