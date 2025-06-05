import { useState, useEffect } from "react";

function AnimatedGit() {
  const [phase, setPhase] = useState<"idle" | "with" | "gitmove" | "hold" | "fadeout">("idle");
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (phase === "with") {
      setTimeout(() => setPhase("gitmove"), 800);     // Fade in GitMove
      setTimeout(() => setPhase("hold"), 2000);       // Keep full sentence
      setTimeout(() => setPhase("fadeout"), 3500);    // Begin fade out
      setTimeout(() => {
        setPhase("idle");
        setLocked(false);
      }, 5000); // Reset
    }
  }, [phase]);

  const handleHover = () => {
    if (!locked) {
      setLocked(true);
      setPhase("with");
    }
  };

  return (
    <span onMouseEnter={handleHover} className="inline-flex items-center gap-2">
      <code className="bg-gray-800 px-1 rounded text-white">.git</code>
      <span className="relative w-[200px] h-[24px]">
        {/* "with" fades in then fades out */}
        <span
          className={`absolute left-0 top-0 transition-opacity duration-700 text-gray-400 ${
            phase === "with" || phase === "gitmove" || phase === "hold" ? "opacity-100" : "opacity-0"
          } ${phase === "fadeout" ? "opacity-0 transition-opacity duration-700" : ""}`}
        >
          with
        </span>

        {/* "GitMove" fades in slightly after "with" */}
        <span
          className={`absolute left-[45px] top-0 font-mono transition-opacity duration-700 text-green-400 ${
            phase === "gitmove" || phase === "hold" ? "opacity-100" : "opacity-0"
          } ${phase === "fadeout" ? "opacity-0 transition-opacity duration-700 delay-300" : ""}`}
        >
          GitMove
        </span>
      </span>
    </span>
  );
}

export default AnimatedGit;
