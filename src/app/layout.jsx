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
  metadataBase: new URL("https://jainpath.vercel.app"),
  title: "Jain Path - Pachkhan, Niyam, Jain Stavan, Aradhana",
  description:
    "Jain Pachkhan, Jain Stavans, Jain vidhi, Aradhana, Daily niyam & more.",
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
          <section className="max-w-5xl w-full">{children}</section>
        </main>
        <Footer />
        <Toaster richColors theme="light" />
        <Analytics />
      </body>
    </html>
  );
}
