import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { satoshi, lato } from "@/lib/customFonts";
import MobileHeader from "@/components/Navigation/MobileHeader";
import ResponsiveDesign from "@/components/ResDesign";

export const metadata: Metadata = {
  title: "Software House | Lead On Global",
  description:
    "Lead On Global is a software development company dedicated to providing the best technology solutions for your business. With our expert team, we offer innovative software development services tailored to your needs. Find the right software solutions to advance your business with us",
  keywords: "Software House, Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${lato.variable}`}>
      <body className="relative min-w-full min-h-screen">
        <Navbar />
        <MobileHeader />
        {/* <ResponsiveDesign /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
