"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Menu() {
  
  return (
    <>
      <div className="bg-[#acbac4] w-[320px] h-full p-4 shadow-lg">

        <Link href="/">  
            HOME
        </Link>

        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/cat.png" alt="Head sticker" width={80} height={80} />
          </div>
        </div>

        <div className="text-center">林庭誼 Lim</div>
        <div className="text-center">簡介</div>

        <div className="flex gap-2">
          {/* icons, links, images */}
          <div>
            <TbActivity />
          </div>
          <div>社群連結</div>
          <div>社群連結</div>
        </div>


        <Link href="/about">
          <div className="bg-[#f0f0db] p-[16px] rounded-md">關於我</div>
        </Link>

        <Link href="/hobby">
          <div className="bg-[#f0f0db] p-[16px] mt-2 rounded-md">程式與設計專案</div>
        </Link>

        <Link href="/design-project">
          <div className="bg-[#f0f0db] p-[16px] mt-2 rounded-md">音樂與其餘一切</div>
        </Link>

        <Link href="/programming-project">
          <div className="bg-[#f0f0db] p-[16px] mt-2 rounded-md">興趣與生活日常</div>
        </Link>


        </div>
    </>
  );
}
