
export enum FileType {
  FILE = 'file',
  FOLDER = 'folder',
}

export interface FileNode {
  id: string;
  name: string;
  type: FileType;
  children?: FileNode[];
  content?: string;
}
