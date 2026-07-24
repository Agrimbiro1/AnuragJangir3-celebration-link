import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import cows from "@/assets/pichwai-cows.png";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { RotatingMandala } from "@/components/invitation/AnimatedDecorations";
import { useGuestName } from "@/hooks/useGuestName";
import { Heart, Sparkles } from "lucide-react";

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
  const [blessingsSent, setBlessingsSent] = useState(false);
  const guestName = useGuestName("Warm Guest");

  const handleFlowerShower = () => {
    setBlessingsSent(true);
    setTimeout(() => setBlessingsSent(false), 3000);

    // Rose & Gold Flower Shower Confetti
    const count = 70;
    const defaults = {
      origin: { y: 0.7 },
      colors: ["#D4AF37", "#FDF5D3", "#E60067", "#FFB7C5", "#7A1F2B"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 30, startVelocity: 55, scalar: 0.9 });
    fire(0.2, { spread: 65 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 1.1 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  };

  return (
    <PageShell>
      <div className="w-full h-full flex flex-col items-center justify-start xs:justify-center px-3 xs:px-4 sm:px-6 py-2 sm:py-6 overflow-y-auto scrollbar-none select-none">
        
        {/* Strictly Containerless Content Section */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center my-auto space-y-2.5 xs:space-y-3 sm:space-y-5 mt-16 xs:mt-24 sm:mt-0">

          {/* Central Animated Floating Couple Rings & Mandala Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center my-1 sm:my-2"
          >
            {/* Dual Rotating Mandalas */}
            <RotatingMandala className="absolute w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 text-gold/35 pointer-events-none" />
            <RotatingMandala className="absolute w-14 h-14 xs:w-16 xs:h-16 sm:w-22 sm:h-22 text-gold/20 pointer-events-none -rotate-180" />
            
            {/* Soft Ambient Radial Glow Halo */}
            <div className="absolute w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 rounded-full bg-radial from-gold/30 via-gold/10 to-transparent blur-md pointer-events-none" />

            {/* Couple Engagement Rings Icon */}
            <CoupleRingsIcon className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 relative z-10 drop-shadow-[0_4px_16px_rgba(201,162,39,0.7)]" />
          </motion.div>

          {/* Guest Personalization Pill */}
          {guestName && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-gold/20 via-amber-200/30 to-gold/20 border border-gold/60 shadow-xs max-w-full"
            >
              <Sparkles className="w-3 h-3 text-gold animate-pulse shrink-0" />
              <span className="label text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] text-maroon-deep uppercase tracking-widest font-extrabold truncate">
                With Love To Dear {guestName}
              </span>
              <Sparkles className="w-3 h-3 text-gold animate-pulse shrink-0" />
            </motion.div>
          )}

          {/* Containerless Heading with Calligraphic Flourishes */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col items-center px-1 w-full"
          >
            <div className="flex items-center justify-center space-x-1 sm:space-x-3 w-full flex-nowrap">
              <TitleFlourish className="rotate-180 w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
              <h2 
                className="script text-2xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 18px rgba(201,162,39,0.35)" }}
              >
                With Grateful Hearts
              </h2>
              <TitleFlourish className="w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
            </div>

            {/* Closing Quote */}
            <p className="display italic text-xs xs:text-sm sm:text-xl md:text-2xl text-maroon-deep leading-relaxed font-semibold mt-1 max-w-md">
              "{invitation.closing}"
            </p>
          </motion.div>

          {/* Containerless Gold Filigree Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex items-center gap-2 w-full max-w-xs mx-auto my-1"
          >
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-gold text-xs sm:text-sm animate-spin-slow">✦</span>
            <span className="label text-[8px] xs:text-[9px] sm:text-[10px] text-gold uppercase tracking-[0.3em] font-extrabold whitespace-nowrap">
              Two Souls, One Journey
            </span>
            <span className="text-gold text-xs sm:text-sm animate-spin-slow">✦</span>
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>

          {/* Couple Names & Signature (Containerless Floating Text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="label text-[8.5px] xs:text-[9.5px] sm:text-[11px] text-gold uppercase tracking-[0.35em] font-bold">
              With Warm Regards & Gratitude
            </span>
            
            <h3 
              className="script text-3.5xl xs:text-4.5xl sm:text-6xl md:text-7xl lg:text-8xl text-maroon drop-shadow-xl mt-0.5 leading-none"
              style={{ textShadow: "0 6px 24px rgba(201,162,39,0.45)" }}
            >
              {invitation.groom} <span className="text-gold script text-2.5xl xs:text-3.5xl sm:text-5xl">&</span> {invitation.bride}
            </h3>

            {/* Event Date Badge Pill */}
            <div className="mt-2 sm:mt-3 px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-gold/15 via-gold/30 to-gold/15 border border-gold/50 shadow-xs inline-block max-w-full">
              <p className="label text-[7.5px] xs:text-[8.5px] sm:text-[10px] text-maroon font-bold uppercase tracking-wider">
                ✦ 21 September 2026 • Heritage Palace, Jaipur ✦
              </p>
            </div>

            <p className="label text-[8px] xs:text-[9px] sm:text-[11px] text-gold/90 mt-2 uppercase tracking-[0.2em] font-extrabold">
              Thank You For Being Part Of Our Story
            </p>
          </motion.div>

          {/* Flower Shower / Blessing Button Only */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center w-full max-w-xs mt-2"
          >
            <motion.button
              onClick={handleFlowerShower}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group px-6 py-2.5 rounded-full bg-gradient-to-r from-maroon via-maroon-deep to-maroon text-cream border border-gold/60 shadow-[0_6px_20px_rgba(122,31,43,0.35)] transition-all cursor-pointer overflow-hidden min-w-[210px]"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/30 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              <span className="relative z-10 label text-[10px] xs:text-xs font-bold tracking-[0.18em] flex items-center justify-center gap-2">
                <Heart className={`w-4 h-4 text-rose-300 transition-transform duration-300 ${blessingsSent ? "scale-110 text-rose-400" : ""}`} fill="#F43F5E" />
                <span>{blessingsSent ? "SHOWERING PETALS!" : "SHOWER PETALS"}</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Floating Blessing Stanza (Containerless) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center gap-1 mt-2 px-2"
          >
            <p className="display italic text-[11px] xs:text-xs sm:text-sm text-maroon-deep/80 leading-relaxed font-medium text-center">
              May the blessings of our elders, the joy of our families,<br className="hidden sm:block"/>
              and the grace of the divine light your path always.
            </p>
          </motion.div>

          {/* Bottom Pichwai Cows Art Motif */}
          <motion.img 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.9 }} 
            transition={{ delay: 0.85, duration: 1.2 }}
            src={cows} 
            alt="Pichwai Art" 
            aria-hidden 
            className="mt-2 mx-auto w-full max-w-[180px] xs:max-w-[220px] sm:max-w-xs max-h-12 sm:max-h-16 object-contain drop-shadow-md pointer-events-none" 
            loading="lazy" 
          />

        </div>
      </div>
    </PageShell>
  );
}




