import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Infinity Medical Centre Gungahlin | Family GP Clinic",
    template: "%s | Infinity Medical Centre Gungahlin",
  },
  description:
    "Bulk billing family medical centre in Gungahlin, ACT. Comprehensive GP services, chronic disease management, preventive health, and more.",
  metadataBase: new URL("https://infinitymedicalcentre.com.au"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <BookingCTA />
      </body>
    </html>
  );
}
