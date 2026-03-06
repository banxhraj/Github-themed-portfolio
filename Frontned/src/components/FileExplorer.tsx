import React from 'react';
import { Folder, FileText, Settings2, History, List } from 'lucide-react';
import { FILES, ViewType } from '../types';

interface FileExplorerProps {
  onViewChange: (view: ViewType) => void;
}

export default function FileExplorer({ onViewChange }: FileExplorerProps) {
  return (
    <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-md overflow-hidden bg-white dark:bg-[#0d1117]">
      <div className="bg-[#f6f8fa] dark:bg-[#161b22] border-b border-[#d0d7de] dark:border-[#30363d] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center space-x-2 overflow-hidden text-[#6e7781] dark:text-[#8b949e]">
          <img
            alt="Banshraj Thapa"
            className="w-5 h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
            src="profile.jpg"
            referrerPolicy="no-referrer"
          />
          <span className="text-sm font-bold truncate text-slate-900 dark:text-slate-100">banshraj-thapa</span>
          <a className="text-xs md:text-sm hover:text-[#0969da] truncate" href="#">chore: initial commit and structure setup</a>
        </div>
        <div className="flex items-center text-[10px] md:text-xs text-[#6e7781] dark:text-[#8b949e] whitespace-nowrap">
          <span>be94f2a</span>
          <span className="mx-1 md:mx-2 font-bold text-base md:text-lg leading-none">·</span>
          <span>2 days ago</span>
          <span className="mx-1 md:mx-2 font-bold text-base md:text-lg leading-none">·</span>
          <span className="flex items-center"><History className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" /> 124 commits</span>
        </div>
      </div>
      <div className="divide-y divide-[#d0d7de] dark:divide-[#30363d]">
        {FILES.map((file) => (
          <div
            key={file.name}
            onClick={() => onViewChange(file.view)}
            className="flex items-center p-3 hover:bg-slate-50 dark:hover:bg-slate-800 group cursor-pointer transition-colors"
          >
            <div className="w-8 flex items-center flex-shrink-0">
              {file.type === 'folder' ? (
                <Folder className="w-4 h-4 md:w-5 md:h-5 text-[#0969da]" />
              ) : file.name.endsWith('.json') ? (
                <Settings2 className="w-4 h-4 md:w-5 md:h-5 text-[#6e7781] dark:text-[#8b949e]" />
              ) : file.name.endsWith('.log') ? (
                <List className="w-4 h-4 md:w-5 md:h-5 text-[#6e7781] dark:text-[#8b949e]" />
              ) : (
                <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#6e7781] dark:text-[#8b949e]" />
              )}
            </div>
            <div className="flex-grow min-w-0 pr-2">
              <span className="text-xs md:text-sm text-[#0969da] hover:underline truncate block">{file.name}</span>
            </div>
            <div className="w-1/3 text-xs md:text-sm text-[#6e7781] dark:text-[#8b949e] hidden lg:block truncate pr-2">
              {file.description}
            </div>
            <div className="w-1/4 sm:w-1/5 text-[10px] md:text-xs text-right text-[#6e7781] dark:text-[#8b949e] whitespace-nowrap">
              {file.lastUpdated}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
