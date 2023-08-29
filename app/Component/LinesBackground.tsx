// components/LinesBackground.tsx
import React from 'react';

const LinesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="h-full w-full">
        <div className="h-px border-t bg-gray-300"></div>
      </div>
      <div className="w-full h-full border-b absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default LinesBackground;
