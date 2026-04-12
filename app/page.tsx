"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {
  
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden bg-slate-50 overflow-y-auto">
        
        {/* --- 海浪背景層 --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* 第一層：深一點的藍 (放在右下角) */}
          <div className="absolute -bottom-20 -left-20 w-[140%] h-[500px] 
                          bg-blue-400/20 rounded-[50%_40%_0_0] blur-3xl animate-wave" 
                  style={{ animationDelay: '0s' }} />
  
          {/* 第二層：淡淡的靛色 (放在左下角) */}
          <div className="absolute -bottom-32 -right-20 w-[150%] h-[600px] 
                          bg-indigo-300/20 rounded-[100%] blur-3xl animate-wave" 
                style={{ animationDuration: '12s', animationDelay: '-2s' }} />
          
          {/* 波光光線層：用白色 (white) 搭配極高的模糊度，營造出陽光感 */}
          <div className="absolute bottom-20 left-10 w-[80%] h-[40px] 
                          bg-white/40 rounded-full blur-xl animate-glint" />
          
          <div className="absolute bottom-40 right-20 w-[60%] h-[30px] 
                          bg-yellow-100/30 rounded-full blur-2xl animate-glint" 
              style={{ animationDuration: '3s', animationDelay: '-1s' }} />
        </div>

        {/* 1. 電腦版選單：只有在 sm (640px) 以上才會顯示 */}
        <aside className="hidden sm:block w-[320px] flex justify-center flex-shrink-0 h-full border-r">
          <Menu />
        </aside>

        {/* 2. 主要內容區 */}
        <main className="flex-grow h-screen flex flex-col justify-center items-center bg-transparent p-10 z-10">

            {/* 電腦版看到的歡迎文字 */}
          <div className="hidden sm:flex flex-col items-center">
    {/*        <h1 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">Lim Yi </h1> */}
            <p className="text-slate-500 tracking-widest drop-shadow-sm">
              請從左側選單開始探索
            </p>
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
