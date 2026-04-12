"use client"
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id; // 這會抓到網址上的 id，例如 "1" 或 "2"

  // 這裡之後可以改成從資料庫抓，現在我們先用簡單的資料對應
  const projectInfo = {
    "1": { title: "文學與語言", content: "這裡可以寫妳對文學與語言的深度分析..." },
    "2": { title: "數位內容", content: "這裡是數位內容專案的技術細節..." },
  };

  const project = projectInfo[id as keyof typeof projectInfo];

  if (!project) return <div>找不到專案</div>;

  return (
    <div className="min-h-screen p-10 bg-slate-50">
      <Link href="/programming-project" className="text-indigo-600 hover:underline">← 返回列表</Link>
      <h1 className="text-4xl font-bold mt-6">{project.title}</h1>
      <div className="mt-8 text-slate-700 leading-relaxed">
        {project.content}
      </div>
    </div>
  );
}