"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";


export default function About() {
  
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden bg-slate-50 overflow-y-auto">

        <Link href="/" className="sm:hidden fixed left-4 top-4 z-50 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border text-sm font-medium">  
         ← 返回
        </Link>
        
        <aside className="sm:block hidden w-[320px] flex-shrink-0 h-full border-r  z-10">
          <Menu />
        </aside>
        
        <div className="flex-grow bg-slate-50 overflow-y-auto p-10">
        <h1 className="text-2xl font-bold">關於我</h1>
        </div>
      </div>
    </>
  );
}
