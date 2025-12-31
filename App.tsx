
import React, { useState } from 'react';
import { ViewMode } from './types';
import Sidebar from './components/Sidebar';
import ChatView from './components/ChatView';
import ImageView from './components/ImageView';
import DeploymentHelper from './components/DeploymentHelper';
import LiveView from './components/LiveView';
import GalleryView from './components/GalleryView';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewMode>(ViewMode.CHAT);

  const renderContent = () => {
    switch (activeView) {
      case ViewMode.CHAT:
        return <ChatView />;
      case ViewMode.IMAGE:
        return <ImageView />;
      case ViewMode.LIVE:
        return <LiveView />;
      case ViewMode.DEPLOY:
        return <DeploymentHelper />;
      case ViewMode.GALLERY:
        return <GalleryView />;
      default:
        return <ChatView />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      
      <main className="flex-1 relative flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 glass flex items-center justify-between px-6 border-b border-white/5 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/20 border border-yellow-300/30">
              <i className="fa-solid fa-mug-hot text-black text-sm"></i>
            </div>
            <h1 className="text-xl font-black tracking-tighter uppercase italic">
              Wojtek <span className="gradient-text">Germanek</span> Studio
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-yellow-500 uppercase">System Resetu Aktywny</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto relative">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
