import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import elephant from "@/assets/elephant.png";
import namasteHands from "@/assets/namaste-hands.png";
import { PageShell } from "@/components/invitation/PageShell";
import { useGuestName } from "@/hooks/useGuestName";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/rsvp")({ component: RsvpPage });

// Indian Traditional Royal Namaste Hands (Pranam) SVG Component matching reference artwork
const FoldedHandsIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" className={className}>
    <defs>
      {/* Gold Polish Shimmer Gradients */}
      <linearGradient id="namasteGoldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF7D6" />
        <stop offset="35%" stopColor="#F3D079" />
        <stop offset="70%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#966B12" />
      </linearGradient>
      
      {/* Warm Indian Skin Tone Gradient */}
      <linearGradient id="handSkinTone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F8E5CE" />
        <stop offset="50%" stopColor="#ECC294" />
        <stop offset="100%" stopColor="#D09B66" />
      </linearGradient>

      {/* Royal Crimson Red Bangle Gradient */}
      <linearGradient id="bangleRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF3366" />
        <stop offset="50%" stopColor="#C80036" />
        <stop offset="100%" stopColor="#7A001E" />
      </linearGradient>

      {/* Soft Drop Shadow Filter */}
      <filter id="namasteShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3A0C14" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#namasteShadow)">
      {/* Background Concentric Radial Halos */}
      <circle cx="100" cy="100" r="88" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.25" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="72" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.35" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />

      {/* LEFT ARM & HAND (Angled from bottom-left to top center) */}
      <g>
        {/* Arm Base Skin */}
        <path d="M0 185 L50 142 L72 130 C86 112, 94 80, 99 22 L100 22 C99 65, 90 100, 70 120 L40 148 L0 185 Z" fill="url(#handSkinTone)" />

        {/* Left Hand Fingers & Palm Silhouette */}
        <path d="M100 22 C98 50, 93 85, 78 112 C72 122, 60 132, 48 140 L36 150 L20 162 M100 22 L100 120" stroke="#B87D4B" strokeWidth="1" />

        {/* Finger Separations & Joints (Left) */}
        <path d="M96 24 L95 80 C93 92, 88 100, 78 112" fill="url(#handSkinTone)" stroke="#A06738" strokeWidth="1.2" />
        <path d="M92 28 L91 80 C89 90, 84 98, 74 108" fill="url(#handSkinTone)" stroke="#A06738" strokeWidth="1.2" />
        <path d="M88 34 L87 80 C85 88, 80 96, 70 104" fill="url(#handSkinTone)" stroke="#A06738" strokeWidth="1.2" />
        <path d="M84 40 L83 80 C81 86, 76 93, 66 100" fill="url(#handSkinTone)" stroke="#A06738" strokeWidth="1.2" />

        {/* Crimson Red Fingernail Polish (Left Fingers) */}
        <path d="M96 24 C97 22, 99 22, 100 22 C99 26, 97 28, 96 29 Z" fill="#E6004C" />
        <path d="M92 28 C93 26, 95 26, 96 26 C95 30, 93 32, 92 33 Z" fill="#E6004C" />
        <path d="M88 34 C89 32, 91 32, 92 32 C91 36, 89 38, 88 39 Z" fill="#E6004C" />
        <path d="M84 40 C85 38, 87 38, 88 38 C87 42, 85 44, 84 45 Z" fill="#E6004C" />

        {/* Mehndi / Henna Floral Mandala Pattern (Back of Left Hand) */}
        <g opacity="0.85" stroke="#7A3B14" strokeWidth="1.2" fill="none">
          <circle cx="70" cy="115" r="10" stroke="#7A3B14" />
          <circle cx="70" cy="115" r="5" fill="#7A3B14" />
          <path d="M70 101 C73 103 73 107 70 109 C67 107 67 103 70 101 Z" fill="#7A3B14" />
          <path d="M70 121 C73 123 73 127 70 129 C67 127 67 123 70 121 Z" fill="#7A3B14" />
          <path d="M56 115 C58 118 62 118 64 115 C62 112 58 112 56 115 Z" fill="#7A3B14" />
          <path d="M76 115 C78 118 82 118 84 115 C82 112 78 112 76 115 Z" fill="#7A3B14" />
        </g>

        {/* Royal Wrist Bangles (Left Wrist - Angular Cuff) */}
        <g transform="rotate(-30 45 140)">
          <rect x="25" y="130" width="45" height="4" rx="2" fill="url(#namasteGoldShimmer)" stroke="#593B00" strokeWidth="0.8" />
          <rect x="25" y="134" width="45" height="16" rx="3" fill="url(#bangleRedGrad)" stroke="url(#namasteGoldShimmer)" strokeWidth="1" />
          <circle cx="33" cy="142" r="2" fill="url(#namasteGoldShimmer)" />
          <circle cx="43" cy="142" r="2" fill="url(#namasteGoldShimmer)" />
          <circle cx="53" cy="142" r="2" fill="url(#namasteGoldShimmer)" />
          <circle cx="63" cy="142" r="2" fill="url(#namasteGoldShimmer)" />
          <rect x="25" y="150" width="45" height="4" rx="2" fill="url(#namasteGoldShimmer)" stroke="#593B00" strokeWidth="0.8" />
        </g>
      </g>

      {/* RIGHT ARM & HAND (Angled from bottom-right to top center) */}
      <g>
        {/* Arm Base Skin */}
        <path d="M200 185 L150 142 L128 130 C114 112, 106 80, 101 22 L100 22 C101 65, 110 100, 130 120 L160 148 L200 185 Z" fill="url(#handSkinTone)" />

        {/* Right Hand Fingers & Palm Silhouette */}
        <path d="M100 22 C102 50, 107 85, 122 112 C128 122, 140 132, 152 140 L164 150 L180 162" stroke="#B87D4B" strokeWidth="1" />

        {/* Finger Separations & Joints (Right) */}
        <path d="M104 24 L105 80 C107 92, 112 100, 122 112" fill="url(#handSkinTone)" stroke="#A06738" strokeWidth="1.2" />
        <path d="M108 28 L109 80 C111 90, 116 98, 126 108" fill="url(#handSkinTone)" stroke="#A06738" strokeWidth="1.2" />
        <path d="M112 34 L113 80 C115 88, 120 96, 130 104" fill="url(#handSkinTone)" stroke="#A06738" strokeWidth="1.2" />
        <path d="M116 40 L117 80 C119 86, 124 93, 134 100" fill="url(#handSkinTone)" stroke="#A06738" strokeWidth="1.2" />

        {/* Crimson Red Fingernail Polish (Right Fingers) */}
        <path d="M104 24 C103 22, 101 22, 100 22 C101 26, 103 28, 104 29 Z" fill="#E6004C" />
        <path d="M108 28 C107 26, 105 26, 104 26 C105 30, 107 32, 108 33 Z" fill="#E6004C" />
        <path d="M112 34 C111 32, 109 32, 108 38 C109 36, 111 38, 112 39 Z" fill="#E6004C" />
        <path d="M116 40 C115 38, 113 38, 112 38 C113 42, 115 44, 116 45 Z" fill="#E6004C" />

        {/* Mehndi / Henna Floral Mandala Pattern (Back of Right Hand) */}
        <g opacity="0.85" stroke="#7A3B14" strokeWidth="1.2" fill="none">
          <circle cx="130" cy="115" r="10" stroke="#7A3B14" />
          <circle cx="130" cy="115" r="5" fill="#7A3B14" />
          <path d="M130 101 C133 103 133 107 130 109 C127 107 127 103 130 101 Z" fill="#7A3B14" />
          <path d="M130 121 C133 123 133 127 130 129 C127 127 127 123 130 121 Z" fill="#7A3B14" />
          <path d="M116 115 C118 118 122 118 124 115 C122 112 118 112 116 115 Z" fill="#7A3B14" opacity="0.9" />
          <path d="M136 115 C138 118 142 118 144 115 C142 112 138 112 136 115 Z" fill="#7A3B14" opacity="0.9" />
        </g>

        {/* Royal Wrist Bangles (Right Wrist - Angular Cuff) */}
        <g transform="rotate(30 155 140)">
          <rect x="130" y="130" width="45" height="4" rx="2" fill="url(#namasteGoldShimmer)" stroke="#593B00" strokeWidth="0.8" />
          <rect x="130" y="134" width="45" height="16" rx="3" fill="url(#bangleRedGrad)" stroke="url(#namasteGoldShimmer)" strokeWidth="1" />
          <circle cx="138" cy="142" r="2" fill="url(#namasteGoldShimmer)" />
          <circle cx="148" cy="142" r="2" fill="url(#namasteGoldShimmer)" />
          <circle cx="158" cy="142" r="2" fill="url(#namasteGoldShimmer)" />
          <circle cx="168" cy="142" r="2" fill="url(#namasteGoldShimmer)" />
          <rect x="130" y="150" width="45" height="4" rx="2" fill="url(#namasteGoldShimmer)" stroke="#593B00" strokeWidth="0.8" />
        </g>
      </g>
    </g>
  </svg>
);

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
            <div className="flex items-center justify-center space-x-1 sm:space-x-3 w-full flex-nowrap">
              <TitleFlourish className="rotate-180 w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
              <h2 
                className="script text-2xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
              >
                Will You Join Us?
              </h2>
              <TitleFlourish className="w-8 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
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
                  <motion.button
                    onClick={handleAccept}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group px-10 sm:px-16 py-4 bg-gradient-to-r from-[#4A0E17] via-[#7A1F2B] to-[#4A0E17] text-[#FFF8D6] label text-xs sm:text-sm font-extrabold rounded-full shadow-[0_12px_35px_rgba(122,31,43,0.6)] hover:shadow-[0_16px_45px_rgba(212,175,55,0.75)] transition-all overflow-hidden border-2 border-gold/70 cursor-pointer"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:animate-[shimmer_1.8s_infinite]" />
                    <span className="absolute inset-0 rounded-full ring-2 ring-gold/70 ring-offset-2 ring-offset-[#FAF3E2] pointer-events-none opacity-80" />
                    <span className="relative z-10 font-extrabold tracking-[0.22em] drop-shadow-md flex items-center justify-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                      <span>JOYFULLY ACCEPT INVITATION</span>
                      <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                    </span>
                  </motion.button>
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
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-gold via-amber-300 to-gold p-1 shadow-[0_0_35px_rgba(212,175,55,0.85)] flex items-center justify-center mb-4 sm:mb-5">
                  <div className="w-full h-full rounded-full bg-maroon-deep flex items-center justify-center border-2 border-gold/80 overflow-hidden p-1 shadow-inner">
                    <img 
                      src={namasteHands} 
                      alt="Namaste Folded Hands" 
                      className="w-full h-full object-cover rounded-full drop-shadow-lg" 
                    />
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
