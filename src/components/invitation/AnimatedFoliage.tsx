import { motion } from "framer-motion";
import corner from "@/assets/corner-foliage.png";

export function AnimatedFoliage() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* SVG Decorative Vines for a premium frame */}
      <svg className="absolute inset-0 w-full h-full opacity-40 text-gold z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 5,5 L 95,5 L 95,95 L 5,95 Z"
          fill="none" stroke="currentColor" strokeWidth="0.15"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M 8,8 L 92,8 L 92,92 L 8,92 Z"
          fill="none" stroke="currentColor" strokeWidth="0.05"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
        />
      </svg>

      {/* Floating Glowing Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/40 blur-[2px]"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mobile Corners */}
      <motion.img 
        src={corner} alt="" aria-hidden 
        className="absolute top-0 left-0 w-28 sm:w-32 md:hidden origin-top-left opacity-90 drop-shadow-lg z-10"
        initial={{ scale: 0.8, x: -20, y: -20, opacity: 0 }}
        animate={{ scale: 1, x: 0, y: 0, opacity: 0.9, rotate: [0, 1.5, 0] }}
        transition={{
          scale: { duration: 1.2, ease: "easeOut" },
          x: { duration: 1.2, ease: "easeOut" },
          y: { duration: 1.2, ease: "easeOut" },
          opacity: { duration: 1.2 },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />
      <motion.img 
        src={corner} alt="" aria-hidden 
        className="absolute top-0 right-0 w-28 sm:w-32 md:hidden -scale-x-100 origin-top-right opacity-90 drop-shadow-lg z-10"
        initial={{ scale: 0.8, x: 20, y: -20, opacity: 0 }}
        animate={{ scale: 1, x: 0, y: 0, opacity: 0.9, rotate: [0, -1.5, 0] }}
        transition={{
          scale: { duration: 1.2, ease: "easeOut" },
          x: { duration: 1.2, ease: "easeOut" },
          y: { duration: 1.2, ease: "easeOut" },
          opacity: { duration: 1.2 },
          rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
        }}
      />
      <motion.img 
        src={corner} alt="" aria-hidden 
        className="absolute bottom-16 left-0 w-28 sm:w-32 md:hidden -scale-y-100 origin-bottom-left opacity-85 drop-shadow-lg z-10"
        initial={{ scale: 0.8, x: -20, y: 20, opacity: 0 }}
        animate={{ scale: 1, x: 0, y: 0, opacity: 0.85, rotate: [0, -1, 0] }}
        transition={{
          scale: { duration: 1.2, ease: "easeOut", delay: 0.2 },
          x: { duration: 1.2, ease: "easeOut", delay: 0.2 },
          y: { duration: 1.2, ease: "easeOut", delay: 0.2 },
          opacity: { duration: 1.2, delay: 0.2 },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
        }}
      />
      <motion.img 
        src={corner} alt="" aria-hidden 
        className="absolute bottom-16 right-0 w-28 sm:w-32 md:hidden -scale-100 origin-bottom-right opacity-85 drop-shadow-lg z-10"
        initial={{ scale: 0.8, x: 20, y: 20, opacity: 0 }}
        animate={{ scale: 1, x: 0, y: 0, opacity: 0.85, rotate: [0, 1, 0] }}
        transition={{
          scale: { duration: 1.2, ease: "easeOut", delay: 0.3 },
          x: { duration: 1.2, ease: "easeOut", delay: 0.3 },
          y: { duration: 1.2, ease: "easeOut", delay: 0.3 },
          opacity: { duration: 1.2, delay: 0.3 },
          rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
        }}
      />

      {/* Desktop Corners / Side Panels */}
      <motion.img
        src={corner} alt="" aria-hidden
        className="hidden md:block absolute top-0 left-0 h-full w-[35vw] max-w-[560px] object-cover object-right opacity-95 drop-shadow-[10px_0_20px_rgba(122,31,43,0.15)] origin-left z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.95, scaleY: [1, 1.01, 1] }}
        transition={{
          x: { duration: 1.4, ease: "easeOut" },
          opacity: { duration: 1.4 },
          scaleY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.img
        src={corner} alt="" aria-hidden
        className="hidden md:block absolute top-0 right-0 h-full w-[35vw] max-w-[560px] object-cover object-left opacity-95 -scale-x-100 drop-shadow-[-10px_0_20px_rgba(122,31,43,0.15)] origin-right z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.95, scaleY: [1, 1.01, 1] }}
        transition={{
          x: { duration: 1.4, ease: "easeOut" },
          opacity: { duration: 1.4 },
          scaleY: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />
    </div>
  );
}
