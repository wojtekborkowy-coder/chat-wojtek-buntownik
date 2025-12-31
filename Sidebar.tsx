
import React from 'react';
import { ViewMode } from '../types';

interface SidebarProps {
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: ViewMode.CHAT, icon: 'fa-face-laugh-wink', label: 'Wojtek Germanek' },
    { id: ViewMode.GALLERY, icon: 'fa-star', label: 'Galeria Legendy' },
    { id: ViewMode.IMAGE, icon: 'fa-palette', label: 'Wojtek Maluje' },
    { id: ViewMode.LIVE, icon: 'fa-headset', label: 'Pogadaj z Wojtkiem' },
    { id: ViewMode.DEPLOY, icon: 'fa-gears', label: 'Konfiguracja' },
  ];

  return (
    <aside className="w-64 glass border-r border-white/5 flex flex-col h-full shrink-0 z-20">
      <div className="p-6 flex-1">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-5 text-center`}></i>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6 border-t border-white/5">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-white/5">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Status Resetu</p>
          <div className="flex items-center gap-2 text-sm font-medium text-yellow-500">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
            Wojtek gotowy na kawę
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
