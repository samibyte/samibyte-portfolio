"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface CounterProps {
  value: string;
  suffix?: string;
  delay?: number;
}

const Counter = ({ value, suffix = "", delay = 1000 }: CounterProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseInt(value) || 0;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value === "∞") {
        setDisplayValue("∞");
        return;
      }

      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate: (latest) => 
          setDisplayValue(
            Math.floor(latest).toString() + (value.includes("+") ? "+" : "")
          ),
      });
      return () => controls.stop();
    }, delay);
    return () => clearTimeout(timeout);
  }, [numericValue, value, delay]);

  return <span>{displayValue}{suffix}</span>;
};

export default Counter;
