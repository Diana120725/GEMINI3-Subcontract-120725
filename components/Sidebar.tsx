import React from 'react';
import { Settings, Globe, X, Menu, Flower } from 'lucide-react';
import { FlowerTheme, Language } from '../types';
import LuckyWheel from './LuckyWheel';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  currentTheme: FlowerTheme;
  themes: FlowerTheme[];
  setTheme: (theme: FlowerTheme) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  language,
  setLanguage,
  currentTheme,
  themes,
  setTheme
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 space-y-8">
          
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </h2>
            <button onClick={toggleSidebar} className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Language Toggle */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4" /> Language
            </h3>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${language === 'en' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('tc')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${language === 'tc' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                繁體中文
              </button>
            </div>
          </div>

          {/* Lucky Wheel */}
          <div className="space-y-3">
             <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Lucky Style</h3>
             <LuckyWheel themes={themes} currentTheme={currentTheme} onSelectTheme={setTheme} />
          </div>

          {/* Theme Grid */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Flower className="w-4 h-4" /> Flower Themes
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme)}
                  title={theme.name}
                  className={`
                    w-full aspect-square rounded-lg flex items-center justify-center text-xl hover:scale-110 transition-transform border-2
                    ${currentTheme.id === theme.id ? `border-slate-800 bg-slate-100` : 'border-transparent hover:bg-slate-50'}
                  `}
                >
                  {theme.icon}
                </button>
              ))}
            </div>
            <div className="text-center mt-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${currentTheme.colors.secondary} ${currentTheme.colors.text}`}>
                    Current: {currentTheme.name}
                </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
