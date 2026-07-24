import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cows from "@/assets/pichwai-cows.png";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { RotatingMandala } from "@/components/invitation/AnimatedDecorations";

import fatherPic from "@/assets/indian_father.png";
import motherPic from "@/assets/indian_mother.png";

export const Route = createFileRoute("/families")({ component: FamiliesPage });

// Helper for portraits
const getPortraitForRelation = (relation: string) => {
  if (relation.toLowerCase() === 'father') return fatherPic;
  if (relation.toLowerCase() === 'mother') return motherPic;
  if (relation.toLowerCase() === 'brother') return "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=200&h=200&fit=crop&q=80";
  if (relation.toLowerCase() === 'sister') return "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80";
  return "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop&q=80";
};

// Intricate Calligraphic Flourish
const TitleFlourish = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={`w-8 sm:w-12 md:w-16 h-auto text-gold drop-shadow-md shrink-0 ${className}`}>
    <path d="M0 10 Q25 0, 50 10 T100 10 M25 10 Q37.5 20, 50 10 T75 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="10" r="2.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="90" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// Beautiful SVG Kalash Graphic Component
const DecorativeKalash = () => (
  <motion.svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    fill="none"
    className="text-gold mx-auto drop-shadow-[0_4px_12px_rgba(201,162,39,0.4)]"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <path d="M30 60 C30 85, 70 85, 70 60 C85 50, 85 40, 70 30 C70 25, 30 25, 30 30 C15 40, 15 50, 30 60 Z" fill="currentColor" />
    <path d="M40 25 L60 25 L65 15 L35 15 Z" fill="currentColor" opacity="0.9" />
    <ellipse cx="50" cy="12" rx="14" ry="18" fill="currentColor" opacity="0.8" />
    <path d="M35 15 C20 0, 5 15, 35 25 Z" fill="currentColor" />
    <path d="M65 15 C80 0, 95 15, 65 25 Z" fill="currentColor" />
    <path d="M45 15 C30 -5, 15 5, 40 18 Z" fill="currentColor" opacity="0.6" />
    <path d="M55 15 C70 -5, 85 5, 60 18 Z" fill="currentColor" opacity="0.6" />
    <path d="M35 60 C45 70, 55 70, 65 60 M40 50 L60 50 M45 40 L55 40" stroke="#4A1525" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="50" r="2" fill="currentColor" />
    <circle cx="80" cy="50" r="2" fill="currentColor" />
  </motion.svg>
);

