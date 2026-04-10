import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Living Oracles Ministries",
  description: "Ministry • Leadership • Social Impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <nav style={{borderBottom: '1px solid #2A2A2A'}} className="fixed top-0 w-full bg-black z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <span style={{color: '#C9A84C'}} className="font-bold text-lg leading-tight">Living Oracles</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase">Ministries</span>
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
              <Link href="/ministry" className="text-gray-400 hover:text-white transition">Ministry</Link>
              <Link href="/impact" className="text-gray-400 hover:text-white transition">Social Impact</Link>
              <Link href="/media" className="text-gray-400 hover:text-white transition">Media</Link>
              <Link href="/connect" className="text-gray-400 hover:text-white transition">Connect</Link>
            </div></div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}