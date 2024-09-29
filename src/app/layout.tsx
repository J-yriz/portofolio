import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../public/style/globals.css";

const kumlienReg = localFont({
  src: "./fonts/kumlien-pro-regular.ttf",
  variable: "--font-kumlien-pro-regular",
  weight: "100 900",
});
const kumlienBold = localFont({
  src: "./fonts/kumlien-pro-bold.ttf",
  variable: "--font-kumlien-pro-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Porto - Jariz",
  description: "Portofolio of my work",
};

import ToTop from "@/components/ToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${kumlienReg.variable} ${kumlienBold.variable} antialiased`}>
        {children}
        <ToTop />
      </body>
    </html>
  );
}
