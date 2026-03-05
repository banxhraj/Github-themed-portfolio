import React from 'react';
import { Folder, FileText, Settings2, History, List } from 'lucide-react';
import { FILES, ViewType } from '../types';

interface FileExplorerProps {
  onViewChange: (view: ViewType) => void;
}

export default function FileExplorer({ onViewChange }: FileExplorerProps) {
  return (
    <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-md overflow-hidden bg-white dark:bg-[#0d1117]">
      <div className="bg-[#f6f8fa] dark:bg-[#161b22] border-b border-[#d0d7de] dark:border-[#30363d] p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            alt="Banshraj Thapa"
            className="w-6 h-6 rounded-full"
            src="public/image/profile.jpg"
            referrerPolicy="no-referrer"
          />
          <span className="text-sm font-bold">banshraj-thapa</span>
          <a className="text-sm text-[#6e7781] dark:text-[#8b949e] hover:text-[#0969da]" href="#">chore: initial commit and structure setup</a>
        </div>
        <div className="flex items-center text-xs text-[#6e7781] dark:text-[#8b949e]">
          <span>be94f2a</span>
          <span className="mx-2 font-bold text-lg leading-none">·</span>
          <span>2 days ago</span>
          <span className="mx-2 font-bold text-lg leading-none">·</span>
          <span className="flex items-center"><History className="w-3 h-3 mr-1" /> 124 commits</span>
        </div>
      </div>
      <div className="divide-y divide-[#d0d7de] dark:divide-[#30363d]">
        {FILES.map((file) => (
          <div
            key={file.name}
            onClick={() => onViewChange(file.view)}
            className="flex items-center p-3 hover:bg-slate-50 dark:hover:bg-slate-800 group cursor-pointer transition-colors"
          >
            <div className="w-8 flex items-center">
              {file.type === 'folder' ? (
                <Folder className="w-5 h-5 text-[#0969da]" />
              ) : file.name.endsWith('.json') ? (
                <Settings2 className="w-5 h-5 text-[#6e7781] dark:text-[#8b949e]" />
              ) : file.name.endsWith('.log') ? (
                <List className="w-5 h-5 text-[#6e7781] dark:text-[#8b949e]" />
              ) : (
                <FileText className="w-5 h-5 text-[#6e7781] dark:text-[#8b949e]" />
              )}
            </div>
            <div className="flex-grow">
              <span className="text-sm text-[#0969da] hover:underline">{file.name}</span>
            </div>
            <div className="w-1/3 text-sm text-[#6e7781] dark:text-[#8b949e] hidden md:block truncate">
              {file.description}
            </div>
            <div className="w-1/4 text-sm text-right text-[#6e7781] dark:text-[#8b949e]">
              {file.lastUpdated}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
