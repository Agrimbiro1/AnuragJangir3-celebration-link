import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import cows from "@/assets/pichwai-cows.png";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { RotatingMandala } from "@/components/invitation/AnimatedDecorations";

export const Route = createFileRoute("/countdown")({ component: CountdownPage });

function useCountdown(target: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  };
}

// Calligraphic Flourish
const TitleFlourish = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={`w-8 sm:w-12 md:w-16 h-auto text-gold drop-shadow-md shrink-0 ${className}`}>
    <path d="M0 10 Q25 0, 50 10 T100 10 M25 10 Q37.5 20, 50 10 T75 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="10" r="2.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="90" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// Ornate Corner Filigree Ornament
const CornerFiligree = ({ className }: { className: string }) => (
  <svg viewBox="0 0 36 36" className={`w-5 h-5 sm:w-6 sm:h-6 text-gold/60 pointer-events-none z-20 ${className}`}>
    <path d="M 2 2 L 18 2 C 18 10, 10 18, 2 18 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M 2 2 L 10 2 C 10 6, 6 10, 2 10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
    <circle cx="5" cy="5" r="1.2" fill="currentColor" />
  </svg>
);

function CountdownPage() {
  const { d, h, m, s, done } = useCountdown(invitation.targetDate);
  
  const units = useMemo(
    () => [
      { v: d, l: "Days" },
      { v: h, l: "Hours" },
      { v: m, l: "Minutes" },
      { v: s, l: "Seconds", isPulse: false },
    ],
    [d, h, m, s]
  );

  return (
    <PageShell>
      <section className="w-full min-h-[84vh] flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-6 md:py-8 mt-[28vh] sm:mt-10 md:mt-14 select-none">
        <div className="max-w-4xl w-full mx-auto text-center relative z-10 px-2 sm:px-4 flex flex-col items-center">
          
          {/* Couple Banner Title */}
          <div className="flex items-center justify-center space-x-1 sm:space-x-3 mt-1 sm:mt-2 w-full flex-nowrap">
            <TitleFlourish className="rotate-180 w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="script text-2xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
              style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
            >
              Until We Say Yes
            </motion.h2>
            <TitleFlourish className="w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
          </div>

          {/* Event Date Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-maroon-deep shadow-sm mb-4"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gold fill-none stroke-currentColor stroke-2 shrink-0">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="label text-[9px] sm:text-[10.5px] text-maroon-deep font-bold tracking-wider uppercase">
              Sunday, 21<sup>st</sup> September 2026 • Jaipur, India
            </span>
          </motion.div>

          {/* Royal Jharokha Palace Arch Countdown Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-[2.5px] md:p-[3.5px] bg-gradient-to-br from-[#E2B75A] via-[#FDF5D3] to-[#B0852A] rounded-t-[60px] sm:rounded-t-[76px] md:rounded-t-[90px] rounded-b-2xl shadow-[0_22px_60px_rgba(122,31,43,0.22)] hover:shadow-[0_25px_65px_rgba(201,162,39,0.4)] transition-all duration-300 group w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mt-2"
          >
            <div className="relative rounded-t-[57px] sm:rounded-t-[73px] md:rounded-t-[87px] rounded-b-[14px] overflow-hidden flex flex-col justify-between">
              
              {/* Animated Spinning Border Container */}
              <div className="absolute inset-0 rounded-t-[57px] sm:rounded-t-[73px] md:rounded-t-[87px] rounded-b-[14px] overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-[220%] h-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_var(--border-angle),#D4AF37_0%,transparent_16%,transparent_84%,#D4AF37_100%)] animate-spin-border opacity-85" />
              </div>

              {/* Solid Card Background Base - Clean Ivory Silk Parchment */}
              <div className="absolute inset-[1.5px] md:inset-[2px] rounded-t-[55px] sm:rounded-t-[71px] md:rounded-t-[85px] rounded-b-[12px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EA] to-[#F3EAD8] z-0" />
              <div className="absolute inset-0 rounded-t-[55px] sm:rounded-t-[71px] md:rounded-t-[85px] rounded-b-[12px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/25 via-transparent to-transparent pointer-events-none z-0" />
              
              {/* Inner Dashed Gold Line Frame Decoration */}
              <div className="absolute inset-2 sm:inset-2.5 rounded-t-[48px] sm:rounded-t-[64px] md:rounded-t-[78px] rounded-b-lg border border-gold/40 border-dashed pointer-events-none z-10 opacity-70" />
              
              {/* Core Content Box */}
              <div className="relative z-20 p-4 pt-6 sm:p-6 sm:pt-8 md:p-8 text-center flex flex-col items-center justify-between rounded-t-[52px] sm:rounded-t-[68px] md:rounded-t-[82px] rounded-b-lg m-[2px] overflow-hidden">
                
                {/* Animated Light Reflection */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-7 border-b-[1.5px] border-x-[1.5px] border-gold/35 rounded-b-full pointer-events-none bg-gold/10" />
                
                {/* Corner Filigree Ornaments */}
                <CornerFiligree className="absolute top-2 left-2" />
                <CornerFiligree className="absolute top-2 right-2 rotate-90" />
                <CornerFiligree className="absolute bottom-2 left-2 -rotate-90" />
                <CornerFiligree className="absolute bottom-2 right-2 rotate-180" />

                {/* Rotating Corner Mandalas */}
                <RotatingMandala className="absolute top-3 left-3 w-4 h-4 opacity-30 text-gold" />
                <RotatingMandala className="absolute top-3 right-3 w-4 h-4 opacity-30 text-gold" />

                {done ? (
                  <p className="script text-3xl sm:text-4xl md:text-5xl text-maroon relative z-10 my-4 md:my-8 drop-shadow-md flex items-center justify-center gap-2">
                    <span>Today is the Joyous Day!</span>
                    <Sparkles className="w-5 h-5 text-gold inline" />
                  </p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 relative z-10 w-full py-1 sm:py-2">
                    {units.map((u) => (
                      <div
                        key={u.l}
                        className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-t-full rounded-b-2xl bg-gradient-to-b from-[#FFFDFB] via-[#FAF3E0] to-[#F4E8D3] border-2 border-gold/60 shadow-[0_8px_20px_rgba(122,31,43,0.1)] relative overflow-hidden group/tile transition-all duration-300 hover:scale-105 hover:border-gold"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Number Display with 3D Gold Foil Styling */}
                        <div className="relative overflow-hidden h-12 sm:h-16 md:h-20 flex items-center justify-center my-0.5">
                          <AnimatePresence mode="popLayout">
                            <motion.span
                              key={u.v}
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                              className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FFEFA8] via-[#D4AF37] to-[#805C00] drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] leading-none"
                            >
                              {String(u.v).padStart(2, "0")}
                            </motion.span>
                          </AnimatePresence>
                        </div>

                        {/* Label Badge with Gold Sparkles */}
                        <div className="flex items-center space-x-1.5 mt-1 sm:mt-2 pt-1 border-t border-gold/30 w-full justify-center">
                          <span className="text-gold text-[7px] sm:text-[9px]">✦</span>
                          <span className="label text-[9px] sm:text-[10.5px] md:text-[11.5px] text-maroon-deep uppercase tracking-[0.25em] font-bold">
                            {u.l}
                          </span>
                          <span className="text-gold text-[7px] sm:text-[9px]">✦</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="display italic text-maroon-deep/90 text-xs sm:text-sm md:text-base mt-4 sm:mt-6 max-w-md font-semibold"
          >
            "Every moment brings us closer to forever."
          </motion.p>

          {/* Bottom Pichwai Cows Art Banner */}
          <motion.img 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.9 }} 
            transition={{ delay: 0.8, duration: 1.5 }}
            src={cows} 
            alt="Pichwai Art" 
            aria-hidden 
            className="mt-3 sm:mt-5 w-full max-w-xs md:max-w-sm max-h-16 md:max-h-20 object-contain drop-shadow-md pointer-events-none" 
            loading="lazy" 
          />

        </div>
      </section>
    </PageShell>
  );
}


