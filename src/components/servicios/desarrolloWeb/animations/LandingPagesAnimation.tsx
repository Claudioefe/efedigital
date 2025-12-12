import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";

export const LandingPagesAnimation = () => {
  return (
    <motion.svg
      viewBox="0 0 800 250"
      className="w-full"
      style={{
        minHeight: "250px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Browser/Page Frame */}
      <motion.rect
        x="-10"
        y="15"
        width="750"
        height="220"
        rx="6"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="2"
        opacity="0.15"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0.18, 0.15] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />

      {/* Hero Section - Top */}
      <motion.rect
        x="10"
        y="30"
        width="720"
        height="45"
        rx="4"
        fill="var(--neon-red)"
        opacity="0.08"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0.12, 0.08] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />

      {/* Hero Title - Bold */}
      <motion.line
        x1="30"
        y1="45"
        x2="280"
        y2="45"
        stroke="var(--neon-red)"
        strokeWidth="4"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: 0.3,
          repeatDelay: 1,
          ease: "easeOut",
        }}
      />

      {/* Hero Subtitle */}
      <motion.line
        x1="30"
        y1="58"
        x2="220"
        y2="58"
        stroke="var(--neon-red)"
        strokeWidth="2"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.6,
          repeatDelay: 1,
        }}
      />

      {/* CTA Button - Primary - With Pulse */}
      <motion.rect
        x="580"
        y="38"
        width="130"
        height="32"
        rx="16"
        fill="var(--neon-red)"
        opacity="0.4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: [0.9, 1.08, 1, 1.08, 1],
          opacity: [0, 0.4, 0.5, 0.4, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1,
          repeatDelay: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />

      {/* CTA Glow effect */}
      <motion.rect
        x="585"
        y="43"
        width="120"
        height="22"
        rx="11"
        fill="var(--neon-red)"
        opacity="0.2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0.2, 0.3],
          scale: [0.95, 1.1, 1, 1.1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1.2,
          repeatDelay: 0.5,
        }}
      />

      {/* Arrow Icon in CTA */}
      <motion.foreignObject
        x="670"
        y="46"
        width="20"
        height="20"
        initial={{ opacity: 0, x: 670 }}
        animate={{
          opacity: [0.7, 1, 0.7],
          x: [670, 675, 670],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 1.5,
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <ArrowRight
            className="w-4 h-4"
            style={{ color: "var(--neon-red)" }}
          />
        </div>
      </motion.foreignObject>

      {/* Benefits/Features - 3 columns */}
      <motion.rect
        x="10"
        y="95"
        width="720"
        height="65"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="1.5"
        opacity="0.12"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.12, 0.15, 0.12] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 2,
          repeatDelay: 0.5,
        }}
      />

      {/* Feature items - Icons and text */}
      {[70, 290, 510].map((x, i) => (
        <g key={i}>
          {/* Feature icon circle */}
          <motion.circle
            cx={x}
            cy="120"
            r="12"
            fill="none"
            stroke="var(--neon-red)"
            strokeWidth="2"
            opacity="0.3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.1, 1],
              opacity: [0, 0.4, 0.3],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 2.5 + i * 0.3,
              repeatDelay: 1.5,
              ease: "easeOut",
            }}
          />
          {/* Checkmark in circle */}
          <motion.path
            d={`M ${x - 5} ${120} L ${x - 2} ${123} L ${x + 5} ${116}`}
            stroke="var(--neon-red)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 0.6, 0.5],
            }}
            transition={{
              duration: 0.5,
              delay: 2.8 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          {/* Feature text */}
          <motion.line
            x1={x + 20}
            y1="115"
            x2={x + 110}
            y2="115"
            stroke="var(--neon-red)"
            strokeWidth="2"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1] }}
            transition={{
              duration: 0.8,
              delay: 3 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
          <motion.line
            x1={x + 20}
            y1="125"
            x2={x + 90}
            y2="125"
            stroke="var(--neon-red)"
            strokeWidth="1.5"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1] }}
            transition={{
              duration: 0.6,
              delay: 3.2 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
        </g>
      ))}

      {/* Form Section - Conversion Point */}
      <motion.rect
        x="10"
        y="180"
        width="450"
        height="45"
        rx="4"
        fill="var(--neon-red)"
        opacity="0.1"
        stroke="var(--neon-red)"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0.15, 0.1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 4,
          repeatDelay: 0.5,
        }}
      />

      {/* Form fields animation */}
      {[
        { x: 25, y: 192, width: 180 },
        { x: 25, y: 205, width: 180 },
      ].map((field, i) => (
        <motion.rect
          key={i}
          x={field.x}
          y={field.y}
          width={field.width}
          height="8"
          rx="2"
          fill="var(--neon-red)"
          opacity="0.25"
          initial={{ width: 0 }}
          animate={{
            width: [0, field.width, field.width],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 4.5 + i * 0.3,
            repeatDelay: 1.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Submit Button in form */}
      <motion.rect
        x="220"
        y="188"
        width="110"
        height="28"
        rx="14"
        fill="var(--neon-red)"
        opacity="0.4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{
          scale: [0.9, 1.1, 1, 1.1],
          opacity: [0, 0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 5.5,
          repeatDelay: 1,
        }}
      />

      {/* Conversion Counter/Indicator - Right Side */}
      <motion.rect
        x="490"
        y="180"
        width="240"
        height="45"
        rx="4"
        fill="var(--neon-red)"
        opacity="0.12"
        stroke="var(--neon-red)"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: [0, 0.12, 0.18, 0.12],
          scale: [0.95, 1.02, 1, 1.02],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 6,
          repeatDelay: 1,
        }}
      />

      {/* Success/Conversion icon */}
      <motion.foreignObject
        x="590"
        y="190"
        width="40"
        height="40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1],
          scale: [0, 1.3, 1],
          rotate: [0, 360, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 6.5,
          repeatDelay: 1.5,
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <TrendingUp
            className="w-7 h-7"
            style={{ color: "var(--neon-red)" }}
          />
        </div>
      </motion.foreignObject>

      {/* Conversion percentage */}
      <motion.text
        x="640"
        y="207"
        fill="var(--neon-red)"
        fontSize="16"
        fontWeight="bold"
        opacity="0.7"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0.8, 0.7] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 6.8,
          repeatDelay: 1.5,
        }}
      >
        +35%
      </motion.text>

      {/* Sparkle effect on conversion */}
      {[0, 1, 2].map((i) => (
        <motion.foreignObject
          key={`sparkle-${i}`}
          x={680 + i * 15}
          y={185 + i * 8}
          width="16"
          height="16"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            delay: 7 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <Sparkles
              className="w-3 h-3"
              style={{ color: "var(--neon-red)" }}
            />
          </div>
        </motion.foreignObject>
      ))}
    </motion.svg>
  );
};
