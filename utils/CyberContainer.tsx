
import React from 'react';

interface CyberContainerProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const CyberContainer: React.FC<CyberContainerProps> = ({ children, title, className }) => {
  return (
    <div className={`relative border-2 border-[#39ff14] bg-black p-6 neon-glow ${className}`}>
      {title && (
        <div className="absolute -top-4 left-4 bg-black px-2 text-[#39ff14] font-bold text-sm tracking-tighter uppercase">
          [ {title} ]
        </div>
      )}
      {children}
    </div>
  );
};

export default CyberContainer;
