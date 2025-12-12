import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, DollarSign } from "lucide-react";

export const EcommerceAnimation = () => {
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
      {/* Product Catalog Section */}
      <motion.rect
        x="20"
        y="30"
        width="130"
        height="200"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="2"
        opacity="0.2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      />

      {/* Product grid - 6 squares that fit in container */}
      {[
        { x: 35, y: 45 },
        { x: 90, y: 45 },
        { x: 35, y: 95 },
        { x: 90, y: 95 },
        { x: 35, y: 145 },
        { x: 90, y: 145 },
      ].map((pos, i) => (
        <motion.rect
          key={i}
          x={pos.x}
          y={pos.y}
          width="40"
          height="40"
          rx="2"
          fill="var(--neon-red)"
          opacity="0.15"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1],
            opacity: [0, 0.15, 0.15],
          }}
          transition={{
            duration: 0.4,
            delay: 0.5 + i * 0.1,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      ))}

      {/* Animated dotted line from products to cart */}
      <motion.path
        d="M 150 120 L 220 120"
        stroke="var(--neon-red)"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: [0, 1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 1.5,
          repeatDelay: 2,
        }}
      />

      {/* Shopping Cart Section */}
      <motion.rect
        x="220"
        y="85"
        width="100"
        height="70"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="2"
        opacity="0.2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 1.8,
          repeatDelay: 1.5,
        }}
      />

      {/* Cart Icon */}
      <motion.foreignObject
        x="245"
        y="100"
        width="40"
        height="40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1],
          scale: [0, 1.2, 1],
        }}
        transition={{
          duration: 0.5,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <ShoppingCart
            className="w-7 h-7"
            style={{ color: "var(--neon-red)" }}
          />
        </div>
      </motion.foreignObject>

      {/* Cart Badge with number */}
      <motion.circle
        cx="280"
        cy="105"
        r="10"
        fill="var(--neon-red)"
        fillOpacity="0.3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1],
          scale: [0, 1.2, 1],
        }}
        transition={{
          duration: 0.5,
          delay: 2.8,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      />

      <motion.text
        x="280"
        y="110"
        textAnchor="middle"
        fontSize="11"
        fill="var(--neon-red)"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 0.3,
          delay: 3,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      >
        3
      </motion.text>

      {/* Products accumulating in cart */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`cart-item-${i}`}
          cx="270"
          cy="130"
          r="4"
          fill="var(--neon-red)"
          opacity="0.5"
          initial={{ cx: 150, cy: 120, opacity: 0 }}
          animate={{
            cx: [150, 200, 245 + i * 10],
            cy: [120, 120, 130],
            opacity: [0, 0.7, 0.5],
          }}
          transition={{
            duration: 1,
            delay: 2.2 + i * 0.3,
            repeat: Infinity,
            repeatDelay: 2.5,
          }}
        />
      ))}

      {/* Dotted line from cart to payment */}
      <motion.path
        d="M 320 120 L 390 120"
        stroke="var(--neon-red)"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: [0, 1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 3.5,
          repeatDelay: 2,
        }}
      />

      {/* Payment Section */}
      <motion.rect
        x="390"
        y="85"
        width="100"
        height="70"
        rx="4"
        fill="none"
        stroke="var(--neon-red)"
        strokeWidth="2"
        opacity="0.2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 3.8,
          repeatDelay: 1.5,
        }}
      />

      {/* Credit Card Icon with animation */}
      <motion.foreignObject
        x="425"
        y="105"
        width="30"
        height="30"
        initial={{ opacity: 0, scale: 0, rotateY: 0 }}
        animate={{
          opacity: [0, 1, 1, 1],
          scale: [0, 1.2, 1, 1],
          rotateY: [0, 0, 360, 360],
        }}
        transition={{
          duration: 1.5,
          delay: 4,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <CreditCard
            className="w-6 h-6"
            style={{ color: "var(--neon-red)" }}
          />
        </div>
      </motion.foreignObject>

      {/* Card processing lines */}
      {[115, 125].map((y, i) => (
        <motion.line
          key={`card-line-${i}`}
          x1="405"
          y1={y}
          x2="475"
          y2={y}
          stroke="var(--neon-red)"
          strokeWidth="2"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 1],
          }}
          transition={{
            duration: 0.5,
            delay: 4.3 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 2.5,
          }}
        />
      ))}

      {/* Dotted line from payment to money */}
      <motion.path
        d="M 490 120 L 560 120"
        stroke="var(--neon-red)"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: [0, 1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 5,
          repeatDelay: 2,
        }}
      />

      {/* Money Income Section */}
      <motion.rect
        x="560"
        y="85"
        width="100"
        height="70"
        rx="4"
        fill="var(--neon-red)"
        opacity="0.08"
        stroke="var(--neon-red)"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 5.3,
          repeatDelay: 1.5,
        }}
      />

      {/* Money Icon rotating */}
      <motion.foreignObject
        x="595"
        y="105"
        width="30"
        height="30"
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: [0, 1, 1],
          scale: [0, 1.3, 1],
          rotate: [0, 0, 360],
        }}
        transition={{
          duration: 2,
          delay: 5.5,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <DollarSign
            className="w-6 h-6"
            style={{ color: "var(--neon-red)" }}
          />
        </div>
      </motion.foreignObject>

      {/* Floating dollar signs around money section - Outside the box */}
      {[
        { x: 540, y: 50, delay: 0, angle: -30 },
        { x: 665, y: 55, delay: 0.2, angle: 30 },
        { x: 545, y: 175, delay: 0.4, angle: -30 },
        { x: 660, y: 170, delay: 0.6, angle: 30 },
        { x: 595, y: 40, delay: 0.8, angle: 0 },
        { x: 600, y: 185, delay: 1, angle: 0 },
      ].map((pos, i) => (
        <motion.foreignObject
          key={`dollar-${i}`}
          x={pos.x}
          y={pos.y}
          width="28"
          height="28"
          initial={{ opacity: 0, scale: 0, y: pos.y, rotate: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 1],
            y: [pos.y, pos.y - 20, pos.y - 45],
            rotate: [0, pos.angle, pos.angle * 2],
          }}
          transition={{
            duration: 2.5,
            delay: 6 + pos.delay,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeOut",
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <DollarSign
              className="w-5 h-5"
              style={{ color: "var(--neon-red)" }}
            />
          </div>
        </motion.foreignObject>
      ))}

      {/* Growth bar animation */}
      <motion.rect
        x="570"
        y="135"
        width="0"
        height="8"
        rx="4"
        fill="var(--neon-red)"
        opacity="0.6"
        initial={{ width: 0 }}
        animate={{
          width: [0, 80, 80],
        }}
        transition={{
          duration: 1.5,
          delay: 6.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeOut",
        }}
      />

      {/* Dotted line to delivery */}
      <motion.path
        d="M 660 120 L 690 120"
        stroke="var(--neon-red)"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: [0, 1, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: 7.5,
          repeatDelay: 2.5,
        }}
      />

      {/* Delivery/Truck Section */}
      <motion.rect
        x="690"
        y="85"
        width="100"
        height="70"
        rx="4"
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
          delay: 7.5,
          repeatDelay: 0.5,
        }}
      />

      {/* Truck SVG (provided by user) - Moving animation */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.9, 0.9, 0.9, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 7.7,
          repeatDelay: 2.5,
        }}
      >
        <motion.g
          initial={{ x: 0 }}
          animate={{
            x: [0, 20, 50, 100, 150],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 7.7,
            repeatDelay: 2.5,
            ease: [0.43, 0.13, 0.23, 0.96],
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <g transform="translate(698, 102) scale(0.35)">
            <path
              d="M 89.034 43.825 L 74.452 27.423 c -0.725 -0.816 -1.767 -1.284 -2.859 -1.284 H 58.256 v -0.448 c 0 -3.723 -3.029 -6.752 -6.751 -6.752 H 6.752 C 3.029 18.94 0 21.969 0 25.692 v 35.098 c 0 2.219 1.805 4.024 4.023 4.024 h 10.374 c 0.827 3.573 4.029 6.247 7.85 6.247 s 7.023 -2.674 7.85 -6.247 h 25.193 h 2.967 h 10.701 c 0.827 3.573 4.029 6.247 7.85 6.247 s 7.023 -2.674 7.85 -6.247 h 1.519 c 2.109 0 3.825 -1.715 3.825 -3.825 V 46.367 C 90 45.43 89.657 44.527 89.034 43.825 z M 85.213 43.993 H 67.936 c -0.336 0 -0.609 -0.274 -0.609 -0.61 v -7.785 c 0 -0.336 0.273 -0.609 0.609 -0.609 h 9.272 L 85.213 43.993 z M 6.752 21.907 h 44.753 c 2.086 0 3.784 1.698 3.784 3.785 v 0.448 v 22.322 H 2.967 v -22.77 C 2.967 23.605 4.665 21.907 6.752 21.907 z M 22.246 68.093 c -2.81 0 -5.097 -2.286 -5.097 -5.097 s 2.287 -5.097 5.097 -5.097 s 5.097 2.286 5.097 5.097 S 25.057 68.093 22.246 68.093 z M 30.218 61.846 c -0.561 -3.902 -3.917 -6.913 -7.972 -6.913 s -7.411 3.011 -7.972 6.913 H 4.023 c -0.582 0 -1.056 -0.474 -1.056 -1.057 v -9.361 h 52.322 v 10.417 H 30.218 z M 76.807 68.093 c -2.811 0 -5.097 -2.286 -5.097 -5.097 s 2.286 -5.097 5.097 -5.097 s 5.097 2.286 5.097 5.097 S 79.617 68.093 76.807 68.093 z M 86.175 61.846 h -1.397 c -0.561 -3.902 -3.917 -6.913 -7.972 -6.913 s -7.411 3.011 -7.972 6.913 H 58.256 v -32.74 h 13.337 c 0.244 0 0.478 0.105 0.641 0.288 l 2.335 2.627 h -6.634 c -1.972 0 -3.576 1.604 -3.576 3.576 v 7.785 c 0 1.972 1.604 3.577 3.576 3.577 h 19.097 v 14.029 C 87.033 61.462 86.649 61.846 86.175 61.846 z"
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeLinecap: "round",
                fill: "var(--neon-red)",
                fillRule: "nonzero",
                opacity: 1,
              }}
            />
          </g>
        </motion.g>
      </motion.g>

      {/* Speed lines following truck */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={`speed-${i}`}
          x1="695"
          y1={108 + i * 8}
          x2="710"
          y2={108 + i * 8}
          stroke="var(--neon-red)"
          strokeWidth="1.5"
          opacity="0.3"
          initial={{ pathLength: 0, opacity: 0, x1: 695, x2: 710 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.5, 0.4, 0],
            x1: [695, 715, 745, 795],
            x2: [710, 730, 760, 810],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 8.2 + i * 0.15,
            repeatDelay: 2.5,
          }}
        />
      ))}
    </motion.svg>
  );
};
