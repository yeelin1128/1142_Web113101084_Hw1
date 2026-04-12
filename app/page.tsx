"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {
  
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50 overflow-y-auto">
        
        {/* 1. 電腦版選單：只有在 sm (640px) 以上才會顯示 */}
        <aside className="hidden sm:block w-full flex justify-center flex-shrink-0 h-full border-r">
          <Menu />
        </aside>

        {/* 2. 主要內容區 */}
        <main className="flex-grow h-screen flex flex-col justify-center items-center bg-slate-50 p-10"></main>
        
        <div className="sm:hidden w-full h-full justify-center">
          {/* 手機版 */}
          手機版本 Menu
          <Menu />
        </div>

        {/* 電腦版看到的歡迎文字 */}
        <div className="hidden sm:flex flex-col items-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Lim Yi </h1>
          <p className="text-slate-500 tracking-widest ">請從左側選單開始探索</p>
        </div>

      </div>
    </>
  );
}
