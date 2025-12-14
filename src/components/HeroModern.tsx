import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function HeroModern() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress tracking - tracks when section scrolls out of view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Exit animation progress (0 to 1 as section scrolls out)
  const exitProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // EFE exits to the right (opposite of entry)
  const efeX = useTransform(exitProgress, [0, 1], [0, 250]);
  const efeOpacity = useTransform(exitProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // DIGITAL exits to the left (opposite of entry)
  const digitalX = useTransform(exitProgress, [0, 1], [0, -250]);
  const digitalOpacity = useTransform(exitProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Tagline exits to the right similar to EFE
  const taglineX = useTransform(exitProgress, [0, 1], [0, 200]);
  const taglineOpacity = useTransform(exitProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden selection:bg-[var(--neon-green)] selection:text-black"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Giant Typography */}
        <div className="relative flex flex-col justify-center pointer-events-none overflow-hidden">
          <h1
            ref={textRef}
            className="tracking-tighter text-white uppercase mix-blend-difference break-words"
            style={{
              fontSize: "clamp(3rem, 15vw, 15rem)",
              fontWeight: 900,
              lineHeight: 1,
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                x: efeX,
                opacity: efeOpacity,
              }}
            >
              EFE
            </motion.div>
            <motion.div
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="text-[#333] hover:text-white transition-colors duration-500 pointer-events-auto"
              style={{
                fontWeight: 900,
                x: digitalX,
                opacity: digitalOpacity,
              }}
            >
              DIGITAL
              <motion.span
                style={{ color: "var(--neon-red)" }}
                animate={{
                  scale: [1, 1.3, 1, 1.3, 1],
                  opacity: [1, 0.8, 1, 0.8, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 1],
                }}
              >
                .
              </motion.span>
            </motion.div>
          </h1>

          {/* Floating Badge */}
          <motion.div
            className="absolute top-1/2 right-0 hidden lg:flex items-center justify-center pointer-events-auto"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-[var(--neon-green)] text-black w-32 h-32 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <ArrowDownRight size={48} />
            </div>
          </motion.div>
        </div>

        {/* Bottom Content - Correctly Aligned */}
        <div className="mt-12 md:mt-16 border-t border-white/10 pt-6 md:pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-xl break-words"
            style={{
              fontWeight: 100,
              fontFamily: "var(--font-heading)",
              x: taglineX,
              opacity: taglineOpacity,
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            Convertimos tu web en un sistema que trabaja por vos. Menos tiempo
            en tareas repetitivas, más tiempo haciendo crecer tu negocio.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
