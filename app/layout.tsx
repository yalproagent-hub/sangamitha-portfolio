import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display"
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "P. Sangamitha — Digital Creative",
  description: "Creative and detail-oriented Social Media Manager with a strong foundation in IT, content creation, and digital marketing. Proven ability to design engaging content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-gold selection:text-onyx-dark bg-onyx-dark overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
