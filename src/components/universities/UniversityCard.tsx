import React from 'react';

interface UniversityCardProps {
  id?: string;
  name: string;
  shortName?: string;
  state?: string;
  type?: string;
  className?: string;
}

export function UniversityLogoBadge({ name, state, type }: UniversityCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-2 w-full h-full">
      <span className="text-[#101F49] font-bold text-xs sm:text-sm leading-snug">
        {name}
      </span>
      {state && (
        <span className="text-gray-500 text-[11px] mt-1 font-medium">
          {state}
        </span>
      )}
      <span className="inline-block mt-1.5 text-[10px] font-semibold text-[#A20D65] bg-[#FFF0F7] px-2 py-0.5 rounded border border-[#A20D65]/20">
        {type || 'UGC Recognised'}
      </span>
    </div>
  );
}
