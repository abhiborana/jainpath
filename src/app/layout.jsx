import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
  title: "JainPath - Pachkhan, Niyam, Jain Stavan, Aradhana",
  description:
    "JainPath is a modern, all-in-one resource for Jainism. Easily access all Pachkhans, listen to Stavans, learn Mandir Vidhis, and take a daily Niyam. Your complete digital companion for spiritual growth.",
  keywords: [
    "Jain Path",
    "Jain Dharma",
    "Jain rituals",
    "Jain prayers",
    "Jain stavan",
    "Jain Pachkhan",
    "daily Jain niyam",
    "chaityavandan vidhi",
    "navkarsi pachkhan",
    "Adinath stavan",
    "Bhaktamar Stotra",
    "pachkhan",
    "pachhakhan",
    "pachakhan",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased relative bg-slate-50 text-black scroll-smooth overflow-y-auto overflow-x-hidden",
          geist.className
        )}
        cz-shortcut-listen="true"
      >
        <Navbar />
        <main className="p-2 py-4 md:p-4 md:py-8 flex justify-center w-full scroll-smooth">
          <section className="max-w-5xl w-full">{children}</section>
        </main>
        <Footer />
        <Toaster richColors theme="light" />
        <Analytics />
        <Script
          src={
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2856054454705002"
          }
          async
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
