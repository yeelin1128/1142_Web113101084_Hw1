"use client"
import Image from "next/image";

export default function DesignProject() {

  let projectData = {
    "1":{
      "name":"寵物用品店",
      "imageUrl":"/cat.png",
    },
    "2":{
      "name":"樂器行官網",
      "imageUrl":"/ins.jpg",
    },
  };
  
  return (
    <div className="flex flex-col gap-4 leading-loose">
      <div className="text-[32px] font-bold">程式專案</div>
      <div className="text-[16px] text-gray-600">這裡收錄我的程式學習過程</div>

      <div className="grid grid-cols-3 gap-4 m-[26px]">
        <div className={"bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2 bg-[url(${projectData["1"]["imageUrl"]})] bg-contain bg-center bg-no-repeat bg-cover relative"}>
          <div className={`text-white  bg-white/15 w-full h-[80px] flex justify-center items-center 
                           backdrop-blur-sm absolute bottom-0 overflow-hidden`}>
            {projectData["1"]["name"]}
          </div>
        
        </div>

        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">
        <div className={`text-white  bg-white/15 w-full h-[80px] flex justify-center items-center 
                           backdrop-blur-sm absolute bottom-0 overflow-hidden`}>
            {projectData["2"]["name"]}
          </div>

        </div>
        
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案3</div>
        <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2 col-span-2">專案4</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案5</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案6</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案7</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案8</div>
      

    </div>
  );
}
