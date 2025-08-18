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
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
