import type { Metadata } from "next";
import {Inter} from"next/font/google";
import "./globals.css";
import Header from "@/components/header";
// import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "News Homepage",
  description: "Challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased  `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
