import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../global.css";
import Providers from "../providers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byte Bard",
  description: "Generic blogging space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="w-full gap-8 flex flex-col max-w-7xl mx-auto">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
