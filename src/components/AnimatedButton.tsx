import { motion } from "motion/react";
import { useState } from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  gradientId?: string;
  gradientColors?: {
    start: string;
    middle: string;
    end: string;
  };
  ariaLabel?: string;
}

export function AnimatedButton({
  children,
  onClick,
  className = "",
  gradientId = "btn-gradient",
  gradientColors = {
    start: "var(--neon-green)",
    middle: "var(--neon-blue)",
    end: "var(--neon-pink)",
  },
  ariaLabel,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={`relative px-8 py-4 rounded-lg ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ borderRadius: "0.5rem" }}
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx="6"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2"
          style={{
            opacity: isHovered ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        />
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx="6"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          style={{
            opacity: isHovered ? 1 : 0,
            animation: isHovered
              ? "draw-border 1s ease-in-out forwards"
              : "none",
          }}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientColors.start} />
            <stop offset="50%" stopColor={gradientColors.middle} />
            <stop offset="100%" stopColor={gradientColors.end} />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative z-10 text-white flex items-center gap-3">
        {children}
      </div>
    </motion.button>
  );
}
