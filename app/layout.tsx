import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Infinity Medical Centre Gungahlin | Coming Soon",
    template: "%s | Infinity Medical Centre Gungahlin",
  },
  description:
    "Infinity Medical Centre Gungahlin is opening soon. A modern, accessible medical centre for the Gungahlin community.",
  metadataBase: new URL("https://infinitymedicalcentre.com.au"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
