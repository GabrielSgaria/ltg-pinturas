import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LTG - Pinturas e Drywall",
  description: "LTG - Pinturas e Drywall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br" className="scroll-smooth focus:scroll-auto">
      <body className={`bg-zinc-50 text-gray-900 ${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
