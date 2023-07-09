import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import "./globals.css";
import { Roboto } from "next/font/google";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Store by Arshad",
  description: "This is a practice online store project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className &&
          "bg-gradient-to-tl from-slate-900 via-slate-400 to to-slate-100"
        }
      >
        <Header />
        <section className="min-h-screen max-w-7xl mx-auto">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
