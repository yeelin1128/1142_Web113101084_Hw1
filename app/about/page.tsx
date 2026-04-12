"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";

export default function About() {
  
  return (
    <>
      <div className="flex min-h-screen bg-slate-50">

        <Link href="/" className="sm:hidden fixed left-4 top-4 z-50 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border text-sm font-medium">  
         ← 返回
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>
        
        <div className="bg-red-500 w-full">
          About 關於我
        </div>
      </div>
    </>
  );
}
