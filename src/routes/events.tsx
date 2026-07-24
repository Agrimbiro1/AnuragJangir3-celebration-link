import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { RotatingMandala, AnimatedDivider } from "@/components/invitation/AnimatedDecorations";

export const Route = createFileRoute("/events")({ component: EventsPage });

// Intricate Calligraphic Flourish
const TitleFlourish = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={`w-8 sm:w-12 md:w-16 h-auto text-gold drop-shadow-md shrink-0 ${className}`}>
    <path d="M0 10 Q25 0, 50 10 T100 10 M25 10 Q37.5 20, 50 10 T75 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="10" r="2.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="90" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// Helper to generate Google Calendar links
const createGoogleCalendarLink = (event: typeof invitation.events[0]) => {
  const title = encodeURIComponent(`${invitation.groom} & ${invitation.bride} - ${event.name}`);
  const details = encodeURIComponent(`${event.note}\nDress Code: ${event.dress}`);
  const location = encodeURIComponent(event.venue);
  const dates = event.time.includes("10:30") 
    ? "20260921T050000Z/20260921T083000Z" 
    : "20260921T133000Z/20260921T173000Z";
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
};

// Custom SVG Emblem for Ceremony 1 (Ring / Kalash motif)
const RingCeremonyEmblem = () => (
  <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold via-amber-200 to-gold p-0.5 shadow-[0_0_16px_rgba(212,175,55,0.45)]">
    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFFDFB] to-[#FAF3E2] flex items-center justify-center border border-gold/60">
      <svg viewBox="0 0 48 48" className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-gold drop-shadow-xs">
        <circle cx="19" cy="26" r="9" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="29" cy="26" r="9" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <path d="M19 13 L22 17 L16 17 Z" fill="#FDF5D3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M29 13 L32 17 L26 17 Z" fill="#FDF5D3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="10" r="1.5" fill="currentColor" />
        <circle cx="29" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  </div>
);

// Custom SVG Emblem for Ceremony 2 (Sangeet / Music motif)
const SangeetEmblem = () => (
  <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gold via-amber-200 to-gold p-0.5 shadow-[0_0_16px_rgba(212,175,55,0.45)]">
    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFFDFB] to-[#FAF3E2] flex items-center justify-center border border-gold/60">
      <svg viewBox="0 0 48 48" className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-gold drop-shadow-xs">
        <path d="M12 28 C12 36 20 40 24 40 C28 40 36 36 36 28 C36 20 28 16 24 16 C20 16 12 20 12 28 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="24" cy="20" rx="10" ry="4" fill="#FDF5D3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 22 L18 36 M30 22 L30 36" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
        <path d="M28 8 L34 6 L34 14 M28 8 L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="26" cy="16" r="2.5" fill="currentColor" />
        <circle cx="32" cy="14" r="2.5" fill="currentColor" />
      </svg>
    </div>
  </div>
);

