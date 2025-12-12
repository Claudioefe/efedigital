import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle, Sparkles } from "lucide-react";

export const RedisenoWebAnimation = () => {
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
      {/* OLD SITE - Left Side - More Outdated Feel */}
      <motion.rect
        x="0"
        y="20"
        width="320"
        height="200"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="2"
        strokeDasharray="8,4"
        opacity="0.12"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.12, 0.15, 0.12] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />

      {/* "OLD" label */}
      <motion.text
        x="150"
        y="15"
        fill="var(--neon-red)"
        fontSize="10"
        opacity="0.4"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.4] }}
        transition={{
          duration: 1,
          delay: 0.3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        ANTES
      </motion.text>

      {/* Old messy header */}
      <motion.rect
        x="10"
        y="30"
        width="300"
        height="22"
        rx="1"
        fill="var(--neon-red)"
        opacity="0.08"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0.08] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.5,
          repeatDelay: 1,
        }}
      />

      {/* Old nav - poor spacing */}
      {[20, 65, 105].map((x, i) => (
        <motion.line
          key={`old-nav-${i}`}
          x1={x}
          y1="40"
          x2={x + 30}
          y2="40"
          stroke="var(--neon-red)"
          strokeWidth="1.5"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: 1 + i * 0.15,
            repeatDelay: 1,
          }}
        />
      ))}

      {/* Old messy content blocks */}
      <motion.rect
        x="10"
        y="65"
        width="145"
        height="85"
        rx="2"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="1.5"
        opacity="0.12"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.12, 0.12] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 1.5,
          repeatDelay: 1,
        }}
      />
      <motion.rect
        x="165"
        y="65"
        width="145"
        height="85"
        rx="2"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="1.5"
        opacity="0.12"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.12, 0.12] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 1.7,
          repeatDelay: 1,
        }}
      />

      {/* Messy text lines */}
      {[75, 88, 101, 114, 127, 140].map((y, i) => (
        <motion.line
          key={`old-text-${i}`}
          x1="20"
          y1={y}
          x2={20 + Math.random() * 100 + 50}
          y2={y}
          stroke="var(--neon-red)"
          strokeWidth="1"
          opacity="0.08"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: 2 + i * 0.1,
            repeatDelay: 1,
          }}
        />
      ))}

      {/* Old basic footer */}
      <motion.rect
        x="10"
        y="165"
        width="300"
        height="12"
        rx="1"
        fill="var(--neon-red)"
        opacity="0.08"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0.08] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 2.5,
          repeatDelay: 1,
        }}
      />

      {/* TRANSFORMATION - Enhanced with multiple elements */}
      <g>
        {/* Transformation arrow */}
        <motion.foreignObject
          x="345"
          y="95"
          width="60"
          height="60"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.1, 0.8],
            x: [345, 352, 345],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full gap-1">
            <Zap className="w-5 h-5" style={{ color: "var(--neon-red)" }} />
            <ArrowRight
              className="w-7 h-7"
              style={{ color: "var(--neon-red)" }}
            />
          </div>
        </motion.foreignObject>

        {/* Sparkles around transformation */}
        {[
          { x: 340, y: 80, delay: 0 },
          { x: 365, y: 75, delay: 0.3 },
          { x: 390, y: 85, delay: 0.6 },
        ].map((pos, i) => (
          <motion.foreignObject
            key={`sparkle-trans-${i}`}
            x={pos.x}
            y={pos.y}
            width="16"
            height="16"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.3, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              delay: pos.delay,
              repeat: Infinity,
              repeatDelay: 1,
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
      </g>

      {/* NEW SITE - Right Side - Modern & Clean */}
      <motion.rect
        x="450"
        y="20"
        width="320"
        height="200"
        rx="6"
        fill="var(--neon-red)"
        opacity="0.08"
        stroke="var(--neon-red)"
        strokeWidth="2.5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: [0, 0.08, 0.14, 0.08],
          scale: [0.95, 1.02, 1, 1.02],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 3,
          repeatDelay: 0.5,
        }}
      />

      {/* "NEW" label */}
      <motion.text
        x="605"
        y="15"
        fill="var(--neon-red)"
        fontSize="10"
        opacity="0.6"
        fontWeight="bold"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0.6] }}
        transition={{
          duration: 1,
          delay: 3.3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        DESPUÉS
      </motion.text>

      {/* Modern clean header */}
      <motion.rect
        x="460"
        y="30"
        width="300"
        height="28"
        rx="4"
        fill="var(--neon-red)"
        opacity="0.15"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0.18, 0.15] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: 3.5,
          repeatDelay: 1,
        }}
      />

      {/* Modern nav - clean spacing */}
      {[480, 555, 630, 700].map((x, i) => (
        <motion.rect
          key={`new-nav-${i}`}
          x={x}
          y="38"
          width="45"
          height="12"
          rx="6"
          fill="var(--neon-red)"
          opacity="0.25"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.05, 1],
            opacity: [0, 0.3, 0.25],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: 4 + i * 0.12,
            repeatDelay: 1.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Modern organized content */}
      <motion.rect
        x="460"
        y="72"
        width="200"
        height="95"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="2"
        opacity="0.22"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.22, 0.25, 0.22] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: 4.8,
          repeatDelay: 1,
        }}
      />

      {/* Clean organized text */}
      {[85, 100, 115, 130, 145].map((y, i) => (
        <motion.line
          key={`new-text-${i}`}
          x1="475"
          y1={y}
          x2={i < 3 ? "630" : "580"}
          y2={y}
          stroke="var(--neon-red)"
          strokeWidth="1.5"
          opacity="0.28"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{
            duration: 0.8,
            delay: 5.2 + i * 0.12,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Modern sidebar/CTA */}
      <motion.rect
        x="670"
        y="72"
        width="90"
        height="95"
        rx="4"
        fill="var(--neon-red)"
        opacity="0.12"
        stroke="var(--neon-red)"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: [0, 0.12, 0.18, 0.12],
          scale: [0.95, 1.03, 1, 1.03],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 5.5,
          repeatDelay: 1,
        }}
      />

      {/* CTA elements in sidebar */}
      {[85, 110, 135].map((y, i) => (
        <motion.rect
          key={`cta-${i}`}
          x="685"
          y={y}
          width="60"
          height={i === 2 ? 18 : 12}
          rx={i === 2 ? 9 : 2}
          fill="var(--neon-red)"
          opacity={i === 2 ? 0.4 : 0.2}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: [0, 1, 1],
            opacity: i === 2 ? [0, 0.5, 0.4] : [0, 0.2, 0.2],
          }}
          transition={{
            duration: 0.8,
            delay: 6 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
      ))}

      {/* Modern sleek footer */}
      <motion.rect
        x="460"
        y="182"
        width="300"
        height="20"
        rx="3"
        fill="var(--neon-red)"
        opacity="0.12"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.12, 0.15, 0.12] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: 6.5,
          repeatDelay: 1,
        }}
      />

      {/* Success metrics indicator */}
      <motion.foreignObject
        x="720"
        y="188"
        width="28"
        height="28"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1],
          scale: [0, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          delay: 7,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <CheckCircle
            className="w-6 h-6"
            style={{ color: "var(--neon-red)" }}
          />
        </div>
      </motion.foreignObject>
    </motion.svg>
  );
};
