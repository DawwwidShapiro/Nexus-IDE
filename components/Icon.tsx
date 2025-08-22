
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const icons: Record<string, React.ReactNode> = {
  explorer: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  debug: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.73-.664 1.193-.816M11.42 15.17l-2.896-.011c-1.04.004-1.944.42-2.684 1.155l-2.496 3.032m0 0a2.652 2.652 0 01-3.75 0 2.652 2.652 0 010-3.75l5.877-5.877m0 0a2.652 2.652 0 000-3.75 2.652 2.652 0 00-3.75 0L3 17.25m8.42-12.08l2.496 3.03c.317.384.73.664 1.193.816M11.42 3.09l-2.896.011c-1.04-.004-1.944-.42-2.684-1.155l-2.496-3.032m0 0a2.652 2.652 0 013.75 0 2.652 2.652 0 010 3.75L9 8.829m8.42-5.738l-2.496 3.03c-.317.384-.73.664-1.193.816" />
    </svg>
  ),
  extensions: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  close: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  send: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  ),
  folder: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3.5 3A1.5 1.5 0 002 4.5v1.756c0 .414.336.75.75.75h14.5a.75.75 0 00.75-.75V4.5A1.5 1.5 0 0016.5 3h-6.838a1.5 1.5 0 01-1.06-.44L8.162 2.12A1.5 1.5 0 007.102 1.68H3.5z" />
      <path d="M2 9.5A1.5 1.5 0 003.5 11h13a1.5 1.5 0 001.5-1.5V7.879a.75.75 0 00-.75-.75H2.75a.75.75 0 00-.75.75v1.621z" />
      <path d="M2 12.879a.75.75 0 00.75.75h14.5a.75.75 0 00.75-.75v-1.621a.75.75 0 00-.75-.75H2.75a.75.75 0 00-.75.75v1.621z" />
    </svg>
  ),
  file: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8.414a1 1 0 00-.293-.707l-4-4A1 1 0 0012.414 3H4zm4 6a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  ),
  chevronRight: (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  ),
  chevronDown: (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  ),
  sparkles: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.868 2.884c.321.64.321 1.393 0 2.034l-1.616 3.232a1.5 1.5 0 00-.868 1.458V15.5a1.5 1.5 0 001.5 1.5h1.232a1.5 1.5 0 001.458-.868l1.616-3.232c.321-.64.321-1.393 0-2.034L13.132 8.132a1.5 1.5 0 00-1.458-.868H10.5a1.5 1.5 0 00-1.5 1.5v1.232a1.5 1.5 0 00.868 1.458l3.232 1.616c.64.321 1.393.321 2.034 0l3.232-1.616a1.5 1.5 0 00.868-1.458V10.5a1.5 1.5 0 00-1.5-1.5h-1.232a1.5 1.5 0 00-1.458.868L15.868 11.132c-.321.64-.321 1.393 0 2.034l1.616 3.232a1.5 1.5 0 001.458.868h.232a1.5 1.5 0 001.5-1.5v-1.232a1.5 1.5 0 00-.868-1.458l-3.232-1.616c-.64-.321-1.393-.321-2.034 0l-3.232 1.616a1.5 1.5 0 00-.868 1.458V15.5a1.5 1.5 0 001.5 1.5h.232a1.5 1.5 0 001.458-.868l1.616-3.232c.321-.64.321-1.393 0-2.034l-1.616-3.232a1.5 1.5 0 00-1.458-.868H10.5a1.5 1.5 0 00-1.5 1.5v.232a1.5 1.5 0 00.868 1.458l1.616 3.232z" clipRule="evenodd" />
    </svg>
  ),
  clipboard: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25V5.25c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
  ),
  insert: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
};

const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  return <div className={className}>{icons[name]}</div>;
};

export default Icon;