// Extracted Card Component (Desktop sleek height, Mobile compact & balanced)
const EventCard = ({ e, i }: { e: typeof invitation.events[0]; i: number }) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-gradient-to-br from-[#E2B75A] via-[#FDF5D3] to-[#B0852A] rounded-t-[48px] sm:rounded-t-[60px] md:rounded-t-[70px] rounded-b-xl p-[2px] md:p-[3px] shadow-[0_14px_38px_rgba(122,31,43,0.16)] md:shadow-[0_18px_45px_rgba(122,31,43,0.18)] hover:shadow-[0_22px_55px_rgba(201,162,39,0.42)] transition-all duration-300 group w-full flex flex-col h-full hover:-translate-y-1"
    >
      {/* Outer Glow Border Effect */}
      <div className="relative rounded-t-[46px] sm:rounded-t-[58px] md:rounded-t-[67px] rounded-b-[10px] md:rounded-b-[13px] h-full overflow-hidden flex flex-col justify-between">
        
        {/* Animated Spinning Border Conic Layer */}
        <div className="absolute inset-0 rounded-t-[46px] sm:rounded-t-[58px] md:rounded-t-[67px] rounded-b-[10px] md:rounded-b-[13px] overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[220%] h-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_var(--border-angle),#D4AF37_0%,#FFF7C2_15%,transparent_35%,transparent_65%,#D4AF37_85%,#FFF7C2_100%)] animate-spin-border opacity-90" />
        </div>

        {/* Solid Card Background Base with Rich Silk Luster */}
        <div className="absolute inset-[1.5px] md:inset-[2px] rounded-t-[44px] sm:rounded-t-[56px] md:rounded-t-[65px] rounded-b-[8px] md:rounded-b-[11px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E2] to-[#F5E8CE] z-0" />
        
        {/* Fine Micro Pattern Overlay */}
        <div className="absolute inset-1 md:inset-1.5 rounded-t-[42px] sm:rounded-t-[54px] md:rounded-t-[62px] rounded-b-md md:rounded-b-lg bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iI2NkYTM0ZiIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+Cgk8L3N2Zz4=')] opacity-35 pointer-events-none z-10" />
        
        {/* Card Content Wrapper */}
        <div className="relative z-20 h-full px-2.5 pt-4 pb-3.5 sm:px-4 sm:pt-4 sm:pb-4 md:px-5 md:pt-5 md:pb-5 flex flex-col justify-between items-center text-center rounded-t-[42px] sm:rounded-t-[54px] md:rounded-t-[62px] rounded-b-md m-0.5 overflow-hidden">
          
          {/* Top Content Block */}
          <div className="w-full flex flex-col items-center">
            {/* Animated Light Reflection */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
            
            {/* Top Arch Filigree Accent (Desktop only) */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 border-b-[1.5px] border-x-[1.5px] border-gold/40 rounded-b-full pointer-events-none bg-gold/10" />

            {/* Corner Mandalas */}
            <RotatingMandala className="absolute top-2 left-2 md:top-2.5 md:left-2.5 w-5 h-5 md:w-6 md:h-6 opacity-30 text-gold" />
            <RotatingMandala className="absolute top-2 right-2 md:top-2.5 md:right-2.5 w-5 h-5 md:w-6 md:h-6 opacity-30 text-gold" />

            {/* Header Emblem */}
            <div className="relative z-10 mb-1 mt-0.5 md:mb-1.5 md:mt-0.5">
              {i === 0 ? <RingCeremonyEmblem /> : <SangeetEmblem />}
            </div>

            {/* Ceremony Tag Pill */}
            <div className="flex items-center space-x-1 md:space-x-2 mb-0.5 md:mb-1 z-10">
              <div className="w-3 md:w-4 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <span className="label text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider md:tracking-[0.3em] text-maroon-deep font-extrabold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-gold/15 via-gold/30 to-gold/15 border border-gold/45 shadow-2xs whitespace-nowrap">
                Ceremony {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-3 md:w-4 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Event Title (Fixed min-height for uniform alignment across both cards) */}
            <div className="min-h-[42px] sm:min-h-[44px] md:min-h-[48px] flex items-center justify-center w-full px-1">
              <h3 className="display text-sm sm:text-base md:text-2xl text-maroon-deep font-bold leading-tight md:leading-snug drop-shadow-xs">
                {e.name}
              </h3>
            </div>

            <AnimatedDivider className="w-24 sm:w-32 md:w-36 my-1 md:my-1.5" />

            {/* Event Note (Full on desktop, hidden on mobile for clean card height) */}
            {e.note && (
              <p className="hidden md:block display italic text-xs md:text-sm text-maroon-deep/90 max-w-xs mb-2 leading-snug px-2 font-medium">
                "{e.note}"
              </p>
            )}

            {/* Event Metadata (SVG Icons, NO emojis) */}
            <div className="w-full my-1 md:my-1.5">
              
              {/* Mobile Metadata Layout (< md) - Clean SVGs */}
              <div className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl bg-gradient-to-br from-[#FFFDFB]/95 via-[#FAF4E8]/90 to-[#F5EAD4]/95 border border-gold/45 text-[8.5px] text-left shadow-xs w-full min-h-[76px] justify-center">
                <div className="grid grid-cols-2 gap-1 pb-1 border-b border-gold/25">
                  <div className="flex items-center space-x-1 min-w-0">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-gold fill-none stroke-currentColor stroke-[2.2] shrink-0">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="text-maroon-deep font-bold truncate">21 Sep 2026</span>
                  </div>

                  <div className="flex items-center space-x-1 min-w-0">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-gold fill-none stroke-currentColor stroke-[2.2] shrink-0">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-maroon-deep font-bold truncate">{e.time}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 min-w-0">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-maroon fill-none stroke-currentColor stroke-[2.2] shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-[#3A2218] font-extrabold truncate leading-tight">{e.venue}</span>
                </div>

                {e.dress && (
                  <div className="flex items-center space-x-1 min-w-0 pt-0.5 border-t border-gold/25">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-gold fill-currentColor shrink-0">
                      <path d="M12 2L15 9L22 12L15 15L12 22L9 9L12 2Z" />
                    </svg>
                    <span className="text-gold font-extrabold text-[7.5px] uppercase tracking-wider">Attire:</span>
                    <span className="text-maroon-deep font-bold truncate">{e.dress}</span>
                  </div>
                )}
              </div>

              {/* Desktop Metadata Layout (>= md) */}
              <div className="hidden md:block space-y-2">
                <div className="flex flex-row items-center justify-between gap-2 p-2 rounded-xl bg-gradient-to-br from-[#FFFDFB]/95 via-[#FAF4E8]/90 to-[#F5EAD4]/95 border border-gold/45 shadow-xs">
                  <div className="flex items-center space-x-2 text-left">
                    <div className="p-1.5 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#9E731F] stroke-[2.2]">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="label text-[7.5px] text-gold uppercase tracking-widest font-extrabold">Date</p>
                      <p className="text-xs font-bold text-maroon-deep">{e.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-left border-l border-gold/25 pl-2.5">
                    <div className="p-1.5 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#9E731F] stroke-[2.2]">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="label text-[7.5px] text-gold uppercase tracking-widest font-extrabold">Time</p>
                      <p className="text-xs font-bold text-maroon-deep">{e.time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-gradient-to-br from-[#FFFDFB]/95 via-[#FAF4E8]/90 to-[#F5EAD4]/95 border border-gold/45 shadow-xs text-left">
                  <div className="p-1.5 rounded-lg bg-maroon/15 border border-maroon/30 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#7A1F2B] stroke-[2.2]">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="label text-[7.5px] text-gold uppercase tracking-widest font-extrabold">Venue</p>
                    <p className="text-xs font-bold text-[#3A2218] truncate">{e.venue}</p>
                  </div>
                </div>

                {e.dress && (
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-gold/15 via-gold/30 to-gold/15 border border-gold/45 text-maroon-deep shadow-2xs">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#9E731F]">
                      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                    </svg>
                    <span className="label text-[8px] text-gold uppercase tracking-wider font-extrabold">Attire:</span>
                    <span className="text-[11px] font-bold text-maroon-deep">{e.dress}</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Bottom Action Buttons - Stacked Vertical Column Layout */}
          <div className="mt-1 md:mt-3 pt-1 md:pt-2 border-t border-gold/30 w-full flex flex-col items-center justify-center gap-1.5 md:gap-2 z-30 px-1">
            <motion.a
              href={createGoogleCalendarLink(e)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative w-full h-[34px] sm:h-[38px] flex items-center justify-between px-3 bg-gradient-to-r from-[#4A0E17] via-[#7A1F2B] to-[#4A0E17] text-[#FFF8D6] text-[9px] xs:text-[10px] sm:text-[11px] font-extrabold rounded-xl shadow-[0_4px_14px_rgba(122,31,43,0.35)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.5)] transition-all cursor-pointer whitespace-nowrap border-1.5 border-gold/60 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:animate-[shimmer_1.8s_infinite]" />
              <div className="relative z-10 flex items-center justify-between w-full">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-[2.2] text-gold shrink-0 drop-shadow-xs">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="flex-1 text-center font-extrabold tracking-wide px-1">Add to Calendar</span>
                <span className="w-4 h-4 shrink-0 pointer-events-none" aria-hidden="true" />
              </div>
            </motion.a>

            <motion.button
              onClick={() => navigate({ to: "/venue" })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative w-full h-[34px] sm:h-[38px] flex items-center justify-between px-3 bg-gradient-to-r from-gold/20 via-amber-200/35 to-gold/20 hover:bg-gold/40 border-1.5 border-gold/60 text-maroon-deep text-[9px] xs:text-[10px] sm:text-[11px] font-extrabold rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-xs backdrop-blur-xs overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-between w-full">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-[2.2] text-maroon-deep shrink-0">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
                <span className="flex-1 text-center font-extrabold tracking-wide px-1">View Venue</span>
                <span className="w-4 h-4 shrink-0 pointer-events-none" aria-hidden="true" />
              </div>
            </motion.button>
          </div>

        </div>
      </div>
    </motion.article>
  );
};

function EventsPage() {
  return (
    <PageShell>
      <section className="w-full min-h-[82vh] flex flex-col items-center justify-center px-1.5 sm:px-4 py-4 sm:py-6 md:py-10 mt-[22vh] sm:mt-8 md:mt-12 select-none">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
          
          {/* Header Section */}
          <div className="text-center mb-2 sm:mb-4 md:mb-8 w-full flex flex-col items-center">
            <div className="flex items-center justify-center space-x-1 sm:space-x-3 mt-1 sm:mt-2 w-full flex-nowrap">
              <TitleFlourish className="rotate-180 w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="script text-2xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
              >
                Our Celebrations
              </motion.h2>
              <TitleFlourish className="w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="display italic text-maroon-deep/80 text-xs sm:text-sm md:text-base mt-0.5 max-w-md"
            >
              Join us in honoring sacred traditions & joyous festivities
            </motion.p>
          </div>

          {/* Event Cards Row Grid (2 columns on mobile & desktop with items-stretch for equal height) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 lg:gap-10 w-full max-w-5xl px-0.5 sm:px-4 items-stretch">
            {invitation.events.map((e, i) => (
              <EventCard key={e.name} e={e} i={i} />
            ))}
          </div>

        </div>
      </section>
    </PageShell>
  );
}


