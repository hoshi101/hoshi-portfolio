import type { Metadata } from "next";
import { Geist_Mono, Inter, Pixelify_Sans } from "next/font/google";
import Provider from "@/components/Hoc/Provider";
import "./globals.css";
import { cn } from "@/lib/utils";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoshi's Portfolio",
  description: "Try to create a portfolio website by myself.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistMono.variable, pixelify.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col"><Provider><ResponsiveNav />{children}</Provider></body>
    </html>
  );
}
