
import React from 'react';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
}

const CyberButton: React.FC<CyberButtonProps> = ({ label, loading, className, ...props }) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        relative px-6 py-2 bg-black border-2 border-[#39ff14] text-[#39ff14] 
        hover:bg-[#39ff14] hover:text-black transition-all duration-300 
        uppercase tracking-widest font-bold neon-glow active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          PROCESSING...
        </span>
      ) : label}
    </button>
  );
};

export default CyberButton;
