
import React, { useState } from 'react';
import { FileNode, FileType } from '../types';
import Icon from './Icon';

interface FileExplorerProps {
  fileSystem: FileNode;
  onFileOpen: (file: FileNode) => void;
}

interface FileTreeItemProps {
  node: FileNode;
  onFileOpen: (file: FileNode) => void;
  depth: number;
}

const FileTreeItem: React.FC<FileTreeItemProps> = ({ node, onFileOpen, depth }) => {
  const [isOpen, setIsOpen] = useState(true);

  const isFolder = node.type === FileType.FOLDER;

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      onFileOpen(node);
    }
  };
  
  const iconName = isFolder ? 'folder' : 'file';
  const chevronIcon = isFolder ? (isOpen ? 'chevronDown' : 'chevronRight') : null;

  return (
    <div>
      <div
        onClick={handleToggle}
        className="flex items-center p-1 hover:bg-secondary cursor-pointer rounded"
        style={{ paddingLeft: `${depth * 1.25}rem` }}
      >
        {chevronIcon && <Icon name={chevronIcon} className="w-4 h-4 mr-1 text-text-secondary" />}
        {!chevronIcon && isFolder && <div className="w-4 mr-1"></div>}
        <Icon name={iconName} className={`w-4 h-4 mr-2 ${isFolder ? 'text-yellow-500' : 'text-blue-400'}`} />
        <span className="text-sm select-none">{node.name}</span>
      </div>
      {isFolder && isOpen && node.children && (
        <div>
          {node.children.map(child => (
            <FileTreeItem key={child.id} node={child} onFileOpen={onFileOpen} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};


const FileExplorer: React.FC<FileExplorerProps> = ({ fileSystem, onFileOpen }) => {
  return (
    <div className="w-64 bg-secondary p-2 flex-shrink-0 overflow-y-auto">
      <h2 className="text-xs uppercase text-text-secondary font-bold mb-2 px-1">Explorer</h2>
      <FileTreeItem node={fileSystem} onFileOpen={onFileOpen} depth={0} />
    </div>
  );
};

export default FileExplorer;
