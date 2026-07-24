import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import cows from "@/assets/pichwai-cows.png";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { RotatingMandala } from "@/components/invitation/AnimatedDecorations";

export const Route = createFileRoute("/closing")({ component: ClosingPage });

// Calligraphic Flourish Accent
const TitleFlourish = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={`w-8 sm:w-12 md:w-16 h-auto text-gold drop-shadow-md shrink-0 ${className}`}>
    <path d="M0 10 Q25 0, 50 10 T100 10 M25 10 Q37.5 20, 50 10 T75 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="10" r="2.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="90" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// Royal Luxury Interlocked Couple Engagement Rings Icon
const CoupleRingsIcon = ({ className = "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <defs>
      {/* Royal 3D Polished Gold Shimmer Gradients */}
      <linearGradient id="goldBandLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF8D6" />
        <stop offset="25%" stopColor="#F3D079" />
        <stop offset="50%" stopColor="#C89729" />
        <stop offset="75%" stopColor="#966B12" />
        <stop offset="100%" stopColor="#4A3500" />
      </linearGradient>

      <linearGradient id="goldBandRight" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="20%" stopColor="#FFEAA5" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="80%" stopColor="#AA7A1E" />
        <stop offset="100%" stopColor="#553A00" />
      </linearGradient>

      <linearGradient id="goldHighlight" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="50%" stopColor="#FFFBE6" opacity="0.85" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>

      {/* Brilliant Diamond Facet Gradients */}
      <linearGradient id="diamondCrown" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#E0F7FA" />
        <stop offset="100%" stopColor="#B2EBF2" />
      </linearGradient>

      <linearGradient id="diamondPavilion" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#80DEEA" />
        <stop offset="50%" stopColor="#B2EBF2" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>

      {/* Realistic Soft Drop Shadows & Glow */}
      <filter id="royalGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.7" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="ringShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#3A0C14" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#ringShadow)">
      {/* Ground Ambient Glow & Reflection */}
      <ellipse cx="50" cy="74" rx="32" ry="7" fill="#D4AF37" opacity="0.18" filter="url(#royalGlow)" />

      {/* LEFT RING - Groom's Polished Gold Band */}
      <g>
        <ellipse cx="38" cy="54" rx="22" ry="20" stroke="url(#goldBandLeft)" strokeWidth="5.5" fill="none" />
        <ellipse cx="38" cy="54" rx="19.2" ry="17.2" stroke="#FFF7C2" strokeWidth="0.9" fill="none" opacity="0.8" />
        <ellipse cx="38" cy="54" rx="24.8" ry="22.8" stroke="#4A3500" strokeWidth="0.8" fill="none" opacity="0.45" />
        <path d="M 18 46 A 22 20 0 0 1 34 35" stroke="url(#goldHighlight)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* RIGHT RING - Bride's Diamond Solitaire Band (Interlocked) */}
      <g>
        <ellipse cx="62" cy="54" rx="22" ry="20" stroke="url(#goldBandRight)" strokeWidth="5.5" fill="none" />
        <ellipse cx="62" cy="54" rx="19.2" ry="17.2" stroke="#FFF7C2" strokeWidth="0.9" fill="none" opacity="0.8" />
        <ellipse cx="62" cy="54" rx="24.8" ry="22.8" stroke="#553A00" strokeWidth="0.8" fill="none" opacity="0.45" />
        <path d="M 44 44 A 22 20 0 0 1 60 35" stroke="url(#goldHighlight)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* 3D Interlocking Front Overlap Arc */}
      <path d="M 40 34.5 A 22 20 0 0 1 54 36" stroke="url(#goldBandLeft)" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      <path d="M 40 34.5 A 19.2 17.2 0 0 1 53 36" stroke="#FFF7C2" strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.85" />

      {/* SOLITAIRE DIAMOND CROWN SETTING (At Top of Right Ring) */}
      <g transform="translate(62, 32)">
        {/* 4-Prong Gold Setting Mount */}
        <path d="M-6 1 L-8 -4 L-4 -4 L-2 1 Z" fill="url(#goldBandRight)" stroke="#553A00" strokeWidth="0.5" />
        <path d="M6 1 L8 -4 L4 -4 L2 1 Z" fill="url(#goldBandRight)" stroke="#553A00" strokeWidth="0.5" />
        
        {/* Diamond Solitaire Gemstone (Multi-faceted Brilliant Cut) */}
        <g filter="url(#royalGlow)">
          {/* Table (Top Flat Face) */}
          <polygon points="-5,-14 5,-14 8,-8 -8,-8" fill="url(#diamondCrown)" />
          <polygon points="-5,-14 5,-14 0,-18" fill="#FFFFFF" />
          
          {/* Crown Facets */}
          <polygon points="-8,-8 0,-18 -5,-14" fill="#E0F7FA" opacity="0.9" />
          <polygon points="8,-8 0,-18 5,-14" fill="#B2EBF2" opacity="0.9" />
          
          {/* Pavilion (Bottom Pointed Facets) */}
          <polygon points="-8,-8 0,-3 8,-8" fill="url(#diamondPavilion)" />
          <polygon points="-8,-8 0,-3 0,-18" fill="#FFFFFF" opacity="0.65" />
          <polygon points="8,-8 0,-3 0,-18" fill="#80DEEA" opacity="0.75" />
          
          {/* Diamond Edge Outlines */}
          <polygon points="-5,-14 5,-14 8,-8 0,-3 -8,-8" stroke="#FFFFFF" strokeWidth="0.6" fill="none" />
          <line x1="0" y1="-18" x2="0" y2="-3" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.8" />
        </g>

        {/* Diamond Sparkle Rays & Starburst Effects */}
        <g className="animate-pulse">
          <path d="M0 -24 V-18 M0 -3 V3 M-12 -10 H-6 M12 -10 H6 M-8 -18 L-4 -14 M8 -18 L4 -14 M-8 -2 L-4 -6 M8 -2 L4 -6" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
          <circle cx="0" cy="-10" r="2" fill="#FFFFFF" />
        </g>
      </g>
    </g>
  </svg>
);

function ClosingPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${invitation.groom} & ${invitation.bride}'s Engagement Invitation`,
      text: `You are cordially invited to celebrate the engagement of ${invitation.groom} & ${invitation.bride}!`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <PageShell>
      <section className="w-full min-h-[85vh] flex flex-col items-center justify-start sm:justify-center px-3 sm:px-6 py-4 sm:py-8 mt-[22vh] sm:mt-[22vh] md:mt-24 select-none">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center space-y-3 sm:space-y-5">

          {/* Central Animated Floating Couple Rings & Mandala Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center my-1 sm:my-2"
          >
            {/* Dual Rotating Mandalas */}
            <RotatingMandala className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 text-gold/30 pointer-events-none" />
            <RotatingMandala className="absolute w-14 h-14 sm:w-20 sm:h-20 text-gold/20 pointer-events-none -rotate-180" />
            
            {/* Soft Ambient Radial Glow Halo */}
            <div className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-radial from-gold/30 via-gold/10 to-transparent blur-md pointer-events-none" />

            {/* Couple Engagement Rings Icon */}
            <CoupleRingsIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative z-10 drop-shadow-[0_4px_14px_rgba(201,162,39,0.5)]" />
          </motion.div>

          {/* Floating Gratitude Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col items-center max-w-xl px-2"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-1 sm:mt-2">
              <TitleFlourish className="rotate-180 hidden sm:block w-20 md:w-28" />
              <h2 
                className="script text-3xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
              >
                With Grateful Hearts
              </h2>
              <TitleFlourish className="hidden sm:block w-20 md:w-28" />
            </div>

            {/* Closing Quote */}
            <p className="display italic text-sm sm:text-xl md:text-2xl text-maroon-deep leading-relaxed font-medium mt-1">
              "{invitation.closing}"
            </p>
          </motion.div>

          {/* Animated Gold Ornament Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex items-center gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm"
          >
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/60 to-gold/30" />
            <span className="text-gold text-xs sm:text-sm">✦</span>
            <span className="label text-[8px] sm:text-[9px] text-gold/70 uppercase tracking-[0.35em] font-bold">Two Souls, One Journey</span>
            <span className="text-gold text-xs sm:text-sm">✦</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/60 to-gold/30" />
          </motion.div>

          {/* Royal Couple Monogram & Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center max-w-full"
          >
            <span className="label text-[8.5px] sm:text-[10px] text-gold uppercase tracking-[0.35em] font-bold">
              With Warm Regards
            </span>
            <h3 
              className="script text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-maroon drop-shadow-xl mt-1 leading-none whitespace-nowrap"
              style={{ textShadow: "0 6px 24px rgba(201,162,39,0.4)" }}
            >
              {invitation.groom} <span className="text-gold script text-2xl xs:text-3xl sm:text-5xl md:text-6xl">&</span> {invitation.bride}
            </h3>

            {/* Event Badge Pill */}
            <div className="mt-3 sm:mt-4 px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-gold/15 via-gold/25 to-gold/15 border border-gold/40 shadow-xs max-w-full overflow-hidden">
              <p className="label text-[7.5px] xs:text-[8.5px] sm:text-[10px] text-gold uppercase tracking-wider font-bold whitespace-nowrap">
                ✦ 21 September 2026 • Heritage Palace, Jaipur ✦
              </p>
            </div>

            <p className="label text-[7.5px] xs:text-[8.5px] sm:text-[11px] text-gold/90 mt-2 uppercase tracking-[0.15em] sm:tracking-[0.25em] font-semibold whitespace-nowrap">
              Thank You For Being Part Of Our Story
            </p>
          </motion.div>

          {/* Floating Blessing Stanza */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="flex flex-col items-center gap-1 max-w-sm sm:max-w-md px-3"
          >
            <div className="flex items-center gap-2 w-full justify-center opacity-70">
              <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/60 text-[10px]">❋</span>
              <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <p className="display italic text-[10px] sm:text-xs text-maroon-deep/70 leading-relaxed font-medium text-center">
              May the blessings of our elders, the joy of our families,<br className="hidden sm:block"/>
              and the grace of the divine light your path always.
            </p>
            <div className="flex gap-2 mt-1 text-[9px] sm:text-xs text-gold/50">
              <span>🪷</span>
              <span>🕯️</span>
              <span>🪷</span>
            </div>
          </motion.div>

          {/* Bottom Pichwai Cows Art Motif */}
          <motion.img 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.9 }} 
            transition={{ delay: 0.9, duration: 1.5 }}
            src={cows} 
            alt="Pichwai Art" 
            aria-hidden 
            className="mt-2 sm:mt-4 w-full max-w-[220px] sm:max-w-md max-h-14 sm:max-h-20 object-contain drop-shadow-md pointer-events-none" 
            loading="lazy" 
          />

        </div>
      </section>
    </PageShell>
  );
}


