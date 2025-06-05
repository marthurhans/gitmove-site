// src/components/AnimatedHoverAppend.tsx
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function AnimatedHoverAppend({ children }: Props) {
  const [hovered, setHovered] = useState(false);
  const [showGitMove, setShowGitMove] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setTimeout(() => setShowGitMove(true), 800);
  };

  const handleMouseLeave = () => {
    setShowGitMove(false);
    setTimeout(() => setHovered(false), 1200);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative whitespace-nowrap"
    >
      {children}
      {hovered && (
        <span className="ml-2 inline-block">
          <span
            className={`transition-opacity duration-700 ease-in-out ${showGitMove ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-gray-400">with</span>{' '}
            <span className="text-green-400 font-semibold">GitMove</span>
          </span>
        </span>
      )}
    </span>
  );
}
