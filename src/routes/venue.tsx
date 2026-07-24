import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import cows from "@/assets/pichwai-cows.png";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { RotatingMandala } from "@/components/invitation/AnimatedDecorations";

export const Route = createFileRoute("/venue")({ component: VenuePage });

// Calligraphic Flourish Accent
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
  <svg viewBox="0 0 36 36" className={`w-4 h-4 sm:w-6 sm:h-6 text-gold/60 pointer-events-none z-20 ${className}`}>
    <path d="M 2 2 L 18 2 C 18 10, 10 18, 2 18 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M 2 2 L 10 2 C 10 6, 6 10, 2 10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
    <circle cx="5" cy="5" r="1.2" fill="currentColor" />
  </svg>
);

// Custom Ultra-Premium Royal Gold Vector SVG Icons
const PalaceIcon = ({ className = "w-4 h-4 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="palaceGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDF0A6" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#805C00" />
      </linearGradient>
    </defs>
    <path d="M16 3 C13 7, 11 10, 8 13 L24 13 C21 10, 19 7, 16 3 Z" fill="url(#palaceGoldGrad)" stroke="#805C00" strokeWidth="0.8" />
    <path d="M16 1 V3" stroke="url(#palaceGoldGrad)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="16" cy="1" r="1" fill="#FFEFA8" />
    <path d="M6 13 V27 M26 13 V27 M11 13 V27 M21 13 V27" stroke="url(#palaceGoldGrad)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 20 C11 16, 21 16, 21 20" stroke="url(#palaceGoldGrad)" strokeWidth="1.5" fill="none" />
    <path d="M4 27 H28" stroke="url(#palaceGoldGrad)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MapIcon = ({ className = "w-4 h-4 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="mapGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2B2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6405" />
      </linearGradient>
    </defs>
    <path d="M3 8 L11 4 L21 8 L29 4 V24 L21 28 L11 24 L3 28 Z" fill="url(#mapGoldGrad)" opacity="0.3" stroke="url(#mapGoldGrad)" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M11 4 V24 M21 8 V28" stroke="url(#mapGoldGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
    <circle cx="16" cy="14" r="3.5" stroke="url(#mapGoldGrad)" strokeWidth="1.5" fill="#FFEFA8" />
    <circle cx="16" cy="14" r="1" fill="#805C00" />
  </svg>
);

const CarIcon = ({ className = "w-5 h-5 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="carGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF6C2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#7A5600" />
      </linearGradient>
    </defs>
    <path d="M5 21 C5 17, 8 11, 12 9.5 L14 6 C15.2 4.5, 16.8 4.5, 18 6 L20 9.5 C24 11, 27 17, 27 21 Z" stroke="url(#carGoldGrad)" strokeWidth="1.8" fill="url(#carGoldGrad)" opacity="0.25" />
    <path d="M5 21 C5 17, 8 11, 12 9.5 L14 6 C15.2 4.5, 16.8 4.5, 18 6 L20 9.5 C24 11, 27 17, 27 21 Z" stroke="url(#carGoldGrad)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 13 H22" stroke="url(#carGoldGrad)" strokeWidth="1.2" />
    <circle cx="9" cy="22" r="3" stroke="url(#carGoldGrad)" strokeWidth="1.8" fill="#FFF8DC" />
    <circle cx="23" cy="22" r="3" stroke="url(#carGoldGrad)" strokeWidth="1.8" fill="#FFF8DC" />
    <circle cx="9" cy="22" r="1" fill="#7A5600" />
    <circle cx="23" cy="22" r="1" fill="#7A5600" />
  </svg>
);

const SnowflakeIcon = ({ className = "w-5 h-5 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="snowGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#E6C65B" />
        <stop offset="100%" stopColor="#997312" />
      </linearGradient>
    </defs>
    <path d="M16 3 V29 M3 16 H29 M6.8 6.8 L25.2 25.2 M25.2 6.8 L6.8 25.2" stroke="url(#snowGoldGrad)" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16 7 L14 9 L16 11 L18 9 Z M16 21 L14 23 L16 25 L18 23 Z M7 16 L9 14 L11 16 L9 18 Z M21 16 L23 14 L25 16 L23 18 Z" fill="url(#snowGoldGrad)" />
    <circle cx="16" cy="16" r="2.5" fill="#FFEFA8" stroke="url(#snowGoldGrad)" strokeWidth="1" />
  </svg>
);

const AccessibilityIcon = ({ className = "w-5 h-5 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="accessGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2B2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6405" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="6" r="3" fill="url(#accessGoldGrad)" stroke="#805C00" strokeWidth="0.8" />
    <path d="M16 9 V18 M16 13 H9 M16 13 H23 M16 18 L11 27 M16 18 L21 27" stroke="url(#accessGoldGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="12" stroke="url(#accessGoldGrad)" strokeWidth="1.2" strokeDasharray="3 3" />
  </svg>
);

const HotelIcon = ({ className = "w-5 h-5 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="hotelGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF6C2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#7A5600" />
      </linearGradient>
    </defs>
    <rect x="6" y="8" width="20" height="20" rx="3" fill="url(#hotelGoldGrad)" opacity="0.25" stroke="url(#hotelGoldGrad)" strokeWidth="1.8" />
    <path d="M12 4 L16 1 L20 4 H12 Z" fill="url(#hotelGoldGrad)" />
    <rect x="10" y="12" width="4" height="4" rx="0.5" fill="url(#hotelGoldGrad)" />
    <rect x="18" y="12" width="4" height="4" rx="0.5" fill="url(#hotelGoldGrad)" />
    <rect x="10" y="18" width="4" height="4" rx="0.5" fill="url(#hotelGoldGrad)" />
    <rect x="18" y="18" width="4" height="4" rx="0.5" fill="url(#hotelGoldGrad)" />
    <path d="M13 28 V23 C13 21.5, 19 21.5, 19 23 V28" fill="url(#hotelGoldGrad)" stroke="#805C00" strokeWidth="0.8" />
  </svg>
);

const PinIcon = ({ className = "w-4.5 h-4.5 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="pinGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFEFA8" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#805C00" />
      </linearGradient>
    </defs>
    <path d="M16 2 C10 2 5 7 5 13 C5 21 16 30 16 30 C16 30 27 21 27 13 C27 7 22 2 16 2 Z" fill="url(#pinGoldGrad)" opacity="0.3" />
    <path d="M16 2 C10 2 5 7 5 13 C5 21 16 30 16 30 C16 30 27 21 27 13 C27 7 22 2 16 2 Z" stroke="url(#pinGoldGrad)" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="16" cy="12" r="4.5" fill="url(#pinGoldGrad)" stroke="#FFF" strokeWidth="1" />
    <circle cx="16" cy="12" r="1.5" fill="#7A311D" />
  </svg>
);

function VenuePage() {
  const v = invitation.venue;
  const [viewMode, setViewMode] = useState<"details" | "map">("details");

  // 3D Tilt Motion Tracking
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXRaw = useTransform(mouseY, [-150, 150], [5, -5]);
  const rotateYRaw = useTransform(mouseX, [-200, 200], [-5, 5]);

  const rotateX = useSpring(rotateXRaw, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Venue Amenities Data with Custom SVG Components
  const amenities = [
    { icon: <CarIcon className="w-4 h-4 text-gold shrink-0" />, label: "Valet Parking" },
    { icon: <SnowflakeIcon className="w-4 h-4 text-gold shrink-0" />, label: "AC Halls" },
    { icon: <AccessibilityIcon className="w-4 h-4 text-gold shrink-0" />, label: "Accessible" },
    { icon: <HotelIcon className="w-4 h-4 text-gold shrink-0" />, label: "Palace Stay" },
  ];

  return (
    <PageShell>
      <section className="w-full min-h-[85vh] flex flex-col items-center justify-start sm:justify-center px-2 sm:px-4 py-2 sm:py-6 md:py-8 mt-[37vh] sm:mt-[24vh] md:mt-24 pt-2 sm:pt-8 select-none">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
          
          {/* Header Section */}
          <div className="text-center mb-2 sm:mb-4 md:mb-5 w-full flex flex-col items-center">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-1 sm:mt-2">
              <TitleFlourish className="rotate-180 hidden sm:block w-20 md:w-28" />
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="script text-3xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
              >
                Find Your Way to Celebration
              </motion.h2>
              <TitleFlourish className="hidden sm:block w-20 md:w-28" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="display italic text-maroon-deep/80 text-[11px] sm:text-sm md:text-base mt-0.5 max-w-md font-medium"
            >
              A grand heritage palace awaiting your presence
            </motion.p>

            {/* 3D Segmented View Mode Controller */}
            <div className="flex items-center justify-center mt-2.5 sm:mt-4 p-1 rounded-full bg-gold/15 border border-gold/30 shadow-inner w-full max-w-[260px] sm:max-w-[300px]">
              <button
                onClick={() => setViewMode("details")}
                className={`flex-1 py-1.5 px-2.5 sm:px-3 text-[8.5px] sm:text-[10.5px] font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center ${
                  viewMode === "details" ? "bg-maroon text-cream shadow-md scale-102" : "text-maroon-deep hover:text-maroon"
                }`}
              >
                <span>Palace Details</span>
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`flex-1 py-1.5 px-2.5 sm:px-3 text-[8.5px] sm:text-[10.5px] font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center ${
                  viewMode === "map" ? "bg-maroon text-cream shadow-md scale-102" : "text-maroon-deep hover:text-maroon"
                }`}
              >
                <span>Interactive Map</span>
              </button>
            </div>
          </div>

          {/* Interactive 3D Tilt Card Showcase - Compact & Fully Fitted on Mobile */}
          <div className="w-full max-w-[320px] sm:max-w-md md:max-w-2xl lg:max-w-3xl perspective-[1000px] px-1">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative p-[2px] sm:p-[2.5px] md:p-[3.5px] bg-gradient-to-br from-[#E2B75A] via-[#FDF5D3] to-[#B0852A] rounded-t-[40px] sm:rounded-t-[72px] md:rounded-t-[84px] rounded-b-xl shadow-[0_16px_40px_rgba(122,31,43,0.18)] hover:shadow-[0_22px_55px_rgba(201,162,39,0.35)] transition-shadow duration-300 group w-full"
            >
              <div className="relative rounded-t-[38px] sm:rounded-t-[69px] md:rounded-t-[81px] rounded-b-[12px] overflow-hidden flex flex-col justify-between">
                
                {/* Conic Spinning Gold Border Aura */}
                <div className="absolute inset-0 rounded-t-[38px] sm:rounded-t-[69px] md:rounded-t-[81px] rounded-b-[12px] overflow-hidden z-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 w-[220%] h-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_var(--border-angle),#D4AF37_0%,transparent_16%,transparent_84%,#D4AF37_100%)] animate-spin-border opacity-85" />
                </div>

                {/* Card Background Base - Clean Ivory Silk Parchment */}
                <div className="absolute inset-[1.5px] md:inset-[2px] rounded-t-[36px] sm:rounded-t-[67px] md:rounded-t-[79px] rounded-b-[10px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EA] to-[#F3EAD8] z-0" />
                <div className="absolute inset-0 rounded-t-[36px] sm:rounded-t-[67px] md:rounded-t-[79px] rounded-b-[10px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/25 via-transparent to-transparent pointer-events-none z-0" />
                
                {/* Dashed Gold Inner Line Frame */}
                <div className="absolute inset-1.5 sm:inset-2.5 rounded-t-[30px] sm:rounded-t-[61px] md:rounded-t-[73px] rounded-b-lg border border-gold/40 border-dashed pointer-events-none z-10 opacity-70" />
                
                {/* Core Content Container */}
                <div className="relative z-20 p-2.5 pt-4 sm:p-6 sm:pt-8 md:p-8 text-center flex flex-col items-center justify-between rounded-t-[34px] sm:rounded-t-[65px] md:rounded-t-[77px] rounded-b-lg m-[1.5px] overflow-hidden min-h-[260px] sm:min-h-[360px]">
                  
                  {/* Animated Light Reflection */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 sm:w-20 sm:h-7 border-b-[1.5px] border-x-[1.5px] border-gold/35 rounded-b-full pointer-events-none bg-gold/10" />
                  
                  {/* Corner Filigrees */}
                  <CornerFiligree className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2" />
                  <CornerFiligree className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 rotate-90" />
                  <CornerFiligree className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 -rotate-90" />
                  <CornerFiligree className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 rotate-180" />

                  {/* Corner Mandalas */}
                  <RotatingMandala className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-30 text-gold" />
                  <RotatingMandala className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-30 text-gold" />

                  {/* 3D Animated View Switcher Content */}
                  <AnimatePresence mode="wait">
                    {viewMode === "details" ? (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full flex flex-col items-center justify-between h-full space-y-2 sm:space-y-4"
                      >
                        {/* Venue Title & Location Ticker */}
                        <div className="flex flex-col items-center">
                          <span className="label text-[8px] sm:text-[10px] text-gold font-bold uppercase tracking-[0.25em] drop-shadow-sm">
                            Royal Heritage Destination
                          </span>
                          <h3 className="display text-xl sm:text-3xl md:text-4xl text-maroon-deep font-bold mt-0.5 drop-shadow-sm">
                            {v.name}
                          </h3>
                          <div className="my-1 sm:my-2 w-16 sm:w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
                          <p className="italic text-maroon-deep/90 text-[11px] sm:text-sm max-w-lg font-medium leading-tight inline-flex items-center gap-1 justify-center">
                            <PinIcon className="w-3.5 h-3.5 text-gold shrink-0" />
                            <span>{v.address}</span>
                          </p>
                        </div>

                        {/* Floating 3D Amenity Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 w-full my-1 sm:my-2">
                          {amenities.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.08 * idx, duration: 0.35 }}
                              className="flex items-center sm:flex-col justify-center gap-1.5 p-1.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFFDFB] via-[#FAF3E0] to-[#F4E8D3] border border-gold/50 shadow-xs hover:shadow-md hover:scale-105 transition-all duration-300 group/chip"
                            >
                              <span className="group-hover/chip:scale-125 transition-transform duration-300 shrink-0">
                                {item.icon}
                              </span>
                              <span className="label text-[8.5px] sm:text-[10px] text-maroon-deep font-bold truncate">
                                {item.label}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Family Host Representatives Section - Responsive Desktop & Mobile */}
                        <div className="w-full pt-2 sm:pt-3.5 border-t border-gold/30 flex flex-col items-center gap-1.5 sm:gap-2">
                          <span className="label text-[8px] sm:text-[10px] text-gold font-bold uppercase tracking-[0.2em] drop-shadow-xs">
                            Family Host Representatives
                          </span>

                          <div className="grid grid-cols-2 sm:grid-cols-2 gap-1.5 sm:gap-3 w-full">
                            {[
                              { 
                                side: "Groom's Host", 
                                fullSide: "Groom's Family Host",
                                name: invitation.groomFamily.contact?.name || invitation.groomFamily.contactName, 
                                relation: invitation.groomFamily.contact?.relation || "Father",
                                phone: invitation.groomFamily.contact?.phone || invitation.groomFamily.contactPhone 
                              },
                              { 
                                side: "Bride's Host", 
                                fullSide: "Bride's Family Host",
                                name: invitation.brideFamily.contact?.name || invitation.brideFamily.contactName, 
                                relation: invitation.brideFamily.contact?.relation || "Family Host",
                                phone: invitation.brideFamily.contact?.phone || invitation.brideFamily.contactPhone 
                              },
                            ].map((host, idx) => (
                              <div 
                                key={idx} 
                                className="flex flex-col sm:flex-row items-center justify-between p-1.5 sm:p-3 rounded-xl bg-gradient-to-r from-cream/90 via-cream to-cream/80 border border-gold/40 shadow-xs hover:border-gold/60 transition-all text-center sm:text-left min-w-0"
                              >
                                <div className="flex flex-col items-center sm:items-start min-w-0 sm:pr-2 w-full sm:w-auto">
                                  <span className="label text-[7px] sm:text-[8.5px] text-gold font-bold uppercase tracking-wider truncate w-full">
                                    <span className="inline sm:hidden">{host.side}</span>
                                    <span className="hidden sm:inline">{host.fullSide}</span>
                                  </span>
                                  <p className="display text-[10.5px] sm:text-sm text-maroon-deep font-bold truncate w-full mt-0.5">
                                    {host.name} <span className="hidden sm:inline text-[10px] text-maroon-deep/70 font-normal italic">({host.relation})</span>
                                  </p>
                                  <p className="hidden sm:block label text-[9px] sm:text-[10px] text-maroon-deep/80 font-semibold mt-0.5">
                                    📞 {host.phone}
                                  </p>
                                </div>

                                <a
                                  href={`tel:${host.phone.replace(/\s/g, "")}`}
                                  className="mt-1 sm:mt-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 w-full sm:w-auto py-1 sm:py-1.5 px-1.5 sm:px-3 rounded-lg bg-gradient-to-r from-maroon-deep to-maroon text-cream label text-[8px] sm:text-[10px] font-bold tracking-wider shadow-xs hover:shadow transition-all hover:scale-105 active:scale-95 border border-gold/40 shrink-0 cursor-pointer"
                                >
                                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold fill-none stroke-currentColor stroke-[2.2] shrink-0">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  <span>Call Host</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="map"
                        initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full flex flex-col justify-between"
                      >
                        {/* Gold-Framed Interactive Google Map Container */}
                        <div className="relative rounded-t-[28px] sm:rounded-t-[48px] rounded-b-xl overflow-hidden border-2 border-gold/50 shadow-inner bg-maroon-deep w-full h-[200px] sm:h-[280px]">
                          <iframe
                            src={v.embed}
                            title="Venue Map"
                            className="w-full h-full border-0 filter brightness-[0.97] contrast-[1.03]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>

                        <div className="pt-1.5 flex items-center justify-between w-full">
                          <span className="label text-[8.5px] sm:text-[10.5px] text-maroon-deep font-bold tracking-wider uppercase truncate inline-flex items-center gap-1">
                            <PinIcon className="w-3 h-3 text-gold shrink-0" />
                            <span>Satellite Location</span>
                          </span>
                          <span className="label text-[7.5px] sm:text-[9px] text-gold font-semibold uppercase tracking-widest">
                            Heritage Palace • Jaipur
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Action Dock */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-[280px] sm:max-w-md mt-2 sm:mt-2 md:mt-2.5 flex justify-center px-1"
          >
            <a
              href={v.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full h-[36px] sm:h-[44px] inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 bg-gradient-to-r from-maroon-deep via-maroon to-maroon-deep text-cream label text-[9px] sm:text-[11px] font-bold tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border border-gold/50 whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold fill-none stroke-currentColor stroke-[2.2] shrink-0">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              <span>Navigate via Google Maps</span>
              <span className="text-gold">→</span>
            </a>
          </motion.div>

          {/* Bottom Pichwai Cows Art Motif */}
          <motion.img 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.9 }} 
            transition={{ delay: 0.8, duration: 1.5 }}
            src={cows} 
            alt="Pichwai Art" 
            aria-hidden 
            className="mt-2.5 sm:mt-5 w-full max-w-[200px] sm:max-w-sm max-h-12 sm:max-h-16 object-contain drop-shadow-md pointer-events-none" 
            loading="lazy" 
          />

        </div>
      </section>
    </PageShell>
  );
}




