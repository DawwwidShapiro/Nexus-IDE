
import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="h-48 bg-secondary flex-shrink-0 border-t border-tertiary">
      <div className="flex items-center bg-tertiary px-4 py-1 text-sm">
        <button className="px-2 py-0.5 border-b-2 border-accent">TERMINAL</button>
        <button className="px-2 py-0.5 text-text-secondary">DEBUG CONSOLE</button>
        <button className="px-2 py-0.5 text-text-secondary">OUTPUT</button>
      </div>
      <div className="p-4 font-mono text-sm h-full overflow-y-auto">
        <p className="text-green-400">nexus-ide > Welcome to the terminal!</p>
        <p>nexus-ide > Ready for commands...</p>
      </div>
    </div>
  );
};

export default Terminal;
