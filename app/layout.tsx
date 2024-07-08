import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./Header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "frontforumfocus",
  description: "create Impact reports eaasily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        < Header />
        {children}
      </body>
    </html>
  );
}
