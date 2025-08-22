
import React from 'react';
import Icon from './Icon';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'explorer', icon: 'explorer' },
    { id: 'search', icon: 'search' },
    { id: 'debug', icon: 'debug' },
    { id: 'extensions', icon: 'extensions' },
  ];

  return (
    <div className="w-12 bg-tertiary flex flex-col items-center py-4 space-y-4">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => setActiveView(item.id)}
          className={`p-2 rounded-md transition-colors duration-200 ${
            activeView === item.id ? 'text-white bg-accent' : 'text-text-secondary hover:bg-secondary'
          }`}
          title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
        >
          <Icon name={item.icon} className="w-6 h-6" />
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
