"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Menu() {
  
  return (
    <>
      <div className="inset-y-0 left-0 
                      bg-[#acbac4] w-[320px] h-screen p-4 shadow-lg flex flex-col overflow-hidden">

        <Link href="/">  
            HOME
        </Link>

        <div className="flex justify-center items-center mb-6">
        <div className="relative group">
          {/* 背景光圈裝飾 */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-white p-1 rounded-full shadow-xl">
            <div className="bg-gray-100 w-24 h-24 rounded-full overflow-hidden flex justify-center items-center border-2 border-gray-50">
              <Image src="/head-sticker.webp" alt="Head sticker" width={96} height={96} className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-xl font-bold tracking-[0.2em] text-gray-800 mb-2 tracking-tight">林庭誼 Lim Yi</h2>
        <p className="text-xs text-gray-600 tracking-widest uppercase">
          文學 x 數位內容與科技 x 心理 </p>
          <p className="text-xs text-gray-600 tracking-widest uppercase">
          一個正在路上 彎彎繞繞的人類 </p>
      </div>

      {/* 3. 選項欄位（強化浮動與間距設計） */}
      <nav className="flex flex-col gap-5 flex-grow px-2 overflow-y-auto"> {/* 增加 gap 讓選項不擁擠 */}
        {[
          { name: "關於我", href: "/about" },
          { name: "設計與程式專案", href: "/design-project" },
          { name: "音樂與其餘一切", href: "/music-project" },
          { name: "興趣與手作日常", href: "/hobby-project" }
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="group relative bg-white/70 backdrop-blur-sm border border-white/50 
                          px-6 py-5 rounded-[20px]  /* 增加內距 (padding) */
                          shadow-[0_4px_12px_rgba(0,0,0,0.05)] 
                          hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] 
                          hover:-translate-y-2 hover:bg-white /* 懸停時上移更多並變亮 */
                          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
                          active:scale-95 cursor-pointer">
              
              <span className="text-gray-700 group-hover:text-indigo-600 font-semibold 
                            tracking-[0.15em] transition-colors duration-300">
                {item.name}
              </span>

              {/* 右側流光箭頭 */}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 
                            group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                <span className="text-indigo-500">→</span>
              </span>
            </div>
          </Link>
        ))}
      </nav>

      {/* 4. 社群圖示 */}
      <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-white/20">
        <FaGithub className="text-gray-400 hover:text-black cursor-pointer transition-colors" size={20} />
        
        <Link href="https://www.instagram.com/koi_0stop1_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" size={20} />
        </Link>

        <Link href="https://www.linkedin.com/in/ting-yi-lin/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" size={20} />
        </Link>
        
      </div>
    
        </div>
    </>
  );
}
