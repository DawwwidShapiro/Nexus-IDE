
import React from 'react';
import { FileNode } from '../types';
import Icon from './Icon';

interface EditorTabsProps {
  openFiles: FileNode[];
  activeFile: FileNode | null;
  onTabClick: (file: FileNode) => void;
  onCloseTab: (fileId: string) => void;
}

const EditorTabs: React.FC<EditorTabsProps> = ({ openFiles, activeFile, onTabClick, onCloseTab }) => {
  return (
    <div className="flex bg-tertiary flex-shrink-0">
      {openFiles.map(file => (
        <div
          key={file.id}
          className={`flex items-center justify-between p-2 text-sm cursor-pointer border-r border-b border-primary ${
            activeFile?.id === file.id ? 'bg-primary border-t-2 border-t-accent' : 'bg-secondary border-t-2 border-t-transparent'
          }`}
          onClick={() => onTabClick(file)}
        >
          <span className="mr-4 select-none">{file.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCloseTab(file.id);
            }}
            className="p-0.5 rounded-sm hover:bg-tertiary"
          >
            <Icon name="close" className="w-3 h-3 text-text-secondary" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default EditorTabs;
