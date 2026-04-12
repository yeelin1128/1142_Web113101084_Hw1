"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";


export default function About() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50">

      <Link href="/" className="sm:hidden fixed left-4 top-4 z-50 bg-white/80 backdrop-blur-md 
                                  px-4 py-2 rounded-full shadow-sm border text-xs font-medium active:scale-95 transition-all">  
         ← 返回
      </Link>

      {/* 1. 電腦版選單 */}
      <aside className="sm:block hidden w-[320px] flex-shrink-0 h-full border-r z-10">
        <Menu />
      </aside>

      {/* 2. 主內容區 */}
      <main className="flex-grow h-full overflow-y-auto bg-slate-50 custom-scrollbar p-6 sm:p-12  pt-20 sm:pt-10">
        
        <header className="mb-12 ml-2">
          <h1 className="text-4xl font-bold text-slate-800 tracking-tight">關於我</h1>
          <p className="text-slate-500 mt-3 tracking-[0.2em] uppercase text-sm">About // Liberal Arts ‧ DCT ‧ Psychology</p>
        </header>

        {/* Bento Grid 容器 */}
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-6 max-w-6xl">
          
          {/* A. 核心自介 (佔大空間 2x2) */}
          <div className="sm:col-span-2 sm:row-span-2 bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div>
              <span className="text-indigo-500 font-bold tracking-widest text-xs uppercase">Introduction</span>
              <h2 className="text-2xl font-bold text-slate-800 mt-4 mb-6">林庭誼 Lim Yi</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                一個離不開下廚和音樂，現實在盆地與港都、思想在文學與數位之間遊走的人。背景橫跨「文學」、「數位科技」與「心理」，喜歡從不同的角度去觀察世界。
              </p>
              <p className="text-slate-600 leading-relaxed">
                程式碼也許就是現代的筆墨；而人之所以為人，是因為透過閱讀與書寫了解其存有的狀態。
              </p>
            </div>
            <div className="text-3xl">🖋️</div>
          </div>

          {/* B. 專業領域 (1x2) */}
          <div className="sm:col-span-1 sm:row-span-2 bg-indigo-50 rounded-[32px] p-8 flex flex-col border border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <h3 className="text-lg font-bold text-indigo-900 mb-6">探索領域</h3>
            <ul className="space-y-6">
              {[
                { title: "文學敘事", icon: "📖" },
                { title: "數位內容", icon: "💻" },
                { title: "音樂創作", icon: "🎶" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <span className="bg-white p-2 rounded-xl shadow-sm group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-slate-700 font-medium">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* C. 技能與標籤 (1x1) */}
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-wrap gap-2 items-center hover:bg-slate-50 transition-colors">
            {["Ai & AE", "UIUX Design", "Max/MSP", "Cakewalk(DAW)"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>

          {/* D. 隨手記/格言 (1x1) */}
          <div className="bg-slate-800 rounded-[32px] p-6 text-white flex flex-col justify-center items-center text-center shadow-lg">
            <p className="italic text-sm opacity-80">「在數位與人文的交叉口，找尋屬於人的溫度。」</p>
          </div>

          {/* E. 寬橫幅區塊 (2x1) */}
          <div className="sm:col-span-2 bg-[#acbac4] rounded-[32px] p-8 flex items-center justify-between text-white relative overflow-hidden group">
             <div className="relative z-10">
               <h3 className="text-xl font-bold">目前狀態</h3>
               <p className="opacity-90 mt-2">正在探索更多互動科技與敘事、音樂結合的可能性。</p>
             </div>
             <div className="text-5xl opacity-30 group-hover:scale-310 transition-transform duration-700">🌊</div>
          </div>

        </div>
      </main>
    </div>
  );
}
