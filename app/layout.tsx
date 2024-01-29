import type { Metadata } from "next";
import "./globals.css";
// import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import localFont from "next/font/local";
import { Toaster } from "@/components/sub/toaster";

const nebula = localFont({ src: "../fonts/Nebula-Regular.otf" });

export const metadata: Metadata = {
  title: "Tiago Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nebula.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Toaster />
        {/* <StarsCanvas /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
