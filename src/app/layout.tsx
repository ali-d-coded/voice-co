import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
// import { Spotlight } from "@/components/ui/spotlight-new";


const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: "400",
});
 
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "200",
});


export const metadata: Metadata = {
  title: "Voice Co",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif4.variable} ${inter.variable} antialiased relative bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.1),transparent_100%)]`}
      >
        {/* <Spotlight fill="#ffffff11" className="rotate-[95deg] h-[120%]" /> */}
        <NavBar />
        <div className="h-50" />
        <main className="h-[100dvh] max-w-[610px] mx-auto">
        {children}
        </main>
      </body>
    </html>
  );
}
