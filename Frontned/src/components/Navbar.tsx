import React from 'react';
import { Github, Bell, Star, GitFork, Code, CircleDot, GitMerge, PlayCircle, Library, Book } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#f6f8fa] dark:bg-[#161b22] border-b border-[#d0d7de] dark:border-[#30363d] pt-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Github className="w-8 h-8 text-slate-900 dark:text-white" />
          <div className="flex items-center text-lg md:text-xl font-medium">
            <a className="text-[#0969da] hover:underline" href="#">banshraj-thapa</a>
            <span className="mx-1 text-[#6e7781] dark:text-[#8b949e]">/</span>
            <a className="text-[#0969da] hover:underline font-bold" href="#">portfolio</a>
            <span className="ml-2 px-2 py-0.5 text-xs border border-[#d0d7de] dark:border-[#30363d] rounded-full text-[#6e7781] dark:text-[#8b949e] font-normal">Public</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <button className="flex items-center px-3 py-1.5 bg-[#f6f8fa] dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold">
            <Bell className="w-4 h-4 mr-1.5" /> Notifications
          </button>
          <button className="flex items-center px-3 py-1.5 bg-[#f6f8fa] dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold">
            <Star className="w-4 h-4 mr-1.5" /> Star <span className="ml-2 px-2 bg-slate-200 dark:bg-slate-700 rounded-full">124</span>
          </button>
          <button className="flex items-center px-3 py-1.5 bg-[#f6f8fa] dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold">
            <GitFork className="w-4 h-4 mr-1.5" /> Fork <span className="ml-2 px-2 bg-slate-200 dark:bg-slate-700 rounded-full">42</span>
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 flex overflow-x-auto scrollbar-hide space-x-6">
        <a className="flex items-center pb-3 border-b-2 border-[#fd8c73] text-sm font-semibold whitespace-nowrap" href="#">
          <Code className="w-4 h-4 mr-2" /> Code
        </a>
        <a className="flex items-center pb-3 border-b-2 border-transparent text-[#6e7781] dark:text-[#8b949e] hover:border-slate-300 text-sm whitespace-nowrap" href="#">
          <CircleDot className="w-4 h-4 mr-2" /> Issues <span className="ml-1 px-1.5 bg-slate-200 dark:bg-slate-800 rounded-full text-xs">2</span>
        </a>
        <a className="flex items-center pb-3 border-b-2 border-transparent text-[#6e7781] dark:text-[#8b949e] hover:border-slate-300 text-sm whitespace-nowrap" href="#">
          <GitMerge className="w-4 h-4 mr-2" /> Pull requests <span className="ml-1 px-1.5 bg-slate-200 dark:bg-slate-800 rounded-full text-xs">0</span>
        </a>
        <a className="flex items-center pb-3 border-b-2 border-transparent text-[#6e7781] dark:text-[#8b949e] hover:border-slate-300 text-sm whitespace-nowrap" href="#">
          <PlayCircle className="w-4 h-4 mr-2" /> Actions
        </a>
        <a className="flex items-center pb-3 border-b-2 border-transparent text-[#6e7781] dark:text-[#8b949e] hover:border-slate-300 text-sm whitespace-nowrap" href="#">
          <Library className="w-4 h-4 mr-2" /> Projects
        </a>
        <a className="flex items-center pb-3 border-b-2 border-transparent text-[#6e7781] dark:text-[#8b949e] hover:border-slate-300 text-sm whitespace-nowrap" href="#">
          <Book className="w-4 h-4 mr-2" /> Wiki
        </a>
      </div>
    </nav>
  );
}
