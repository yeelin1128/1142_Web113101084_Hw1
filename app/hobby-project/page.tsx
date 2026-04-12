"use client"

import Menu from "@/component/Menu";
import Link from "next/link";

export default function ProgrammingProject() {

  const projectData = {
    "1": { "name": "烘焙、飲料調製", "imageUrl": "", "desc": "飲料調製丙級，但因疫情從廚師夢想鬼轉" },
    "2": { "name": "手工小物", "imageUrl": "/embor.jpg", "desc": "裁縫設計、刺繡" },
      };
  
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden bg-slate-50 overflow-y-auto">

        <Link href="/" className="sm:hidden fixed left-4 top-4 z-50 bg-white/80 backdrop-blur-md 
                                  px-4 py-2 rounded-full shadow-sm border text-xs font-medium active:scale-95 transition-all">  
         ← 返回
        </Link>
        
        <aside className="sm:block hidden w-[320px] flex-shrink-0 h-full border-r  z-10">
          <Menu />
        </aside>
        

        {/* 主內容區*/}
        <main className="flex-grow h-full overflow-y-auto bg-slate-50 custom-scrollbar p-6 sm:p-10 pt-20 sm:pt-10">
          
          <header className="mb-10 ml-4">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">興趣與手作日常</h1>
            <p className="text-slate-500 mt-2 tracking-widest">這裡記錄我的興趣與日常消遣</p>
          </header>

          {/* 專案網格 */}
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 px-4">
            
            {/* 卡片 1 (跨兩行) */}
            <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 aspect-[3/4] sm:aspect-auto">
              {/* 背景圖片 */}
              <div 
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}
              />
              {/* 遮罩：滑鼠移入時變暗 */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              
              <div className="absolute bottom-0 w-full p-6 text-white backdrop-blur-md bg-white/20 border-t border-white/30
                              transition-transform duration-500 ease-in-out
                  translate-y-[calc(100%-80px)] group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-1 tracking-wider text-white drop-shadow-lg">
                  {projectData["1"]["name"]}</h3>
                <p className="text-xs text-white/90 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ">
                  {projectData["1"]["desc"]}
                </p>
              </div>
            </div>

            {/* 卡片 2 (標準) */}
            <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 aspect-video">
              <div 
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute bottom-0 w-full p-6 text-white backdrop-blur-md bg-white/20 border-t border-white/30">
                <h3 className="text-lg font-bold tracking-wider text-white drop-shadow-lg">
                  {projectData["2"]["name"]}
                </h3>
                <p className="text-xs text-white/90 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ">
                  {projectData["2"]["desc"]}
                </p>
              </div>
            </div>

            

            {/* 其餘專案占位符：延續一致的圓角與背景
            {[2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/50 border border-dashed border-slate-300 rounded-[32px] h-40 flex justify-center items-center text-slate-400 font-medium hover:bg-white hover:border-slate-400 transition-colors cursor-help">
                專案 {i} 籌備中...
              </div>
            ))}
             */}

          </div>
        </main>

      </div>
    </>
  );

}
