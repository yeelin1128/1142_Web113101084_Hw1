
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "林庭誼的數位履歷",
  description: "林庭誼的數位履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">


        <div className="flex h-full">

          {/* 左邊 */}
          

          {/* 右邊 */}
          <div className="bg-[#acbac4] w-full h-full">

            {children}

          </div>

        </div>

      </body>
    </html>
  );
}
