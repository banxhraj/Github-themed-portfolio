import React from 'react';
import { Terminal, Download, History } from 'lucide-react';

export default function ExperienceLogView() {
  const logs = [
    {
      commit: 'a1b2c3d4',
      date: '2026-02-11 09:42:12',
      title: 'Full Stack Developer Trainee @Techcoder software services pvt ltd ',
      points: [
        'Learned and implemented MERN stack technologies including MongoDB, Express.js, React.js, and Node.js.',
        'Collaborated with senior developers to implement new features and improve existing ones.',
        'Gained hands-on experience in version control systems and agile development methodologies.',
      ],
      color: 'text-blue-400',
    },
    {
      commit: 'f5g6h7i8',
      date: '2025-06-15 14:20:05',
      title: 'Full stack Developer Intern @Techcoder software services pvt ltd',
      points: [
        'Learned and implemented MERN stack technologies including MongoDB, Express.js, React.js, and Node.js.',
        'Collaborated with senior developers to implement new features and improve existing ones.',
        'Gained hands-on experience in version control systems and agile development methodologies.',
      ],
      color: 'text-slate-400',
    },
    {
      commit: 'k9l0m1n2',
      date: '2025-05-12 11:05:48',
      title: 'Frontend Developer Intern @Prodigy Infotech.',
      points: [
        'learned basic frontend development including HTML, CSS, and JavaScript.',
        'Learned Version Control System.',
      ],
      color: 'text-slate-400',
    },
    // {
    //   commit: 'z9y8x7w6',
    //   date: '2018-05-20 08:00:00',
    //   title: 'Engineering Intern @ BigDataCo',
    //   points: [
    //     'Initial commit: Started career path into systems engineering and cloud computing.',
    //   ],
    //   color: 'text-green-400',
    // },
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4 sm:gap-0">
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <span className="text-[#0969da] hover:underline cursor-pointer">portfolio</span>
          <span className="text-[#6e7781]">/</span>
          <span className="font-bold truncate">experience.log</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          <button className="flex items-center px-2 md:px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-[#d0d7de] dark:border-[#30363d] rounded text-[10px] md:text-xs font-semibold flex-shrink-0">
            <History className="w-3 h-3 mr-1" /> 8 commits
          </button>
          <button className="flex items-center px-2 md:px-3 py-1 bg-[#0969da] text-white rounded text-[10px] md:text-xs font-semibold flex-shrink-0">
            <Download className="w-3 h-3 mr-1" /> Clone
          </button>
        </div>
      </div>

      <div className="bg-[#0d1117] rounded-lg border border-[#30363d] overflow-hidden font-mono text-sm">
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-[#8b949e] text-xs">BASH — 80x24</div>
        </div>
        
        <div className="p-6 space-y-8">
          {logs.map((log, idx) => (
            <div key={log.commit} className="relative pl-8">
              {/* Timeline line */}
              {idx !== logs.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-[-32px] w-[2px] bg-[#30363d]"></div>
              )}
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#0d1117] border-2 flex items-center justify-center ${log.color.replace('text', 'border')}`}>
                <div className={`w-2 h-2 rounded-full ${log.color.replace('text', 'bg')}`}></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`font-bold ${log.color}`}>commit {log.commit}</span>
                  <span className="text-[#8b949e]">{log.date}</span>
                </div>
                <h3 className="text-white text-lg font-bold">{log.title}</h3>
                
                <div className="bg-[#161b22] p-4 rounded-md border border-[#30363d] mt-2">
                  <ul className="space-y-2 text-[#c9d1d9]">
                    {log.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2">
                        <span className="text-blue-400">+</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-4 text-[#8b949e]">
            <span className="text-blue-400">alex@dev-terminal</span>
            <span className="text-white mx-1">:</span>
            <span className="text-blue-400">~/portfolio</span>
            <span className="text-white mx-1">$</span>
            <span className="w-2 h-4 bg-slate-400 inline-block animate-pulse align-middle"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
