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
      <div className="w-full h-[100dvh] flex flex-col justify-between items-center px-4 pt-[clamp(3rem,5dvh,4.25rem)] md:pt-0 lg:pt-0 pb-[clamp(5.5rem,12dvh,7.5rem)] overflow-hidden select-none">
        
        {/* Fluid Responsive Containerless Content Section with Generous Line Gaps */}
        <div className="w-full max-w-xl mx-auto flex-1 flex flex-col justify-between items-center text-center gap-[clamp(0.5rem,1.5dvh,1.5rem)]">

          {/* Central Animated Floating Couple Rings & Mandala Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center shrink-0 my-[clamp(0.2rem,0.5dvh,0.5rem)]"
          >
            {/* Dual Rotating Mandalas */}
            <RotatingMandala className="absolute text-gold/35 pointer-events-none w-[clamp(60px,10dvh,115px)] h-[clamp(60px,10dvh,115px)]" />
            <RotatingMandala className="absolute text-gold/20 pointer-events-none -rotate-180 w-[clamp(44px,7.5dvh,86px)] h-[clamp(44px,7.5dvh,86px)]" />
            
            {/* Soft Ambient Radial Glow Halo */}
            <div className="absolute rounded-full bg-radial from-gold/30 via-gold/10 to-transparent blur-md pointer-events-none w-[clamp(52px,8.5dvh,96px)] h-[clamp(52px,8.5dvh,96px)]" />

            {/* Couple Engagement Rings Icon */}
            <CoupleRingsIcon className="relative z-10 drop-shadow-[0_4px_16px_rgba(201,162,39,0.7)] w-[clamp(34px,5dvh,60px)] h-[clamp(34px,5dvh,60px)]" />
          </motion.div>

          {/* Guest Personalization Pill */}
          {guestName && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-1.5 px-[clamp(0.75rem,1.8vw,1.2rem)] py-[clamp(0.25rem,0.6dvh,0.45rem)] rounded-full bg-gradient-to-r from-gold/20 via-amber-200/30 to-gold/20 border border-gold/60 shadow-xs max-w-full shrink-0 my-[clamp(0.15rem,0.4dvh,0.4rem)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse shrink-0" />
              <span className="label text-[clamp(9px,0.6vw+0.7dvh,11.5px)] text-maroon-deep uppercase tracking-widest font-extrabold truncate">
                With Love To Dear {guestName}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse shrink-0" />
            </motion.div>
          )}

          {/* Containerless Heading with Calligraphic Flourishes */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col items-center px-1 w-full shrink-0 gap-[clamp(0.3rem,0.7dvh,0.7rem)]"
          >
            <div className="flex items-center justify-center space-x-1 sm:space-x-3 w-full flex-nowrap">
              <TitleFlourish className="rotate-180 text-gold drop-shadow-sm shrink-0 w-[clamp(30px,4vw+1dvh,96px)]" />
              <h2 
                className="script text-[clamp(1.65rem,2.2vw+2.6dvh,3.65rem)] text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 18px rgba(201,162,39,0.35)" }}
              >
                With Grateful Hearts
              </h2>
              <TitleFlourish className="text-gold drop-shadow-sm shrink-0 w-[clamp(30px,4vw+1dvh,96px)]" />
            </div>
          </motion.div>

          {/* Containerless Gold Filigree Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex items-center gap-2 w-full max-w-xs mx-auto shrink-0 my-[clamp(0.2rem,0.5dvh,0.5rem)]"
          >
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-gold text-[clamp(10px,1.1dvh,14px)] animate-spin-slow">✦</span>
            <span className="label text-[clamp(8px,0.55vw+0.65dvh,10.5px)] text-gold uppercase tracking-[0.25em] font-extrabold whitespace-nowrap">
              Two Souls, One Journey
            </span>
            <span className="text-gold text-[clamp(10px,1.1dvh,14px)] animate-spin-slow">✦</span>
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>

          {/* Couple Names & Signature (Containerless Floating Text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-col items-center shrink-0 gap-[clamp(0.3rem,0.7dvh,0.7rem)]"
          >
            <span className="label text-[clamp(8.5px,0.55vw+0.7dvh,11.5px)] text-gold uppercase tracking-[0.3em] font-bold">
              With Warm Regards & Gratitude
            </span>
            
            <h3 
              className="script text-[clamp(2.2rem,3vw+2.5dvh,3.85rem)] text-maroon drop-shadow-xl leading-none my-[clamp(0.2rem,0.5dvh,0.5rem)]"
              style={{ textShadow: "0 6px 24px rgba(201,162,39,0.45)" }}
            >
              {invitation.groom} <span className="text-gold script text-[clamp(1.65rem,2vw+2dvh,3rem)]">&</span> {invitation.bride}
            </h3>

            {/* Event Date Badge Pill */}
            <div className="px-[clamp(0.75rem,1.8vw,1.2rem)] py-[clamp(0.25rem,0.6dvh,0.45rem)] rounded-full bg-gradient-to-r from-gold/15 via-gold/30 to-gold/15 border border-gold/50 shadow-xs inline-block max-w-full my-[clamp(0.2rem,0.5dvh,0.5rem)]">
              <p className="label text-[clamp(8px,0.55vw+0.55dvh,10px)] text-maroon font-bold uppercase tracking-wider">
                ✦ 21 September 2026 • Heritage Palace, Jaipur ✦
              </p>
            </div>

            <p className="label text-[clamp(8px,0.55vw+0.65dvh,10.5px)] text-gold/90 uppercase tracking-[0.18em] font-extrabold mt-[clamp(0.2rem,0.5dvh,0.5rem)]">
              Thank You For Being Part Of Our Story
            </p>
          </motion.div>

          {/* Flower Shower / Blessing Button Only */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center w-full max-w-xs shrink-0 my-[clamp(0.3rem,0.7dvh,0.7rem)]"
          >
            <motion.button
              onClick={handleFlowerShower}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative group rounded-full bg-gradient-to-r from-[#4A0E17] via-[#7A1F2B] to-[#4A0E17] text-[#FFF8D6] border border-gold/70 shadow-[0_6px_20px_rgba(122,31,43,0.4)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.6)] transition-all cursor-pointer overflow-hidden w-[clamp(210px,60vw,290px)] h-[clamp(38px,5.2dvh,48px)] px-[clamp(1rem,2.5vw,2rem)] flex items-center justify-center"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:animate-[shimmer_1.8s_infinite]" />
              <span className="absolute inset-0 rounded-full ring-2 ring-gold/70 ring-offset-1 ring-offset-[#FAF3E2] pointer-events-none opacity-80" />
              <span className="relative z-10 label text-[clamp(10px,0.65vw+0.75dvh,12.5px)] font-extrabold tracking-[0.2em] flex items-center justify-center gap-2">
                <Heart className={`w-3.5 h-3.5 text-rose-300 transition-transform duration-300 ${blessingsSent ? "scale-125 text-rose-400" : ""}`} fill="#F43F5E" />
                <span>{blessingsSent ? "SHOWERING PETALS!" : "SHOWER PETALS"}</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Floating Blessing Stanza (Containerless) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center gap-0.5 px-2 shrink-0 pb-1 mt-[clamp(0.2rem,0.5dvh,0.5rem)]"
          >
            <p className="display italic text-[clamp(10.5px,0.65vw+0.75dvh,13.5px)] text-maroon-deep leading-snug font-semibold text-center drop-shadow-xs">
              May the blessings of our elders, the joy of our families,<br className="hidden sm:block"/>
              and the grace of the divine light your path always.
            </p>
          </motion.div>

        </div>
      </div>
    </PageShell>
  );
}




