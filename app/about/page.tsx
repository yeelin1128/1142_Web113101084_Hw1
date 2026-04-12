"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";

export default function About() {
  
  return (
    <>
      <div className="flex h-screen w-full">

        <Link href="/" className="sm:hidden fixed left-4 top-4 z-50 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border text-sm font-medium">  
         ← 返回
        </Link>
        <div className="sm:block hidden flex-shrink-0 border-r shadow-md">
          <Menu />
        </div>
        
        <div className="flex-grow bg-slate-50 overflow-y-auto p-10">
        <h1 className="text-2xl font-bold">關於我</h1>
        </div>
      </div>
    </>
  );
}
