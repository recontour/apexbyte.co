import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Viewport } from "next"; // For responsive viewport
import ChatWidget from "./components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "ApexByte.co - Peak Performance Software",
  description: "Custom web, mobile, and AI software development agency",
  icons: [
    { rel: "icon", url: "/favicon.png" }, // ← ADD THIS: Your PNG favicon
    { rel: "apple-touch-icon", url: "/favicon.png" }, // For iOS
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} font-sans bg-navy text-white`}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
