
import React, { useState, useCallback } from 'react';
import { FileNode } from './types';
import { mockFileSystem } from './constants';
import Sidebar from './components/Sidebar';
import FileExplorer from './components/FileExplorer';
import EditorTabs from './components/EditorTabs';
import EditorPanel from './components/EditorPanel';
import AIAssistant from './components/AIAssistant';
import Terminal from './components/Terminal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('explorer');
  const [openFiles, setOpenFiles] = useState<FileNode[]>([]);
  const [activeFile, setActiveFile] = useState<FileNode | null>(null);
  const [fileContents, setFileContents] = useState<Record<string, string>>({});

  const handleFileOpen = useCallback((file: FileNode) => {
    if (!openFiles.find(f => f.id === file.id)) {
      setOpenFiles(prev => [...prev, file]);
      setFileContents(prev => ({...prev, [file.id]: file.content || ''}));
    }
    setActiveFile(file);
  }, [openFiles]);

  const handleFileClose = useCallback((fileId: string) => {
    setOpenFiles(prev => prev.filter(f => f.id !== fileId));
    if (activeFile?.id === fileId) {
      const remainingFiles = openFiles.filter(f => f.id !== fileId);
      setActiveFile(remainingFiles.length > 0 ? remainingFiles[remainingFiles.length - 1] : null);
    }
  }, [activeFile, openFiles]);

  const handleTabClick = useCallback((file: FileNode) => {
    setActiveFile(file);
  }, []);

  const handleContentChange = useCallback((fileId: string, content: string) => {
    setFileContents(prev => ({ ...prev, [fileId]: content }));
  }, []);
  
  const handleCodeInsertion = (code: string) => {
    if (activeFile) {
      setFileContents(prev => ({
        ...prev,
        [activeFile.id]: prev[activeFile.id] + '\n' + code,
      }));
    } else {
      alert("Please open a file to insert code into.");
    }
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen w-screen bg-primary text-text-primary font-sans">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />

        {activeView === 'explorer' && <FileExplorer fileSystem={mockFileSystem} onFileOpen={handleFileOpen} />}

        <div className="flex flex-col flex-grow">
          <EditorTabs 
            openFiles={openFiles} 
            activeFile={activeFile} 
            onTabClick={handleTabClick} 
            onCloseTab={handleFileClose} 
          />
          <div className="flex flex-grow overflow-hidden">
            <div className="flex flex-col flex-grow w-2/3">
              <EditorPanel 
                activeFile={activeFile} 
                content={activeFile ? fileContents[activeFile.id] : ''}
                onContentChange={handleContentChange}
              />
              <Terminal />
            </div>
            <AIAssistant onInsertCode={handleCodeInsertion} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
