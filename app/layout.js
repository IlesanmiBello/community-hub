import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Community Hub",
  description: "Ministry • Leadership • Social Impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl">
              Community Hub
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
              <Link href="/ministry" className="text-gray-300 hover:text-white transition">Ministry</Link>
              <Link href="/impact" className="text-gray-300 hover:text-white transition">Social Impact</Link>
              <Link href="/media" className="text-gray-300 hover:text-white transition">Media</Link>
              <Link href="/connect" className="text-gray-300 hover:text-white transition">Connect</Link>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}