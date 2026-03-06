import React from 'react';
import { Star, GitFork } from 'lucide-react';

export default function READMEView() {
  return (
    <div className="mt-8 border border-[#d0d7de] dark:border-[#30363d] rounded-md bg-white dark:bg-[#0d1117]">
      <div className="bg-[#f6f8fa] dark:bg-[#161b22] border-b border-[#d0d7de] dark:border-[#30363d] p-3 sticky top-0 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="material-icons-outlined text-sm">menu</span>
          <span className="text-sm font-bold">README.md</span>
        </div>
      </div>
      <div className="p-8 prose dark:prose-invert max-w-none">
        <h1 className="border-b border-[#d0d7de] dark:border-[#30363d] pb-2">Hi there! I'm Banshraj Thapa 👋</h1>
        <p className="text-lg text-[#6e7781] dark:text-[#8b949e] leading-relaxed">
          I am a passionate Full Stack Developer with 1 year of experience in building high-quality web applications. I love solving complex problems and turning ideas into reality through code.
        </p>

        <h2 className="border-b border-[#d0d7de] dark:border-[#30363d] pb-2 mt-8">🛠 Technologies & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js, Express, NestJS</li>
            <li><strong>Database:</strong> PostgreSQL, MongoDB, Redis</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cloud:</strong> AWS, Docker, CI/CD Pipelines</li>
            <li><strong>Mobile:</strong> React Native, Flutter (Basics)</li>
            <li><strong>Others:</strong> TypeScript, GraphQL, WebSockets</li>
          </ul>
        </div>

        <h2 className="border-b border-[#d0d7de] dark:border-[#30363d] pb-2 mt-8">🚀 Featured Projects</h2>
        <div className="space-y-6 mt-6">
          <div className="border border-[#d0d7de] dark:border-[#30363d] p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="m-0 text-[#0969da]">AI based Code Reviewer</h3>
              <span className="px-2 py-0.5 text-xs border border-[#d0d7de] dark:border-[#30363d] rounded-full">Live</span>
            </div>
            <p className="text-sm m-0">AI-powered code review tool that helps developers identify potential bugs, security vulnerabilities, and code quality issues in their code.</p>
            <div className="mt-3 flex items-center space-x-3 text-xs text-[#6e7781] dark:text-[#8b949e]">
              <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-400 mr-1.5"></span>JavaScript</span>
              <span className="flex items-center"><Star className="w-3 h-3 mr-1" /> 84</span>
              <span className="flex items-center"><GitFork className="w-3 h-3 mr-1" /> 12</span>
            </div>
          </div>

          <div className="border border-[#d0d7de] dark:border-[#30363d] p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="m-0 text-[#0969da]">Simple Voice Assistant Terminal Based</h3>
              <span className="px-2 py-0.5 text-xs border border-[#d0d7de] dark:border-[#30363d] rounded-full">Beta</span>
            </div>
            <p className="text-sm m-0">A simple voice that can perform tasks though voice command.</p>
            <div className="mt-3 flex items-center space-x-3 text-xs text-[#6e7781] dark:text-[#8b949e]">
              <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-600 mr-1.5"></span> Python</span>
              <span className="flex items-center"><Star className="w-3 h-3 mr-1" /> 128</span>
              <span className="flex items-center"><GitFork className="w-3 h-3 mr-1" /> 45</span>
            </div>
          </div>
        </div>

        <h2 className="border-b border-[#d0d7de] dark:border-[#30363d] pb-2 mt-8">📈 Stats</h2>
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <img
            alt="GitHub Stats Chart Mockup"
            className="w-full h-auto rounded-lg border border-[#d0d7de] dark:border-[#30363d]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrJy5CRH7vmF09_QBHCpT9qZFVUct9dCrHnWdlRviiCNNFezpd_mmCktTxN_YUMabdVqwj89MIK23cVuqe9L5poStRF1Y5psDW-le2XdMILuV_n-G8mO15S8H6THwQTGpwdAPi9eyE9wQb7LuSdvO8hAeqgvRgweRPzZd5DsAqPMlJS6Uupt8Ef3XPTPEchrzSygzajJXiw1MzgIcyjx71ftIgG6UNG2EKpDMVzu8W4t0YN4yuNjOg6QuEWW7SPEIZ3uGmv7njtBc"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