// Arch-shaped Portrait Frame
const ArchPortrait = ({ name, relation, image }: { name: string; relation: string; image?: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-30 rounded-t-full rounded-b-md border-[2px] border-gold p-0.5 bg-maroon-deep shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      <div className="absolute inset-0 border border-gold/40 rounded-t-full rounded-b-sm m-0.5 z-10 pointer-events-none" />
      <img src={image || getPortraitForRelation(relation)} alt={name} className="w-full h-full object-cover rounded-t-full rounded-b-sm filter sepia-[0.3] brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" />
    </div>
    <p className="display text-xs md:text-sm text-cream mt-1.5 font-semibold text-center leading-tight">{name}</p>
    <p className="label text-[8px] md:text-[9.5px] text-gold uppercase tracking-[0.2em]">{relation}</p>
  </div>
);

// Circular Portrait Frame
const CirclePortrait = ({ name, relation, image }: { name: string; relation: string; image?: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-[2px] border-gold p-0.5 bg-maroon-deep shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      <div className="absolute inset-0 border border-gold/40 rounded-full m-0.5 z-10 pointer-events-none" />
      <img src={image || getPortraitForRelation(relation)} alt={name} className="w-full h-full object-cover rounded-full filter sepia-[0.3] brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" />
    </div>
    <p className="display text-xs md:text-sm text-cream mt-1.5 font-semibold text-center leading-tight">{name}</p>
    <p className="label text-[8px] md:text-[9px] text-gold uppercase tracking-[0.2em]">{relation}</p>
  </div>
);

// In-Card Mini Portrait Avatar (Card Front)
const MiniCardAvatar = ({ name, relation }: { name: string; relation: string }) => (
  <div className="flex flex-col items-center group/avatar">
    <div className="w-14 h-[4.25rem] sm:w-20 sm:h-24 md:w-22 md:h-28 rounded-t-full rounded-b-sm border-2 border-gold/90 p-0.5 bg-gradient-to-b from-maroon-deep to-[#4A0E17] shadow-[0_4px_14px_rgba(122,31,43,0.3)] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300 relative overflow-hidden">
      <div className="absolute inset-0 border border-gold/50 rounded-t-full rounded-b-xs m-0.5 z-10 pointer-events-none" />
      <img src={getPortraitForRelation(relation)} alt={name} className="w-full h-full object-cover rounded-t-full filter sepia-[0.2] brightness-95 group-hover/avatar:brightness-105 group-hover/avatar:scale-110 transition-all duration-500" />
    </div>
    <span className="label text-[9px] sm:text-[10px] md:text-[11px] text-maroon-deep font-extrabold mt-1.5 tracking-tight truncate max-w-[80px] text-center drop-shadow-xs">{name.split(" ")[0]}</span>
    <span className="label text-[7.5px] sm:text-[8.5px] text-gold uppercase tracking-wider font-bold">{relation}</span>
  </div>
);

// Decorative subtle SVG background for the modal
const ModalDecoBackground = () => (
  <svg className="absolute inset-0 w-full h-full text-gold/5 pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
    <path d="M200 0 Q250 100, 400 150 Q300 200, 400 250 Q250 300, 200 400 Q150 300, 0 250 Q100 200, 0 150 Q150 100, 200 0 Z" fill="currentColor" />
  </svg>
);

// Ornate Corner Filigree Ornament
const CornerFiligree = ({ className }: { className: string }) => (
  <svg viewBox="0 0 36 36" className={`w-5 h-5 sm:w-6 sm:h-6 text-gold/70 pointer-events-none z-20 ${className}`}>
    <path d="M 2 2 L 18 2 C 18 10, 10 18, 2 18 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M 2 2 L 10 2 C 10 6, 6 10, 2 10 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
    <circle cx="5" cy="5" r="1.2" fill="currentColor" />
  </svg>
);

const FamilyCard = ({ side, data, onOpen, delay }: { side: string; data: typeof invitation.groomFamily; onOpen: () => void; delay: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative p-[2px] md:p-[3px] bg-gradient-to-br from-[#E2B75A] via-[#FDF5D3] to-[#B0852A] rounded-t-[56px] sm:rounded-t-[64px] md:rounded-t-[72px] rounded-b-2xl shadow-[0_15px_35px_rgba(122,31,43,0.16)] hover:shadow-[0_22px_50px_rgba(201,162,39,0.42)] transition-all duration-300 group h-full w-full flex flex-col hover:-translate-y-1"
    >
      <div className="relative rounded-t-[54px] sm:rounded-t-[62px] md:rounded-t-[69px] rounded-b-[14px] h-full overflow-hidden flex flex-col justify-between">
        
        {/* Animated Spinning Border Container */}
        <div className="absolute inset-0 rounded-t-[54px] sm:rounded-t-[62px] md:rounded-t-[69px] rounded-b-[14px] overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[220%] h-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_var(--border-angle),#D4AF37_0%,#FFF7C2_15%,transparent_35%,transparent_65%,#D4AF37_85%,#FFF7C2_100%)] animate-spin-border opacity-90" />
        </div>

        {/* Solid Card Background Base - Clean Ivory Silk Parchment with Soft Radial Gold Glow */}
        <div className="absolute inset-[1.5px] md:inset-[2px] rounded-t-[52px] sm:rounded-t-[60px] md:rounded-t-[67px] rounded-b-[12px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E2] to-[#F5E8CE] z-0" />
        <div className="absolute inset-0 rounded-t-[52px] sm:rounded-t-[60px] md:rounded-t-[67px] rounded-b-[12px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/25 via-transparent to-transparent pointer-events-none z-0" />
        
        {/* Inner Dashed Gold Line Frame Decoration */}
        <div className="absolute inset-2 sm:inset-2.5 rounded-t-[46px] sm:rounded-t-[54px] md:rounded-t-[60px] rounded-b-lg border border-gold/45 border-dashed pointer-events-none z-10 opacity-75" />
        
        <div className="relative z-20 p-3 pt-4 sm:p-5 sm:pt-6 md:p-6 text-center h-full flex flex-col justify-between rounded-t-[50px] sm:rounded-t-[58px] md:rounded-t-[65px] rounded-b-lg m-[2px] overflow-hidden">
          
          {/* Animated Light Reflection */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 border-b-[1.5px] border-x-[1.5px] border-gold/40 rounded-b-full pointer-events-none bg-gold/10" />
          
          {/* Corner Filigree Ornaments */}
          <CornerFiligree className="absolute top-2 left-2" />
          <CornerFiligree className="absolute top-2 right-2 rotate-90" />
          <CornerFiligree className="absolute bottom-2 left-2 -rotate-90" />
          <CornerFiligree className="absolute bottom-2 right-2 rotate-180" />

          {/* Top Info Block */}
          <div className="relative z-10 flex flex-col items-center">
            <span className="label text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-maroon-deep font-extrabold px-3 py-0.5 rounded-full bg-gradient-to-r from-gold/15 via-gold/30 to-gold/15 border border-gold/45 shadow-2xs">
              {side}
            </span>
            <h3 className="script text-3xl sm:text-4xl md:text-5xl text-maroon mt-1 sm:mt-1.5 font-bold drop-shadow-xs">
              {data.surname}
            </h3>
            
            <div className="my-1.5 sm:my-2.5 w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
            
            {/* Member Avatars Gallery Preview inside Card - Containerless */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 my-2 sm:my-3 w-full px-1">
              {data.members.map((m, idx) => (
                <MiniCardAvatar key={idx} name={m.name} relation={m.relation} />
              ))}
            </div>

            <p className="display italic text-xs sm:text-sm text-maroon-deep/90 mt-2 mb-0.5 sm:mb-1 px-1 font-medium leading-relaxed max-w-xs">
              "{data.note}"
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="mt-1 sm:mt-1.5 pt-1.5 border-t border-gold/25 w-full flex flex-row items-center justify-center gap-1.5 sm:gap-2.5 z-30">
            <button
              onClick={onOpen}
              className="w-full h-[34px] sm:h-[38px] md:h-[42px] inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-[#4A0E17] via-[#7A1F2B] to-[#4A0E17] text-amber-100 label text-[8.5px] sm:text-[10px] md:text-[11px] font-extrabold rounded-lg shadow-sm hover:shadow-[0_4px_16px_rgba(212,175,55,0.45)] transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap border border-gold/50"
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-none stroke-currentColor stroke-[2.2] text-gold shrink-0">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="truncate">View Lineage</span>
            </button>
          </div>

        </div>
      </div>
    </motion.article>
  );
};

function FamiliesPage() {
  const [activeSide, setActiveSide] = useState<"groom" | "bride" | null>(null);
  const [mobileTab, setMobileTab] = useState<"groom" | "bride">("groom");

  return (
    <PageShell>
      <section className="w-full min-h-[82vh] flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-6 md:py-8 mt-[28vh] sm:mt-16 md:mt-20 pt-4 sm:pt-6 select-none">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
          
          {/* Header Section */}
          <div className="text-center mb-3 sm:mb-5 md:mb-8 w-full flex flex-col items-center">
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 mt-1 sm:mt-2 w-full flex-nowrap">
              <TitleFlourish className="rotate-180 w-7 xs:w-9 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="script text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
              >
                Two Families, One Union
              </motion.h2>
              <TitleFlourish className="w-7 xs:w-9 sm:w-16 md:w-24 text-gold drop-shadow-sm shrink-0" />
            </div>

            {/* Mobile Segmented Tab Control (< md) */}
            <div className="md:hidden flex items-center justify-center mt-3 p-1 rounded-full bg-gold/15 border border-gold/30 shadow-inner w-full max-w-[280px]">
              <button
                onClick={() => setMobileTab("groom")}
                className={`flex-1 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  mobileTab === "groom" ? "bg-maroon text-cream shadow-md" : "text-maroon-deep hover:text-maroon"
                }`}
              >
                Groom's Side
              </button>
              <button
                onClick={() => setMobileTab("bride")}
                className={`flex-1 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  mobileTab === "bride" ? "bg-maroon text-cream shadow-md" : "text-maroon-deep hover:text-maroon"
                }`}
              >
                Bride's Side
              </button>
            </div>
          </div>

          {/* Desktop Dual Column Layout (>= md) */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-10 w-full max-w-5xl px-2">
            <FamilyCard 
              side="Groom's Side" 
              data={invitation.groomFamily} 
              onOpen={() => setActiveSide("groom")} 
              delay={0.2} 
            />
            <FamilyCard 
              side="Bride's Side" 
              data={invitation.brideFamily} 
              onOpen={() => setActiveSide("bride")} 
              delay={0.4} 
            />
          </div>

          {/* Mobile Single Card View (< md) */}
          <div className="md:hidden w-full max-w-sm px-1">
            <AnimatePresence mode="wait">
              {mobileTab === "groom" ? (
                <FamilyCard 
                  key="groom"
                  side="Groom's Side" 
                  data={invitation.groomFamily} 
                  onOpen={() => setActiveSide("groom")} 
                  delay={0.1} 
                />
              ) : (
                <FamilyCard 
                  key="bride"
                  side="Bride's Side" 
                  data={invitation.brideFamily} 
                  onOpen={() => setActiveSide("bride")} 
                  delay={0.1} 
                />
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Pichwai Decorative Banner */}
          <motion.img 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.9 }} 
            transition={{ delay: 1, duration: 1.5 }}
            src={cows} 
            alt="Pichwai Art" 
            aria-hidden 
            className="mt-4 sm:mt-6 w-full max-w-xs md:max-w-sm max-h-16 md:max-h-20 object-contain drop-shadow-md pointer-events-none" 
            loading="lazy" 
          />
        </div>
      </section>

      <FamilyTreeModal
        isOpen={activeSide !== null}
        onClose={() => setActiveSide(null)}
        family={activeSide === "groom" ? invitation.groomFamily : activeSide === "bride" ? invitation.brideFamily : null}
      />
    </PageShell>
  );
}

interface FamilyMember {
  name: string;
  relation: string;
  image?: string;
  type?: "parent" | "sibling" | "relative" | "elder";
}

interface FamilyData {
  surname: string;
  members: FamilyMember[];
}

function FamilyTreeModal({
  family,
  isOpen,
  onClose,
}: {
  family: FamilyData | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!family) return null;

  // Dynamically group family members for future backend expansion:
  // Elders & Parents (Arch Frames) vs. Siblings & Relatives (Circle Frames)
  const parents = family.members.filter((m) => {
    const rel = m.relation.toLowerCase();
    return (
      m.type === "parent" ||
      m.type === "elder" ||
      rel.includes("father") ||
      rel.includes("mother") ||
      rel.includes("dada") ||
      rel.includes("dadi") ||
      rel.includes("nana") ||
      rel.includes("nani")
    );
  });

  const siblingsAndRelatives = family.members.filter((m) => !parents.includes(m));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 220 }}
            className="relative z-10 w-full max-w-md bg-gradient-to-b from-[#2A080D] via-maroon-deep to-[#1A0508] border-[3px] border-[#D4AF37] rounded-t-[50px] rounded-b-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col group max-h-[85vh] sm:max-h-[90vh]"
          >
            <div className="absolute inset-0 rounded-t-[48px] rounded-b-[30px] border border-gold/30 m-1 opacity-60 pointer-events-none z-0" />
            <ModalDecoBackground />

            {/* Modal Header */}
            <div className="p-4 pt-6 pb-4 text-center border-b border-gold/30 bg-gradient-to-b from-maroon to-maroon-deep/90 relative z-10 flex flex-col items-center shrink-0">
              <button
                onClick={onClose}
                className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon-deep transition-all hover:rotate-90 text-sm z-50 cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center space-x-2">
                <TitleFlourish className="w-8 md:w-10 rotate-180" />
                <h2 className="script text-2xl sm:text-3xl text-gold drop-shadow-md">{family.surname}</h2>
                <TitleFlourish className="w-8 md:w-10" />
              </div>
              <p className="label text-[8px] text-gold uppercase tracking-[0.25em] mt-1 font-semibold">Lineage & Family Tree</p>
            </div>

            {/* Modal Body - Fully Dynamic & Scrollable Lineage Container */}
            <div className="p-4 sm:p-6 relative flex flex-col items-center overflow-y-auto z-10 space-y-6 scrollbar-none flex-1 max-h-[65vh] sm:max-h-[70vh]">
              {/* Dynamic Connecting Trunk Line */}
              <div className="absolute top-6 bottom-6 left-1/2 w-0.5 bg-gradient-to-b from-gold via-gold/60 to-transparent -translate-x-1/2 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center space-y-6 w-full">
                {/* Layer 1: Elders / Parents */}
                {parents.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full">
                    {parents.map((m, idx) => (
                      <ArchPortrait key={`${m.name}-${idx}`} name={m.name} relation={m.relation} image={m.image} />
                    ))}
                  </div>
                )}

                {/* Layer 2: Siblings & Next Generation */}
                {siblingsAndRelatives.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-5 sm:gap-6 w-full pt-2">
                    {siblingsAndRelatives.map((m, idx) => (
                      <CirclePortrait key={`${m.name}-${idx}`} name={m.name} relation={m.relation} image={m.image} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
