import React from 'react';
import { Mail, Link as LinkIcon, Share2, Code, Info, Send } from 'lucide-react';

export default function ContactView() {
  return (
    <div className="mt-8 border border-[#d0d7de] dark:border-[#30363d] rounded-md bg-white dark:bg-[#0d1117]">
      <div className="bg-[#f6f8fa] dark:bg-[#161b22] border-b border-[#d0d7de] dark:border-[#30363d] p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#6e7781] dark:text-[#8b949e]">72 lines (54 loc) · 2.45 KB</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md overflow-hidden border border-[#d0d7de] dark:border-[#30363d]">
            <button className="px-3 py-1 bg-white dark:bg-[#0d1117] text-xs font-semibold border-r border-[#d0d7de] dark:border-[#30363d]">Preview</button>
            <button className="px-3 py-1 bg-[#f6f8fa] dark:bg-[#161b22] text-xs font-medium text-[#6e7781] dark:text-[#8b949e]">Code</button>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-12">
        <h1 className="text-3xl font-bold border-b border-[#d0d7de] dark:border-[#30363d] pb-2 mb-6">Contact Information</h1>
        <p className="mb-6 text-[#6e7781] dark:text-[#8b949e]">Feel free to reach out for collaborations, project inquiries, or just to say hi! I'm always open to discussing new opportunities and tech stacks.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <a className="flex items-center gap-4 p-4 rounded-xl border border-[#d0d7de] dark:border-[#30363d] hover:border-[#0969da]/50 hover:bg-[#0969da]/5 transition-all group" href="mailto:banshrajthapa@gmail.com">
            <div className="size-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-[#0969da] group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6e7781] font-medium uppercase tracking-wider">Email</p>
              <p className="text-slate-900 dark:text-slate-100 font-medium truncate">banshrajthapa@gmail.com</p>
            </div>
          </a>
          <a className="flex items-center gap-4 p-4 rounded-xl border border-[#d0d7de] dark:border-[#30363d] hover:border-[#0969da]/50 hover:bg-[#0969da]/5 transition-all group" href="https://www.linkedin.com/in/banshraj-thapa-0a070a2b6/">
            <div className="size-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-[#0969da] group-hover:text-white transition-colors">
              <LinkIcon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6e7781] font-medium uppercase tracking-wider">LinkedIn</p>
              <p className="text-slate-900 dark:text-slate-100 font-medium truncate">linkedin.com/in/banshraj-thapa</p>
            </div>
          </a>
          <a className="flex items-center gap-4 p-4 rounded-xl border border-[#d0d7de] dark:border-[#30363d] hover:border-[#0969da]/50 hover:bg-[#0969da]/5 transition-all group" href="#">
            <div className="size-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-[#0969da] group-hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6e7781] font-medium uppercase tracking-wider">Twitter</p>
              <p className="text-slate-900 dark:text-slate-100 font-medium truncate">@dev_portfolio</p>
            </div>
          </a>
          <a className="flex items-center gap-4 p-4 rounded-xl border border-[#d0d7de] dark:border-[#30363d] hover:border-[#0969da]/50 hover:bg-[#0969da]/5 transition-all group" href="#">
            <div className="size-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-[#0969da] group-hover:text-white transition-colors">
              <Code className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6e7781] font-medium uppercase tracking-wider">GitHub</p>
              <p className="text-slate-900 dark:text-slate-100 font-medium truncate">github.com/developer</p>
            </div>
          </a>
        </div>

        <h2 className="text-2xl font-bold border-b border-[#d0d7de] dark:border-[#30363d] pb-2 mb-6">Send a Message</h2>
        <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-6 border border-[#d0d7de] dark:border-[#30363d]">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Subject</label>
              <input className="w-full bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-slate-700 rounded-lg px-4 py-2 focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none transition-all text-slate-900 dark:text-slate-100" placeholder="Project Inquiry / Collaboration" type="text"/>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Message</label>
              <div className="rounded-lg border border-[#d0d7de] dark:border-slate-700 overflow-hidden bg-white dark:bg-[#0d1117]">
                <div className="flex items-center gap-4 px-4 py-2 bg-slate-50 dark:bg-slate-800 border-b border-[#d0d7de] dark:border-slate-700">
                  <button className="text-[#6e7781] hover:text-[#0969da]" type="button"><b>B</b></button>
                  <button className="text-[#6e7781] hover:text-[#0969da]" type="button"><i>I</i></button>
                  <button className="text-[#6e7781] hover:text-[#0969da]" type="button"><LinkIcon className="w-4 h-4" /></button>
                  <button className="text-[#6e7781] hover:text-[#0969da]" type="button"><Info className="w-4 h-4" /></button>
                </div>
                <textarea className="w-full border-none bg-transparent px-4 py-3 focus:ring-0 text-slate-900 dark:text-slate-100 resize-none" placeholder="Write your message here..." rows={6}></textarea>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-[#6e7781] flex items-center gap-1">
                <Info className="w-3 h-3" /> Markdown is supported
              </p>
              <button className="bg-[#0969da] hover:bg-[#0969da]/90 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2" type="button">
                <Send className="w-4 h-4" /> Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
