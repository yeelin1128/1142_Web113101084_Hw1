"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {
  
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50 overflow-y-auto z-0">
        
        {/* --- 海浪背景層 --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
          {/* 第一層波浪 (淺藍色) */}
          <div className="absolute -bottom-10 -left-10 w-[120%] h-[300px] bg-gradient-to-t from-blue-200/50 to-transparent rounded-[40%_50%_0_0] blur-3xl animate-wave" />
          
          {/* 第二層波浪 (更淡的靛藍) */}
          <div className="absolute -bottom-20 -right-10 w-[130%] h-[400px] bg-gradient-to-t from-indigo-100/40 to-transparent rounded-[50%_40%_0_0] blur-3xl animate-wave-slow" />
        </div>

        {/* 1. 電腦版選單：只有在 sm (640px) 以上才會顯示 */}
        <aside className="hidden sm:block w-[320px] flex justify-center flex-shrink-0 h-full border-r">
          <Menu />
        </aside>

        {/* 2. 主要內容區 */}
        <main className="flex-grow h-screen flex flex-col justify-center items-center bg-slate-50 p-10 z-10">

            {/* 電腦版看到的歡迎文字 */}
          <div className="hidden sm:flex flex-col items-center">
    {/*        <h1 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Lim Yi </h1> */}
            <p className="text-slate-500 tracking-widest ">請從左側選單開始探索</p>
          </div>

        </main>
        
        <div className="sm:hidden fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
          {/* 手機版 */}
          <Menu />
        </div>

      </div>
    </>
  );
}
