import React from 'react';
import { History, Star, GitFork, Copy, Edit } from 'lucide-react';

export default function SkillsJsonView() {
  const skillsData = {
    name: "Developer Portfolio",
    frontend: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js"
    ],
    backend: [
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Prisma"
    ],
    tools: [
      "Docker",
      "GitHub Actions",
      "Figma"
    ],
    learning: [
      "Rust",
      "WebAssembly"
    ]
  };

  const jsonString = JSON.stringify(skillsData, null, 2);

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4 sm:gap-0">
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm overflow-hidden">
          <span className="text-[#0969da] hover:underline cursor-pointer">portfolio</span>
          <span className="text-[#6e7781]">/</span>
          <span className="font-bold truncate">skills.json</span>
          <span className="px-2 py-0.5 text-[10px] md:text-xs border border-[#d0d7de] dark:border-[#30363d] rounded-full text-[#6e7781] dark:text-[#8b949e]">Public</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          <button className="px-2 md:px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-[#d0d7de] dark:border-[#30363d] rounded text-[10px] md:text-xs font-semibold">
            Watch
          </button>
          <button className="flex items-center px-2 md:px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-[#d0d7de] dark:border-[#30363d] rounded text-[10px] md:text-xs font-semibold">
            <Star className="w-3 h-3 mr-1" /> Star <span className="ml-1">124</span>
          </button>
          <button className="flex items-center px-2 md:px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-[#d0d7de] dark:border-[#30363d] rounded text-[10px] md:text-xs font-semibold">
            <GitFork className="w-3 h-3 mr-1" /> Fork
          </button>
        </div>
      </div>

      <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-md overflow-hidden bg-[#0d1117]">
        <div className="bg-[#161b22] border-b border-[#30363d] p-3 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-[#8b949e]">
            <span className="flex items-center gap-1">245 bytes</span>
            <span className="mx-1">|</span>
            <span>JSON</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-md overflow-hidden border border-[#30363d]">
              <button className="px-3 py-1 bg-[#1f2428] text-white text-xs font-semibold border-r border-[#30363d]">Preview</button>
              <button className="px-3 py-1 bg-[#161b22] text-[#8b949e] text-xs font-medium hover:text-white">Raw</button>
            </div>
            <button className="p-1 text-[#8b949e] hover:text-white"><Copy className="w-4 h-4" /></button>
            <button className="p-1 text-[#8b949e] hover:text-white"><Edit className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="p-4 font-mono text-sm text-[#c9d1d9] overflow-x-auto">
          <pre className="whitespace-pre">
            {jsonString.split('\n').map((line, i) => (
              <div key={i} className="flex">
                <span className="w-8 text-right mr-4 text-[#484f58] select-none">{i + 1}</span>
                <span>{line}</span>
              </div>
            ))}
          </pre>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-xs text-[#8b949e]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><History className="w-3 h-3" /> 12 Commits</span>
          <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> main</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> JavaScript 82.4%</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> JSON 17.6%</span>
        </div>
      </div>
    </div>
  );
}
