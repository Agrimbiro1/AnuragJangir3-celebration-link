import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { RotatingMandala } from "@/components/invitation/AnimatedDecorations";

export const Route = createFileRoute("/events")({ component: EventsPage });

// Gold Filigree Divider with Star Motifs
const HeaderFiligree = () => (
  <motion.svg 
    viewBox="0 0 200 30" 
    className="w-48 md:w-56 mx-auto text-gold mt-2 md:mt-3 drop-shadow-md"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <path d="M10 15 Q50 15, 100 5 T190 15 M10 15 Q50 15, 100 25 T190 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M50 15 L53 10 L56 15 L61 18 L56 21 L53 26 L50 21 L45 18 Z" fill="currentColor" transform="translate(-50, -15) scale(0.6) translate(50, 15)" />
    <path d="M150 15 L153 10 L156 15 L161 18 L156 21 L153 26 L150 21 L145 18 Z" fill="currentColor" transform="translate(-150, -15) scale(0.6) translate(150, 15)" />
    <circle cx="100" cy="15" r="3" fill="currentColor" />
  </motion.svg>
);

const CardDivider = () => (
  <div className="flex items-center justify-center w-full my-4 md:my-3">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-3 md:h-3 mx-3 md:mx-2 text-gold animate-[pulse_3s_infinite]">
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" opacity="0.8" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
  </div>
);

// Extracted Card Component for reuse in Mobile & Desktop views
const EventCard = ({ e, i, isMobile = false }: { e: typeof invitation.events[0]; i: number, isMobile?: boolean }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative bg-gradient-to-br from-[#E2B75A] via-[#FDF5D3] to-[#B0852A] rounded-t-[70px] md:rounded-t-[80px] rounded-b-xl p-1.5 shadow-[0_20px_50px_rgba(201,162,39,0.35)] group w-full ${isMobile ? 'max-w-[380px] mx-auto' : ''}`}
    >
      <div className="h-full">
        {/* Thick Gold Foil Outer Border */}
        <div className="relative rounded-t-[70px] md:rounded-t-[80px] rounded-b-lg h-full overflow-hidden">
          
          {/* Animated Spinning Border Container */}
          <div className="absolute inset-0 rounded-t-[70px] md:rounded-t-[80px] rounded-b-lg overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_var(--border-angle),#D4AF37_0%,transparent_15%,transparent_85%,#D4AF37_100%)] animate-spin-border opacity-80" />
          </div>

          <div className="absolute inset-[2px] rounded-t-[68px] md:rounded-t-[78px] rounded-b-[7px] bg-[#FDFBF7] z-0" />
          
          {/* Subtle Inner Pattern Background */}
          <div className="absolute inset-1.5 rounded-t-[60px] md:rounded-t-[68px] rounded-b-md bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iI2NkYTM0ZiIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KCTwvc3ZnPg==')] opacity-[0.35] pointer-events-none z-10" />
          
          {/* Inner Card Content */}
          <div className="relative z-20 h-full px-4 pt-5 pb-4 md:px-5 md:pt-6 md:pb-5 flex flex-col items-center text-center rounded-t-[60px] md:rounded-t-[68px] rounded-b-md m-0.5 overflow-hidden">
            
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 border-[1px] border-[#D4AF37]/20 rounded-b-full pointer-events-none" />
            
            {/* Animated Corner Mandalas */}
            <RotatingMandala className="absolute top-2 left-2 w-6 h-6 opacity-[0.25]" />
            <RotatingMandala className="absolute top-2 right-2 w-6 h-6 opacity-[0.25]" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full select-none mt-1">
              
              <div className="flex items-center space-x-2 mb-1.5">
                 <div className="w-4 md:w-6 h-[1px] bg-gold/60" />
                 <p className="label text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-gold font-bold drop-shadow-sm">
                   Ceremony {String(i + 1).padStart(2, "0")}
                 </p>
                 <div className="w-4 md:w-6 h-[1px] bg-gold/60" />
              </div>
              
              <h3 className="display text-lg sm:text-xl md:text-3xl text-maroon-deep mb-1 px-1 md:px-2 leading-snug drop-shadow-md">
                {e.name}
              </h3>
              
              <div className="flex items-center justify-center w-full my-2">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                <svg viewBox="0 0 24 24" className="w-3 h-3 mx-2 text-gold animate-[pulse_3s_infinite]">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" opacity="0.8" />
                </svg>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              </div>
              
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 w-full flex flex-col items-center mt-1">
                <div className="flex flex-col items-center">
                  <p className="label text-[9px] md:text-[10px] text-gold/80 uppercase tracking-[0.3em] mb-0.5">Date</p>
                  <p className="display text-xs sm:text-sm md:text-base text-[#3A2218] font-medium leading-none">{e.date}</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <p className="label text-[9px] md:text-[10px] text-gold/80 uppercase tracking-[0.3em] mb-0.5">Time</p>
                  <p className="text-[11px] sm:text-xs md:text-sm text-maroon-deep/90 font-semibold leading-none">{e.time}</p>
                </div>
                
                <div className="flex flex-col items-center pt-0.5">
                  <p className="label text-[9px] md:text-[10px] text-gold/80 uppercase tracking-[0.3em] mb-0.5">Venue</p>
                  <p className="text-[11px] sm:text-xs md:text-sm text-[#3A2218] font-bold px-1 md:px-4 leading-tight">{e.venue}</p>
                </div>
                
                {e.dress && (
                  <div className="mt-3 md:mt-4 inline-block border-[1.5px] border-gold/50 rounded-full px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 shadow-[0_2px_8px_rgba(201,162,39,0.15)] transition-shadow duration-300">
                    <p className="text-[10px] sm:text-[11px] md:text-xs text-maroon-deep font-semibold"><span className="label text-gold mr-1.5 md:mr-2 uppercase tracking-widest font-bold">Attire:</span>{e.dress}</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(0);

  // Auto-slide on mobile just for fun luxury feel
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        setActiveEvent(prev => (prev + 1) % invitation.events.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageShell>
      {/* 
        Fully responsive height design. Uses scale trick ONLY if it natively overflows, but intrinsic sizes are reduced.
      */}
      <section className="w-full h-full flex flex-col items-center justify-center px-0 sm:px-2 md:px-4 origin-center scale-100 mt-[7vh] md:mt-0 select-none">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center select-none">
          
          {/* Header Section */}
          <div className="text-center mb-5 md:mb-5 w-full flex flex-col items-center">
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="label text-[11px] md:text-[10px] text-gold uppercase tracking-[0.5em] mb-1 drop-shadow-sm font-bold"
            >
              Shubh Muhurat
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="script text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-maroon drop-shadow-lg leading-tight whitespace-nowrap"
              style={{ textShadow: "0 4px 15px rgba(201,162,39,0.4)" }}
            >
              Our Celebrations
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 gap-1 sm:gap-6 md:gap-8 lg:gap-10 mt-1 w-full max-w-5xl px-0.5 sm:px-2 lg:px-4">
            {invitation.events.map((e, i) => (
              <EventCard key={e.name} e={e} i={i} />
            ))}
          </div>

        </div>
      </section>
    </PageShell>
  );
}
