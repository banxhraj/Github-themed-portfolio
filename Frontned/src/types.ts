export type ViewType = 'overview' | 'readme' | 'contact' | 'experience' | 'skills' | 'explorer';

export interface FileEntry {
  name: string;
  type: 'file' | 'folder';
  description: string;
  lastUpdated: string;
  view: ViewType;
}

export const FILES: FileEntry[] = [
  { name: 'projects/', type: 'folder', description: 'feat: added case studies for top projects', lastUpdated: 'Last week', view: 'explorer' },
  { name: 'contact.md', type: 'file', description: 'docs: update contact information', lastUpdated: '3 hours ago', view: 'contact' },
  { name: 'experience.log', type: 'file', description: 'chore: update latest roles and skills', lastUpdated: 'Yesterday', view: 'experience' },
  { name: 'README.md', type: 'file', description: 'docs: improve readme clarity', lastUpdated: '2 days ago', view: 'readme' },
  { name: 'skills.json', type: 'file', description: 'refactor: update skill levels', lastUpdated: '5 days ago', view: 'skills' },
];
