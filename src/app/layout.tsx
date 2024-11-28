import type { Metadata } from "next"
import localFont from "next/font/local"
import { Providers } from "./providers"
import HydrationZustand from "@/components/templates/hydrationZustand"
import "./globals.css"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sky Freight Oman",
  description: "SKy Freight Oman app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <HydrationZustand>
            {children}
          </HydrationZustand>
        </Providers>
      </body>
    </html>
  );
}
