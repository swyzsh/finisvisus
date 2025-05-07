import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import ToastProvider from "@/lib/toast-provider";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oldeEnglish = localFont({
  src: "./_fonts/olde-english/OldeEnglishRegular.ttf",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${oldeEnglish.variable} antialiased`}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
