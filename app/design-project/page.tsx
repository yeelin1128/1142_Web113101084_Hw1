"use client"
import Image from "next/image"

export default function Hobby() {
  
  return (
    <>
      程式專案
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2">專案1</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案2</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案3</div>
        <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2 col-span-2">專案4</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案5</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案6</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案7</div>
        <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center">專案8</div>
        
      </div>
    </>
  );
}
