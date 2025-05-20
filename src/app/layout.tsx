import type { Metadata } from "next";
import localFont from "next/font/local";
import { Figtree, Geist_Mono } from "next/font/google";
import Providers from "@/lib/providers";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

const FigtreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

const GeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const AliceSerif = localFont({
  src: "./_fonts/Alice/Alice-Regular.ttf",
  variable: "--font-alice",
});

const OldeEnglish = localFont({
  src: "./_fonts/Olde_English/OldeEnglishRegular.ttf",
  variable: "--font-olde-english",
});

export const metadata: Metadata = {
  title: "Finis Visus",
  description: "Insight begins where vision fades.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${FigtreeSans.variable} ${GeistMono.variable} ${AliceSerif.variable} ${OldeEnglish.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
