"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {
  
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50">
        
        {/* 1. 電腦版選單：只有在 sm (640px) 以上才會顯示 */}
        <aside className="hidden sm:block justify-center flex-shrink-0 h-full border-r shadow-md">
          <Menu />
        </aside>

        {/* 2. 主要內容區 */}
        <main className="flex-grow flex flex-col justify-center items-center p-10"></main>
        
        <div className="sm:hidden w-full h-full">
          {/* 手機版 */}
          手機版本 Menu
          <Menu />
        </div>

        {/* 電腦版看到的歡迎文字 */}
        <div className="hidden sm:flex flex-col items-center">
          <h1 className="text-4xl font-bold text-slate-300 mb-4 justify-center">Lim Yi </h1>
          <p className="text-slate-200 tracking-widest justify-center">請從左側選單開始探索</p>
        </div>

      </div>
    </>
  );
}
