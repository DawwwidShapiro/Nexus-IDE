
import React from 'react';
import { FileNode } from '../types';

interface EditorPanelProps {
  activeFile: FileNode | null;
  content: string;
  onContentChange: (fileId: string, content: string) => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ activeFile, content, onContentChange }) => {
  if (!activeFile) {
    return (
      <div className="flex-grow bg-primary flex items-center justify-center">
        <div className="text-center text-text-secondary">
          <h1 className="text-2xl font-bold mb-2">Nexus IDE</h1>
          <p>Select a file from the explorer to begin editing.</p>
        </div>
      </div>
    );
  }
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onContentChange(activeFile.id, e.target.value);
  }

  return (
    <div className="flex-grow bg-primary p-4 overflow-auto">
      <textarea
        key={activeFile.id}
        value={content}
        onChange={handleContentChange}
        className="w-full h-full bg-primary text-text-primary resize-none focus:outline-none font-mono text-sm leading-6"
        spellCheck="false"
      />
    </div>
  );
};

export default EditorPanel;
