import React from "react";
import { motion } from "framer-motion";

export const AnimatedMandalaBackground = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] md:w-[720px] md:h-[720px] opacity-08 sm:opacity-10 md:opacity-12 mix-blend-multiply drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]"
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-radial from-gold/15 via-gold/5 to-transparent blur-3xl" />

        {/* Multi-layered SVG Mandala Art */}
        <svg viewBox="0 0 1000 1000" className="w-full h-full text-gold overflow-visible">
          <defs>
            <linearGradient id="mandalaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDF5D3" stopOpacity="0.5" />
              <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#997819" stopOpacity="0.2" />
            </linearGradient>

            <radialGradient id="mandalaCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF2A1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Layer 1: Outer Petals & Beaded Sacred Ring (Clockwise Slow Rotation) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "500px 500px" }}
          >
            {/* Outer Border Circles */}
            <circle cx="500" cy="500" r="475" fill="none" stroke="url(#mandalaGoldGrad)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
            <circle cx="500" cy="500" r="460" fill="none" stroke="url(#mandalaGoldGrad)" strokeWidth="2" opacity="0.8" />
            <circle cx="500" cy="500" r="442" fill="none" stroke="url(#mandalaGoldGrad)" strokeWidth="1" opacity="0.5" />

            {/* 24 Outer Ornamental Arch Petals */}
            {Array.from({ length: 24 }).map((_, i) => (
              <g key={`outer-${i}`} transform={`rotate(${i * (360 / 24)} 500 500)`}>
                <path
                  d="M500 40 C525 80 540 125 500 155 C460 125 475 80 500 40 Z"
                  fill="url(#mandalaGoldGrad)"
                  fillOpacity="0.08"
                  stroke="url(#mandalaGoldGrad)"
                  strokeWidth="1.5"
                  opacity="0.85"
                />
                <circle cx="500" cy="48" r="3.5" fill="#FDF5D3" />
                <line x1="500" y1="40" x2="500" y2="155" stroke="url(#mandalaGoldGrad)" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
              </g>
            ))}
          </motion.g>

          {/* Layer 2: Middle Ornate Lotus Ring (Counter-Clockwise Rotation) */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "500px 500px" }}
          >
            <circle cx="500" cy="500" r="345" fill="none" stroke="url(#mandalaGoldGrad)" strokeWidth="2" opacity="0.75" />
            <circle cx="500" cy="500" r="328" fill="none" stroke="url(#mandalaGoldGrad)" strokeWidth="1" strokeDasharray="8 6" opacity="0.5" />

            {/* 16 Detailed Lotus Flower Petals */}
            {Array.from({ length: 16 }).map((_, i) => (
              <g key={`mid-${i}`} transform={`rotate(${i * (360 / 16)} 500 500)`}>
                <path
                  d="M500 155 Q555 240 500 335 Q445 240 500 155 Z"
                  fill="url(#mandalaGoldGrad)"
                  fillOpacity="0.12"
                  stroke="url(#mandalaGoldGrad)"
                  strokeWidth="2"
                />
                <path
                  d="M500 185 Q532 250 500 320 Q468 250 500 185 Z"
                  fill="none"
                  stroke="url(#mandalaGoldGrad)"
                  strokeWidth="1"
                  opacity="0.6"
                />
                <circle cx="500" cy="170" r="4" fill="#FDF5D3" opacity="0.95" />
              </g>
            ))}
          </motion.g>

          {/* Layer 3: Inner Sacred Geometry & Star Motif (Clockwise Rotation) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "500px 500px" }}
          >
            <circle cx="500" cy="500" r="230" fill="none" stroke="url(#mandalaGoldGrad)" strokeWidth="2" opacity="0.8" />

            {/* 12 Pointed Diamond & Star Geometry */}
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={`inner-${i}`} transform={`rotate(${i * (360 / 12)} 500 500)`}>
                <path
                  d="M500 270 L532 350 L500 430 L468 350 Z"
                  fill="url(#mandalaGoldGrad)"
                  fillOpacity="0.18"
                  stroke="url(#mandalaGoldGrad)"
                  strokeWidth="1.5"
                />
                <circle cx="500" cy="275" r="3.5" fill="#FFF2A1" />
              </g>
            ))}
          </motion.g>

          {/* Layer 4: Core Mandala & Pulsing Center Lotus Bindu */}
          <motion.g
            animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "500px 500px" }}
          >
            <circle cx="500" cy="500" r="140" fill="none" stroke="url(#mandalaGoldGrad)" strokeWidth="2" opacity="0.9" />
            <circle cx="500" cy="500" r="130" fill="url(#mandalaCenterGlow)" />
            <circle cx="500" cy="500" r="100" fill="none" stroke="url(#mandalaGoldGrad)" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* 8 Central Lotus Petals */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`core-${i}`} transform={`rotate(${i * (360 / 8)} 500 500)`}>
                <path
                  d="M500 400 Q522 440 500 480 Q478 440 500 400 Z"
                  fill="url(#mandalaGoldGrad)"
                  fillOpacity="0.35"
                  stroke="url(#mandalaGoldGrad)"
                  strokeWidth="1.5"
                />
              </g>
            ))}

            {/* Central Seed / Bindu */}
            <circle cx="500" cy="500" r="24" fill="url(#mandalaGoldGrad)" opacity="0.9" />
            <circle cx="500" cy="500" r="10" fill="#FFF2A1" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};
