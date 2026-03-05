import React from 'react';
import { MapPin, Link as LinkIcon, Mail, Smile } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/4">
      <div className="sticky top-8">
        <div className="relative group">
          <img
            alt="Banshraj Thapa Profile"
            className="w-full rounded-full border border-[#d0d7de] dark:border-[#30363d]"
            src="image/profile.jpg"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 flex items-center bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-full px-2 py-1 shadow-sm text-xs">
            <Smile className="w-3 h-3 text-yellow-500 mr-1" /> Focused
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Banshraj Thapa</h1>
          <p className="text-xl text-[#6e7781] dark:text-[#8b949e] font-light">banshraj-thapa</p>
        </div>
        <div className="mt-4 text-sm">
          <p className="font-medium">Full Stack Developer | Tech Enthusiast</p>
          <p className="mt-2 text-[#6e7781] dark:text-[#8b949e]">Passionate about building scalable web applications and exploring new technologies. Building tools for the future of web.</p>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
          <button className="w-full py-1.5 px-4 bg-[#2da44e] hover:bg-[#2c974b] text-white font-semibold rounded-md shadow-sm transition">Hire Me</button>
          <button className="w-full py-1.5 px-4 bg-[#f6f8fa] dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold rounded-md shadow-sm transition">Follow</button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {['React', 'Node.js', 'TypeScript', 'Python', 'AWS'].map(skill => (
            <span key={skill} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-full border border-[#d0d7de] dark:border-[#30363d]">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-[#d0d7de] dark:border-[#30363d] space-y-2 text-sm">
          <div className="flex items-center text-[#6e7781] dark:text-[#8b949e]">
            <MapPin className="w-4 h-4 mr-2" /> Jamshedpur, Jharkhand, India
          </div>
          <div className="flex items-center text-[#6e7781] dark:text-[#8b949e]">
            <LinkIcon className="w-4 h-4 mr-2" />
            <a className="text-[#0969da] hover:underline" href="#">banshrajthapa.dev</a>
          </div>
          <div className="flex items-center text-[#6e7781] dark:text-[#8b949e]">
            <Mail className="w-4 h-4 mr-2" />
            <a className="text-[#0969da] hover:underline" href="mailto:hello@example.com">Banshrajthapa@gmail.com</a>
          </div>
        </div>
      </div>
    </aside>
  );
}
