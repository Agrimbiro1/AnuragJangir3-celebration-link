import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ganesha from "@/assets/ganesha.png";
import { ThreeBackground } from "./ThreeBackground";

export function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scroll during intro
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        document.body.style.overflow = "auto";
        onComplete();
      }, 1500); // Wait for exit animation
    }, 4500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", scale: 3 }} // 3D fly-through zoom
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#1A0508] via-maroon-deep to-[#2A080D] flex flex-col items-center justify-center overflow-hidden"
          onClick={() => setIsVisible(false)} // Allow tapping to skip
        >
          <ThreeBackground />
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none" />

          {/* Animated SVG Mandala Backdrop */}
          <div className="relative w-[340px] h-[340px] flex flex-col items-center justify-center">
            
            {/* Outer Slow Rotation */}
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full text-[#D4AF37] opacity-30 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {/* Outer decorative dotted circle */}
              <motion.circle
                cx="100" cy="100" r="95"
                fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              {/* Outer Lotus petals */}
              <motion.path
                d="M100 5 C 120 40, 160 80, 195 100 C 160 120, 120 160, 100 195 C 80 160, 40 120, 5 100 C 40 80, 80 40, 100 5 Z"
                fill="none" stroke="currentColor" strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
              />
            </motion.svg>

            {/* Inner Fast Reverse Rotation */}
            <motion.svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full text-[#E2B75A] opacity-50 drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {/* Inner Lotus petals */}
              <motion.path
                d="M100 25 C 115 50, 145 85, 175 100 C 145 115, 115 150, 100 175 C 85 150, 55 115, 25 100 C 55 85, 85 50, 100 25 Z"
                fill="none" stroke="currentColor" strokeWidth="0.75"
                style={{ rotate: "45deg", transformOrigin: "100px 100px" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />
              <motion.circle
                cx="100" cy="100" r="70"
                fill="none" stroke="currentColor" strokeWidth="1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              />
              {/* Sun bursts */}
              {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                <motion.line
                  key={i}
                  x1="100" y1="40" x2="100" y2="160"
                  stroke="url(#goldGradient)" strokeWidth="0.5"
                  style={{ rotate: `${angle}deg`, transformOrigin: "100px 100px" }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                />
              ))}
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2"/>
                  <stop offset="50%" stopColor="#FDF5D3" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </motion.svg>
            
            {/* Ganesha */}
            <motion.div 
              className="relative z-10 flex items-center justify-center w-full h-full"
              initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-2xl animate-pulse-gold pointer-events-none" />
              <motion.img
                src={ganesha}
                alt="Lord Ganesha"
                className="w-32 sm:w-40 relative z-20 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 2.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-20 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.2)_0%,_transparent_70%)] pointer-events-none blur-xl" />
            
            <h2 className="script text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FDF5D3] to-[#D4AF37] text-5xl sm:text-7xl tracking-wide drop-shadow-lg relative z-10 py-2">
              ॥ Shubh Aarambh ॥
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.8, duration: 1.5, ease: "easeInOut" }}
              className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/80 to-transparent my-3"
            />
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.6em" }}
              transition={{ delay: 3, duration: 2, ease: "easeOut" }}
              className="label text-[#E2B75A] text-[10px] sm:text-xs uppercase ml-[0.6em] relative z-10 font-bold tracking-widest"
            >
              A Sacred Invitation
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
