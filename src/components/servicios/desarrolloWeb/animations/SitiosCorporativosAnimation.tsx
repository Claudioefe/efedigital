import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const SitiosCorporativosAnimation = () => {
  return (
    <motion.svg
      viewBox="0 0 900 250"
      className="w-full"
      style={{
        minHeight: "250px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Browser Frame */}
      <motion.rect
        x="50"
        y="20"
        width="800"
        height="200"
        rx="8"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="2"
        opacity="0.2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      {/* Browser Header Bar */}
      <motion.rect
        x="50"
        y="20"
        width="800"
        height="30"
        rx="8"
        fill="var(--neon-red)"
        opacity="0.08"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.3,
          repeatDelay: 1.5,
        }}
      />

      {/* Browser dots */}
      {[70, 90, 110].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy="35"
          r="4"
          fill="var(--neon-red)"
          opacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1] }}
          transition={{
            duration: 0.3,
            delay: 0.5 + i * 0.1,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}

      {/* Hero Section with animated header */}
      <motion.rect
        x="70"
        y="70"
        width="760"
        height="50"
        rx="4"
        fill="var(--neon-red)"
        opacity="0.1"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: [0, 0.1, 0.15, 0.1],
          scaleX: [0, 1, 1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.8,
          repeatDelay: 1.5,
          ease: "easeOut",
        }}
      />

      {/* Animated Globe Icon */}
      <motion.foreignObject
        x="420"
        y="82"
        width="60"
        height="60"
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: [0, 1, 1, 1],
          scale: [0, 1.2, 1, 1],
          rotate: [0, 0, 360, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.2,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Globe className="w-8 h-8" style={{ color: "var(--neon-red)" }} />
        </div>
      </motion.foreignObject>

      {/* Content Section - Cards */}
      <motion.rect
        x="70"
        y="140"
        width="240"
        height="60"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="1.5"
        opacity="0.15"
        initial={{ opacity: 0, y: 150 }}
        animate={{
          opacity: [0, 0.15, 0.2, 0.15],
          y: [150, 140, 140, 140],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 2,
          repeatDelay: 2,
          ease: "easeOut",
        }}
      />

      <motion.rect
        x="330"
        y="140"
        width="240"
        height="60"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="1.5"
        opacity="0.15"
        initial={{ opacity: 0, y: 150 }}
        animate={{
          opacity: [0, 0.15, 0.2, 0.15],
          y: [150, 140, 140, 140],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 2.2,
          repeatDelay: 2,
          ease: "easeOut",
        }}
      />

      <motion.rect
        x="590"
        y="140"
        width="240"
        height="60"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="1.5"
        opacity="0.15"
        initial={{ opacity: 0, y: 150 }}
        animate={{
          opacity: [0, 0.15, 0.2, 0.15],
          y: [150, 140, 140, 140],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 2.4,
          repeatDelay: 2,
          ease: "easeOut",
        }}
      />

      {/* Card content lines */}
      {[
        { x: 90, width: 200 },
        { x: 350, width: 200 },
        { x: 610, width: 200 },
      ].map((card, cardIndex) => (
        <g key={cardIndex}>
          {[155, 170, 185].map((y, lineIndex) => (
            <motion.line
              key={lineIndex}
              x1={card.x}
              y1={y}
              x2={card.x + card.width}
              y2={y}
              stroke="var(--neon-red)"
              strokeWidth="1.5"
              opacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: 2.6 + cardIndex * 0.2 + lineIndex * 0.15,
                repeatDelay: 2,
                ease: "easeOut",
              }}
            />
          ))}
        </g>
      ))}

      {/* Data flow particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={`particle-${i}`}
          cx="100"
          cy="100"
          r="3"
          fill="var(--neon-red)"
          opacity="0.6"
          initial={{ cx: 100 + i * 150, cy: 100, opacity: 0 }}
          animate={{
            cx: [100 + i * 150, 150 + i * 150, 200 + i * 150],
            cy: [100, 95, 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 3.5 + i * 0.3,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
};
