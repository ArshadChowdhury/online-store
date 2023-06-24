import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Store by Arshad',
  description: 'This is a practice online store project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <section className="min-h-screen max-w-7xl mx-auto">{children}</section>
      <Footer />
      </body>
    </html>
  )
}
