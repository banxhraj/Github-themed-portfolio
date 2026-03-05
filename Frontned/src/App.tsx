import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FileExplorer from './components/FileExplorer';
import READMEView from './components/READMEView';
import ContactView from './components/ContactView';
import ExperienceLogView from './components/ExperienceLogView';
import SkillsJsonView from './components/SkillsJsonView';
import { ViewType } from './types';
import { Download, ChevronDown, Moon, Sun } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('readme');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'readme':
        return <READMEView />;
      case 'contact':
        return <ContactView />;
      case 'experience':
        return <ExperienceLogView />;
      case 'skills':
        return <SkillsJsonView />;
      case 'explorer':
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-[#0d1117] text-slate-900 dark:text-slate-100 transition-colors duration-200`}>
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">
        <Sidebar />
        
        <div className="w-full md:w-3/4">
          {/* Breadcrumbs and Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setCurrentView('readme')}
                className="flex items-center px-3 py-1 bg-[#f6f8fa] dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] rounded text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <ChevronDown className="w-4 h-4 mr-1" /> main
              </button>
              <nav className="flex items-center text-sm font-medium">
                <button 
                  onClick={() => setCurrentView('readme')}
                  className="text-[#0969da] hover:underline ml-2"
                >
                  portfolio
                </button>
                <span className="mx-1">/</span>
              </nav>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-[#f6f8fa] dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] rounded text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">Go to file</button>
              <button className="px-3 py-1 bg-[#f6f8fa] dark:bg-[#161b22] border border-[#d0d7de] dark:border-[#30363d] rounded text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">Add file</button>
              <button className="flex items-center px-3 py-1 bg-[#2da44e] hover:bg-[#2c974b] text-white text-sm font-semibold rounded">
                <Download className="w-4 h-4 mr-1" /> Code
              </button>
            </div>
          </div>

          {/* File Explorer (always visible at top of main content) */}
          <FileExplorer onViewChange={setCurrentView} />

          {/* Dynamic Content */}
          {renderContent()}
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 md:px-8 py-10 mt-10 border-t border-[#d0d7de] dark:border-[#30363d]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <svg className="fill-current text-[#6e7781] dark:text-[#8b949e]" height="24" version="1.1" viewBox="0 0 16 16" width="24">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <p className="text-xs text-[#6e7781] dark:text-[#8b949e]">© 2024 Banshraj Thapa Portfolio. Inspired by GitHub.</p>
          </div>
          <div className="flex items-center space-x-6">
            {['Terms', 'Privacy', 'Security', 'Status', 'Docs', 'Contact'].map(item => (
              <a key={item} className="text-xs text-[#0969da] hover:underline" href="#">{item}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Dark Mode Toggle */}
      <button 
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 p-3 bg-white dark:bg-slate-800 border border-[#d0d7de] dark:border-[#30363d] rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
}
