import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "ApexByte.co - Peak Performance Software",
  description: "Custom web, mobile, and AI software development agency",
  // The Clean Version: Just points to your icon.png
  icons: {
    icon: "/icon.png",
    apple: "/icon.png", // Uses the same image for iPhone home screen
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Optional: This prevents the annoying "zoom in" on mobile inputs
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${mono.variable} font-sans bg-slate-950 text-white`}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
