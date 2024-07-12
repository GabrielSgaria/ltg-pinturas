import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="pt_br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
