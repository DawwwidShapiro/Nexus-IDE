
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { streamGemini } from '../services/geminiService';
import Icon from './Icon';

interface AIAssistantProps {
  onInsertCode: (code: string) => void;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const CodeBlock: React.FC<{ code: string; onInsertCode: (code: string) => void; }> = ({ code, onInsertCode }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-primary rounded-lg my-2 relative group">
            <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={() => onInsertCode(code)}
                    className="p-1.5 bg-tertiary rounded-md hover:bg-accent text-text-secondary hover:text-white"
                    title="Insert into active file"
                >
                   <Icon name="insert" className="w-4 h-4" />
                </button>
                <button
                    onClick={handleCopy}
                    className="p-1.5 bg-tertiary rounded-md hover:bg-accent text-text-secondary hover:text-white"
                    title="Copy to clipboard"
                >
                   {copied ? <span className="text-xs">Copied!</span> : <Icon name="clipboard" className="w-4 h-4" />}
                </button>
            </div>
            <pre className="p-4 overflow-x-auto text-sm text-text-primary font-mono whitespace-pre-wrap break-words">
                <code>{code}</code>
            </pre>
        </div>
    );
};


const AIAssistant: React.FC<AIAssistantProps> = ({ onInsertCode }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Hello! How can I help you with your C++, Unreal, or Python project today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (isLoading || !input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage, { sender: 'ai', text: '' }]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = streamGemini(input);
      for await (const chunk of stream) {
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.sender === 'ai') {
            const updatedMessages = [...prev.slice(0, -1)];
            updatedMessages.push({ ...lastMessage, text: lastMessage.text + chunk });
            return updatedMessages;
          }
          return prev;
        });
      }
    } catch (error) {
      console.error('Error streaming from Gemini:', error);
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage.sender === 'ai' && lastMessage.text === '') {
            const updatedMessages = [...prev.slice(0, -1)];
            updatedMessages.push({ sender: 'ai', text: 'Sorry, I encountered an error. Please check your API key and try again.' });
            return updatedMessages;
        }
        return prev;
      });
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const renderMessageContent = (text: string) => {
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const parts = text.split(codeBlockRegex);

    return parts.map((part, index) => {
        if (index % 2 === 1) { // It's a code block
            const codeContent = part.split('\n').slice(1).join('\n'); // remove language hint
            return <CodeBlock key={index} code={codeContent} onInsertCode={onInsertCode}/>;
        } else {
            return <p key={index} className="whitespace-pre-wrap">{part}</p>;
        }
    });
  };

  return (
    <div className="w-1/3 min-w-[300px] flex flex-col bg-secondary border-l border-tertiary">
      <div className="flex items-center p-3 border-b border-tertiary flex-shrink-0">
        <Icon name="sparkles" className="w-5 h-5 text-accent mr-2" />
        <h2 className="text-md font-semibold">AI Assistant</h2>
      </div>
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg max-w-xs md:max-w-md ${msg.sender === 'user' ? 'bg-accent text-white' : 'bg-tertiary text-text-primary'}`}>
              {renderMessageContent(msg.text)}
               {isLoading && msg.sender === 'ai' && index === messages.length - 1 && (
                  <div className="flex items-center justify-center pt-2">
                    <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse mx-1"></div>
                    <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse mx-1 delay-150"></div>
                    <div className="w-2 h-2 bg-text-secondary rounded-full animate-pulse mx-1 delay-300"></div>
                  </div>
                )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-3 border-t border-tertiary flex-shrink-0">
        <div className="flex items-center bg-tertiary rounded-lg p-1">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask me anything..."
            className="flex-grow bg-transparent p-2 resize-none focus:outline-none text-sm h-10 max-h-24"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-2 rounded-md disabled:text-text-secondary disabled:cursor-not-allowed text-accent hover:bg-primary"
          >
            <Icon name="send" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
