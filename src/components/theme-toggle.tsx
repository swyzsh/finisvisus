"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode = resolvedTheme === "dark";

  const handleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <motion.div className="flex flex-row items-center justify-center">
      <button
        className="cursor-pointer border-none bg-transparent focus:outline-none"
        type="button"
        title="Toggle theme"
        aria-label="Toggle theme"
        onClick={handleTheme}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={`h-6 w-6 text-current max-md:h-5 max-md:w-5 ${isDarkMode ? "scale-x-100" : "scale-x-100"}`}
          style={{
            transitionProperty: "transform",
            transitionDuration: "0.25s",
            transitionTimingFunction: "cubic-bezier(0, 0, 0, 1.25)",
          }}
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <clipPath id="theme-toggle-clip">
            <path d="M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16" />
          </clipPath>
          <g clipPath="url(#theme-toggle-clip)">
            <path
              d="M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z"
              style={{
                transformOrigin: "center",
                transform: isDarkMode ? "scale(0.65)" : "scale(1)",
                transitionProperty: "transform",
                transitionDuration: "0.25s",
                transitionTimingFunction: "cubic-bezier(0, 0, 0, 1.25)",
              }}
            />
          </g>
          <path
            className="theme-toggle__within__circle"
            d="M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z"
            style={{
              transformOrigin: "center",
              transform: isDarkMode ? "scale(1.5)" : "scale(1)",
              transitionProperty: "transform",
              transitionDuration: "0.25s",
              transitionTimingFunction: "cubic-bezier(0, 0, 0, 1.25)",
            }}
          />
          <path
            className="theme-toggle__within__inner"
            d="M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z"
            style={{
              transformOrigin: "center",
              transform: isDarkMode
                ? "translate3d(3px, -3px, 0) scale(1.2)"
                : "translate3d(0, 0, 0) scale(1)",
              transitionProperty: "transform",
              transitionDuration: "0.25s",
              transitionTimingFunction: "cubic-bezier(0, 0, 0, 1.25)",
            }}
          />
        </svg>
      </button>
    </motion.div>
  );
}
