import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ganesha from "@/assets/ganesha.png";
import { ThreeBackground } from "./ThreeBackground";
import { Sparkles, ChevronDown } from "lucide-react";

export function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      document.body.style.overflow = "auto";
      onComplete();
    }, 750); // 750ms exit transition delay
  };

  useEffect(() => {
    // Lock body scroll during intro
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{
        opacity: 0,
        scale: 1.15,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
      }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="fixed inset-0 z-[100] bg-[#120305] bg-gradient-to-br from-[#120305] via-[#2A080D] to-[#160407] flex flex-col items-center justify-between py-8 sm:py-12 px-4 overflow-hidden select-none cursor-pointer"
      onClick={handleDismiss}
    >
      {/* Expanding Golden Shockwave Burst on Tap */}
      {isExiting && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-gold/80 shadow-[0_0_50px_rgba(212,175,55,0.8)] pointer-events-none z-50 mix-blend-screen"
          initial={{ scale: 0.4, opacity: 1, borderWidth: "8px" }}
          animate={{ scale: 4.5, opacity: 0, borderWidth: "1px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
          {/* 3D Sparkling Gold Particles Canvas */}
          <ThreeBackground />

          {/* Luxury Texture & Ambient Radiance */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15 pointer-events-none mix-blend-screen" />
          
          {/* Pulsing Center Sunburst Rays */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] pointer-events-none opacity-25 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, rgba(212,175,55,0.4) 0deg, transparent 15deg, rgba(253,245,211,0.3) 30deg, transparent 45deg, rgba(212,175,55,0.4) 60deg, transparent 75deg, rgba(253,245,211,0.3) 90deg, transparent 105deg, rgba(212,175,55,0.4) 120deg, transparent 135deg, rgba(253,245,211,0.3) 150deg, transparent 165deg, rgba(212,175,55,0.4) 180deg, transparent 195deg, rgba(253,245,211,0.3) 210deg, transparent 225deg, rgba(212,175,55,0.4) 240deg, transparent 255deg, rgba(253,245,211,0.3) 270deg, transparent 285deg, rgba(212,175,55,0.4) 300deg, transparent 315deg, rgba(253,245,211,0.3) 330deg, transparent 345deg, rgba(212,175,55,0.4) 360deg)",
            }}
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{
              rotate: { duration: 60, ease: "linear", repeat: Infinity },
              scale: { duration: 6, ease: "easeInOut", repeat: Infinity },
            }}
          />

          {/* Soft Central Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.22)_0%,_rgba(122,31,43,0.15)_45%,_transparent_75%)] pointer-events-none" />

          {/* Royal Decorative Corner Filigrees */}
          <CornerFiligree position="top-left" />
          <CornerFiligree position="top-right" />
          <CornerFiligree position="bottom-left" />
          <CornerFiligree position="bottom-right" />

          {/* Floating Gold Sparks (Ambient Micro-particles) */}
          <FloatingSparks />

          {/* --- TOP BANNER: Sacred Sanskrit Chanting Mantra --- */}
          <motion.div
            initial={{ opacity: 0, y: -25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex flex-col items-center mt-2 sm:mt-4 text-center"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold/70" />
              <span className="text-gold text-xs sm:text-sm animate-spin-slow">✦</span>
              <p className="label text-[#E2B75A] text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
                ॥ ॐ श्री गणेशाय नमः ॥
              </p>
              <span className="text-gold text-xs sm:text-sm animate-spin-slow">✦</span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold/70" />
            </div>
          </motion.div>

          {/* --- CENTERPIECE: Tri-Layer SVG Lotus Mandala & Lord Ganesha --- */}
          <div className="relative z-20 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center my-auto">
            
            {/* Pulsing Light Aura Behind Ganesha */}
            <motion.div
              className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-radial from-[#FDF5D3]/40 via-gold/20 to-transparent blur-xl pointer-events-none"
              animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Radiant Shockwave Rings */}
            <motion.div
              className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-gold/30 pointer-events-none"
              animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
            />

            {/* LAYER 1: Outer Slow Clockwise Intricate Mandala */}
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full text-[#D4AF37] opacity-40 drop-shadow-[0_0_18px_rgba(212,175,55,0.7)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            >
              {/* Dotted border circle */}
              <motion.circle
                cx="100" cy="100" r="96"
                fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              {/* Outer Lotus Flower Frame */}
              <motion.path
                d="M100 4 C 122 38, 162 78, 196 100 C 162 122, 122 162, 100 196 C 78 162, 38 122, 4 100 C 38 78, 78 38, 100 4 Z"
                fill="none" stroke="currentColor" strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }}
              />
              {/* Diagonal Lotus Petals */}
              <motion.path
                d="M100 4 C 122 38, 162 78, 196 100 C 162 122, 122 162, 100 196 C 78 162, 38 122, 4 100 C 38 78, 78 38, 100 4 Z"
                fill="none" stroke="currentColor" strokeWidth="0.75"
                style={{ rotate: "45deg", transformOrigin: "100px 100px" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, delay: 0.7, ease: "easeInOut" }}
              />
            </motion.svg>

            {/* LAYER 2: Middle Counter-Clockwise Star Burst Mandala */}
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full text-[#FDF5D3] opacity-60 drop-shadow-[0_0_24px_rgba(253,245,211,0.8)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 32, ease: "linear", repeat: Infinity }}
            >
              {/* Inner Petal Geometry */}
              <motion.path
                d="M100 22 C 116 48, 152 84, 178 100 C 152 116, 116 152, 100 178 C 84 152, 48 116, 22 100 C 48 84, 84 48, 100 22 Z"
                fill="none" stroke="currentColor" strokeWidth="0.9"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
              />
              {/* Star line rays */}
              {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                <motion.line
                  key={i}
                  x1="100" y1="32" x2="100" y2="168"
                  stroke="url(#goldGradientIntro)" strokeWidth="0.75"
                  style={{ rotate: `${angle}deg`, transformOrigin: "100px 100px" }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                />
              ))}
              <defs>
                <linearGradient id="goldGradientIntro" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2"/>
                  <stop offset="50%" stopColor="#FDF5D3" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </motion.svg>

            {/* LAYER 3: Inner Golden Ring with Floating Dots */}
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full text-[#E2B75A] opacity-75"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              <motion.circle
                cx="100" cy="100" r="68"
                fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, delay: 1.1, ease: "easeOut" }}
              />
              {/* Cardinal Diamond Nodes */}
              {[0, 90, 180, 270].map((angle, i) => (
                <rect
                  key={i}
                  x="97" y="30" width="6" height="6"
                  fill="#FDF5D3"
                  style={{ rotate: `${angle}deg`, transformOrigin: "100px 100px" }}
                />
              ))}
            </motion.svg>

            {/* LORD GANESHA - Floating Center Icon with Regal Glow */}
            <motion.div
              className="relative z-30 flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0, filter: "blur(16px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gold/30 to-amber-200/40 rounded-full blur-2xl animate-pulse pointer-events-none" />
              <motion.img
                src={ganesha}
                alt="Lord Ganesha"
                className="w-32 sm:w-44 md:w-48 relative z-20 drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)]"
                animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

          </div>

          {/* --- BOTTOM SECTION: Shubh Aarambh Title & Enter Action Prompt --- */}
          <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex flex-col items-center text-center mb-2 sm:mb-4"
          >
            {/* Soft backdrop glow behind title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-24 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.25)_0%,_transparent_75%)] pointer-events-none blur-2xl" />

            {/* Title: Shubh Aarambh */}
            <h2 className="script text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF5D6] to-[#D4AF37] text-3xl sm:text-5xl md:text-6xl tracking-wide drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)] relative z-10 py-1 font-bold">
              ॥ Shubh Aarambh ॥
            </h2>

            {/* Decorative Gold Ornament Line */}
            <div className="flex items-center gap-3 my-2 relative z-10">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.2, duration: 1.2, ease: "easeInOut" }}
                className="w-20 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-gold/40"
              />
              <span className="text-gold text-xs sm:text-sm animate-pulse">✦</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.2, duration: 1.2, ease: "easeInOut" }}
                className="w-20 sm:w-32 h-[1px] bg-gradient-to-l from-transparent via-gold to-gold/40"
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ delay: 2.4, duration: 1.8, ease: "easeOut" }}
              className="label text-[#E2B75A] text-[10px] sm:text-xs uppercase ml-[0.55em] font-semibold tracking-widest relative z-10 drop-shadow-sm"
            >
              A Sacred Celebration of Love & Union
            </motion.p>

            {/* Interactive "Tap Anywhere to Enter" Button & Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="mt-6 sm:mt-8 flex flex-col items-center gap-2"
            >
              <div className="px-5 py-2 rounded-full bg-gold/10 border border-gold/40 backdrop-blur-md flex items-center gap-2 text-gold shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:bg-gold/20 transition-all">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#FFF5D6]" />
                <span className="label text-[9.5px] sm:text-[11px] font-bold text-[#FFF5D6] tracking-[0.25em]">
                  TAP ANYWHERE TO ENTER INVITATION
                </span>
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#FFF5D6]" />
              </div>
              <ChevronDown className="w-4 h-4 text-gold/70 animate-bounce mt-1" />
            </motion.div>
          </motion.div>
        </motion.div>
  );
}

// Helper Component for Corner Decorative Filigrees
function CornerFiligree({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const positionClasses = {
    "top-left": "top-3 left-3 sm:top-5 sm:left-5",
    "top-right": "top-3 right-3 sm:top-5 sm:right-5 rotate-90",
    "bottom-left": "bottom-3 left-3 sm:bottom-5 sm:left-5 -rotate-90",
    "bottom-right": "bottom-3 right-3 sm:bottom-5 sm:right-5 rotate-180",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 0.65, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      className={`absolute z-20 pointer-events-none w-16 h-16 sm:w-24 sm:h-24 text-gold ${positionClasses[position]}`}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        {/* Outer Corner Frame */}
        <path
          d="M 5 5 L 45 5 C 45 25, 25 45, 5 45 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 5 15 L 35 15 C 35 25, 25 35, 15 35 L 15 5"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          fill="none"
        />
        {/* Swirl Pattern */}
        <path
          d="M 12 12 Q 28 12 28 28 Q 12 28 12 12 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        <circle cx="8" cy="8" r="2.5" fill="currentColor" />
        <circle cx="48" cy="5" r="1.5" fill="currentColor" />
        <circle cx="5" cy="48" r="1.5" fill="currentColor" />
      </svg>
    </motion.div>
  );
}

// Helper Component for Floating Golden Sparkles (Micro Ambient Particles)
function FloatingSparks() {
  const sparks = [
    { id: 1, top: "20%", left: "15%", size: 3, delay: 0, duration: 4 },
    { id: 2, top: "75%", left: "80%", size: 4, delay: 1, duration: 5 },
    { id: 3, top: "35%", left: "85%", size: 2, delay: 0.5, duration: 3.5 },
    { id: 4, top: "70%", left: "12%", size: 3.5, delay: 1.5, duration: 4.5 },
    { id: 5, top: "15%", left: "70%", size: 2.5, delay: 2, duration: 4 },
    { id: 6, top: "82%", left: "45%", size: 3, delay: 0.8, duration: 5.2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute rounded-full bg-[#FFF5D3] shadow-[0_0_8px_#D4AF37]"
          style={{
            top: spark.top,
            left: spark.left,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            delay: spark.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

