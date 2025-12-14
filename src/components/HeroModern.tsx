import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { MouseEvent, useEffect, useRef, useState } from "react";

export function HeroModern() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Particle System Logic - only on desktop
  useEffect(() => {
    if (isMobile) return; // Don't initialize particles on mobile
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 }; // Start mouse off screen
    let initialized = false;

    // Resize handling
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (!initialized) {
        initParticles();
      }
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      prevX: number;
      prevY: number;
      friction: number;
      size: number;
      length: number;
      angle: number;
      baseAngle: number;

      constructor() {
        // Start particles scattered across the screen
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.prevX = this.x;
        this.prevY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.friction = 0.98; // Very fluid movement
        this.size = Math.random() * 0.8 + 0.3;
        this.length = Math.random() * 15 + 8; // Elongated particles
        this.angle = Math.random() * Math.PI * 2;
        this.baseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        // Store previous position
        this.prevX = this.x;
        this.prevY = this.y;

        // Mouse interaction - follow mouse naturally
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 200;

        if (distance > 0) {
          const angleToMouse = Math.atan2(dy, dx);

          // Repulsion within 200px - gentle push away
          if (distance < repulsionRadius) {
            const force = (repulsionRadius - distance) / repulsionRadius;
            const pushX = Math.cos(angleToMouse) * force * 3;
            const pushY = Math.sin(angleToMouse) * force * 3;

            this.vx -= pushX;
            this.vy -= pushY;
          }
          // Attraction outside repulsion - smooth following
          else {
            const attractDistance = distance - repulsionRadius;
            const maxDistance = 800; // Larger attraction range

            if (attractDistance < maxDistance) {
              const attractForce = (1 - attractDistance / maxDistance) * 0.15;
              const pullX = Math.cos(angleToMouse) * attractForce;
              const pullY = Math.sin(angleToMouse) * attractForce;

              this.vx += pullX;
              this.vy += pullY;
            }
          }
        }

        // Natural floating movement
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        this.baseAngle += (Math.random() - 0.5) * 0.05;

        // Add gentle floating motion
        this.vx += Math.cos(this.baseAngle) * 0.01;
        this.vy += Math.sin(this.baseAngle) * 0.01;

        // Update angle based on velocity direction for elongated particles
        if (speed > 0.1) {
          this.angle = Math.atan2(this.vy, this.vx);
        } else {
          // Gentle rotation when still
          this.angle += (Math.random() - 0.5) * 0.02;
        }

        // Apply friction for smooth movement
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Soft boundaries - wrap around or bounce back gently
        const margin = 100;
        if (this.x < -margin) {
          this.x = canvas!.width + margin;
          this.prevX = this.x;
        }
        if (this.x > canvas!.width + margin) {
          this.x = -margin;
          this.prevX = this.x;
        }
        if (this.y < -margin) {
          this.y = canvas!.height + margin;
          this.prevY = this.y;
        }
        if (this.y > canvas!.height + margin) {
          this.y = -margin;
          this.prevY = this.y;
        }
      }

      draw() {
        if (!ctx) return;

        // Draw elongated particle as a line/stroke
        const halfLength = this.length / 2;
        const startX = this.x - Math.cos(this.angle) * halfLength;
        const startY = this.y - Math.sin(this.angle) * halfLength;
        const endX = this.x + Math.cos(this.angle) * halfLength;
        const endY = this.y + Math.sin(this.angle) * halfLength;

        // Create gradient along the line
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, "rgba(135, 206, 250, 0)");
        gradient.addColorStop(0.5, "rgba(135, 206, 250, 0.6)");
        gradient.addColorStop(1, "rgba(135, 206, 250, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Add a subtle glow in the center
        const centerGradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2
        );
        centerGradient.addColorStop(0, "rgba(135, 206, 250, 0.4)");
        centerGradient.addColorStop(1, "rgba(135, 206, 250, 0)");

        ctx.fillStyle = centerGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const particleCount = 1500; // More particles for denser effect
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      initialized = true;
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    // Initialize
    window.addEventListener("resize", resize);
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden selection:bg-[var(--neon-green)] selection:text-black"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Particles Canvas - Hidden on mobile */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-70 hidden md:block"
      />

      {/* Spotlight Effect - Subtle */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.03),
              transparent 80%
            )
          `,
        }}
      />

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
              <span style={{ color: "var(--neon-red)" }}>.</span>
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
