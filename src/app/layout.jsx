import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Daily Niyam - Jain Pacchakan, Niyam, Aradhana",
  description:
    "Jain niyams, pacchakan, aradhana for everyday purposes. Exciting quiz and question on every visit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased bg-slate-50 text-black", geist.className)}
      >
        <Navbar />
        <main className="p-2 py-4 md:p-4 md:py-8 flex justify-center w-full">
          <section className="max-w-7xl w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}
