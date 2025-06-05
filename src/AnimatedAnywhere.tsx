import { useState } from 'react';

function AnimatedAnywhere() {
  const [hovered, setHovered] = useState(false);
  const [showWith, setShowWith] = useState(false);
  const [showGitMove, setShowGitMove] = useState(false);

  const handleMouseEnter = () => {
    if (hovered) return;
    setHovered(true);
    setTimeout(() => setShowWith(true), 300);         // fade in "with"
    setTimeout(() => setShowGitMove(true), 1000);     // fade in "GitMove"
    setTimeout(() => setShowWith(false), 1800);       // fade out "with"
    setTimeout(() => setShowGitMove(false), 2800);    // fade out "GitMove"
    setTimeout(() => setHovered(false), 3000);        // allow re-hover
  };

  return (
    <span onMouseEnter={handleMouseEnter} className="relative">
      <span className="bg-gray-800 px-1 rounded">.git</span>{' '}
      <span>anywhere</span>
      <span className="ml-1 text-gray-400 transition-opacity duration-500 ease-in-out">
        <span
          className={`transition-opacity duration-700 ${
            showWith ? 'opacity-100' : 'opacity-0'
          }`}
        >
          with{' '}
        </span>
        <span
          className={`transition-opacity duration-700 ${
            showGitMove ? 'opacity-100' : 'opacity-0'
          }`}
        >
          GitMove
        </span>
      </span>
    </span>
  );
}

export default AnimatedAnywhere;
