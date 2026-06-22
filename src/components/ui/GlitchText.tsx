import { useEffect, useState, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const GlitchText = ({ text, className = "", delay = 500 }: GlitchTextProps) => {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  // Initialize with random characters of the same length
  const [displayText, setDisplayText] = useState(() => 
    text.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join("")
  );

  const startAnimation = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, chars]);

  useEffect(() => {
    const timeout = setTimeout(startAnimation, delay);
    return () => clearTimeout(timeout);
  }, [startAnimation, delay]);

  return (
    <h1 className={className} data-value={text}>
      {displayText}
    </h1>
  );
};

export default GlitchText;

