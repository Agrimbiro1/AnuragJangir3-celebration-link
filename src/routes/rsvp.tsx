import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import elephant from "@/assets/elephant.png";
import { PageShell } from "@/components/invitation/PageShell";
import { useGuestName } from "@/hooks/useGuestName";

export const Route = createFileRoute("/rsvp")({ component: RsvpPage });

// Intricate Calligraphic Flourish
const TitleFlourish = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={`w-8 sm:w-12 md:w-16 h-auto text-gold drop-shadow-md shrink-0 ${className}`}>
    <path d="M0 10 Q25 0, 50 10 T100 10 M25 10 Q37.5 20, 50 10 T75 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="10" r="2.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="90" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// Containerless Rotating Royal Mandala Aura
const RoyalMandalaAura = () => (
  <svg viewBox="0 0 200 200" className="w-64 h-64 sm:w-80 sm:h-80 text-gold/20 animate-spin-slow pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
    <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.8" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <path d="M100 10 Q105 30 100 50 Q95 30 100 10 Z" fill="currentColor" opacity="0.4" />
        <circle cx="100" cy="20" r="2" fill="currentColor" />
      </g>
    ))}
  </svg>
);

function RsvpPage() {
  const guestName = useGuestName();
  const [response, setResponse] = useState<"idle" | "done">("idle");

  const celebrate = () => {
    const end = Date.now() + 1600;
    const colors = ["#D4AF37", "#FDF5D3", "#E2B75A", "#7A1F2B", "#9E2A3B"];
    (function frame() {
      confetti({ particleCount: 10, angle: 60, spread: 80, origin: { x: 0 }, colors, zIndex: 200 });
      confetti({ particleCount: 10, angle: 120, spread: 80, origin: { x: 1 }, colors, zIndex: 200 });
      confetti({ particleCount: 6, spread: 120, origin: { y: 0.75 }, colors, scalar: 1.2, zIndex: 200 });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleAccept = () => {
    celebrate();
    setResponse("done");
  };

  return (
    <PageShell>
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-between sm:justify-center px-4 pt-[18vh] sm:pt-[22vh] md:pt-16 pb-[74px] sm:pb-8 select-none overflow-hidden">
        
        {/* Background Procession Elephants (Containerless) */}
        <img
          src={elephant}
          alt=""
          aria-hidden
          className="absolute bottom-16 sm:bottom-12 left-1 sm:left-6 md:left-[10%] w-16 sm:w-28 md:w-36 opacity-75 sm:opacity-85 pointer-events-none animate-elephant z-0"
          loading="lazy"
        />
        <img
          src={elephant}
          alt=""
          aria-hidden
          className="absolute bottom-16 sm:bottom-12 right-1 sm:right-6 md:right-[10%] w-16 sm:w-28 md:w-36 opacity-75 sm:opacity-85 pointer-events-none animate-elephant-mirror z-0"
          loading="lazy"
        />

        {/* Center Container (Strictly Containerless - No Cards) */}
        <div className="max-w-3xl mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center my-auto">
          
          {/* Background Rotating Golden Mandala (No Box/Card) */}
          <RoyalMandalaAura />

          {/* SECTION HEADER */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <TitleFlourish className="rotate-180 hidden sm:block w-20 md:w-28" />
              <h2 
                className="script text-3xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
              >
                Will You Join Us?
              </h2>
              <TitleFlourish className="hidden sm:block w-20 md:w-28" />
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-3 my-2 sm:my-3">
              <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="text-gold text-base sm:text-lg animate-spin-slow">❋</span>
              <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </motion.div>

          {/* MAIN INTERACTIVE CONTENT CONTAINER (NO CARDS) */}
          <AnimatePresence mode="wait">
            {response === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-xl mx-auto px-2 mt-2 sm:mt-4 flex flex-col items-center"
              >
                {/* Personalized Greeting Text (Containerless) */}
                <p className="label text-[10px] sm:text-xs text-gold uppercase tracking-[0.3em] font-bold mb-1">
                  ✦ DEAR {guestName.toUpperCase()} ✦
                </p>

                <p className="display italic text-base sm:text-2xl md:text-3xl text-maroon-deep/90 max-w-md sm:max-w-xl leading-relaxed drop-shadow-xs mb-6 sm:mb-8 font-medium">
                  "In the garden of our lives, your presence blooms as our most cherished blessing. Grace our celebration with your love."
                </p>

                {/* Single Grand Action Button (Containerless) */}
                <div className="flex justify-center w-full max-w-md">
                  <button
                    onClick={handleAccept}
                    className="relative group px-9 sm:px-14 py-3.5 bg-gradient-to-r from-maroon via-maroon-deep to-maroon text-cream label text-xs sm:text-sm rounded-full shadow-[0_10px_30px_rgba(122,31,43,0.5)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] transition-all hover:scale-105 active:scale-95 overflow-hidden border border-gold/50 cursor-pointer"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                    <span className="relative z-10 font-bold tracking-[0.2em] drop-shadow-md flex items-center justify-center gap-2">
                      <span>✨</span> JOYFULLY ACCEPT <span>✨</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            )}

            {response === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 w-full max-w-lg mx-auto px-2 mt-2 sm:mt-4 flex flex-col items-center"
              >
                {/* Royal Stamp Seal Badge (Containerless) */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gold via-amber-300 to-gold p-0.5 shadow-[0_0_25px_rgba(212,175,55,0.7)] flex items-center justify-center mb-4 sm:mb-5 animate-pulse">
                  <div className="w-full h-full rounded-full bg-maroon flex items-center justify-center border border-gold/70">
                    <span className="text-2xl sm:text-3xl text-gold">👑</span>
                  </div>
                </div>

                <span className="label text-[9.5px] sm:text-[11px] text-gold uppercase tracking-[0.35em] font-extrabold mb-4 sm:mb-5">
                  ✦ RSVP CONFIRMED ✦
                </span>

                <h3 className="script text-3.5xl sm:text-6xl md:text-7xl text-maroon-deep drop-shadow-md leading-normal pt-2 sm:pt-3 mb-3 sm:mb-4">
                  Thank You, Dear {guestName}!
                </h3>

                <p className="display italic text-sm sm:text-xl md:text-2xl text-maroon max-w-md leading-relaxed drop-shadow-xs mb-3 font-medium">
                  Your love and presence are officially recorded. We cannot wait to celebrate together!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </PageShell>
  );
}
