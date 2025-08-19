import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://dailyniyam.vercel.app"),
  title: "Daily Niyam - Jain Pacchakan, Niyam, Aradhana",
  description: "Jain niyams, pacchakan, aradhana for everyday purposes.",
  keywords: [
    "Jain Pachkhan",
    "Jain niyamn",
    "Jain aradhana",
    "Jain pachhakhan",
    "jain pachkan",
    "daily niyam",
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
      >
        <Navbar />
        <main className="p-2 py-4 md:p-4 md:py-8 flex justify-center w-full scroll-smooth">
          <section className="max-w-7xl w-full">{children}</section>
        </main>
        <Footer />
        <Toaster richColors theme="light" />
        <Analytics />
      </body>
    </html>
  );
}
