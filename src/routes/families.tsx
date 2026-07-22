import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cows from "@/assets/pichwai-cows.png";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { RotatingMandala } from "@/components/invitation/AnimatedDecorations";

export const Route = createFileRoute("/families")({ component: FamiliesPage });

import fatherPic from "@/assets/indian_father.png";
import motherPic from "@/assets/indian_mother.png";

// Helper for portraits
const getPortraitForRelation = (relation: string) => {
  if (relation.toLowerCase() === 'father') return fatherPic;
  if (relation.toLowerCase() === 'mother') return motherPic;
  if (relation.toLowerCase() === 'brother') return "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=200&h=200&fit=crop&q=80";
  if (relation.toLowerCase() === 'sister') return "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80";
  return "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop&q=80";
};

// Intricate Calligraphic Flourish
const TitleFlourish = ({ className = "w-24 md:w-32" }) => (
  <svg viewBox="0 0 100 20" className={`text-gold drop-shadow-md ${className}`}>
    <path d="M0 10 Q25 0, 50 10 T100 10 M25 10 Q37.5 20, 50 10 T75 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="10" r="2.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="90" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// Beautiful SVG Kalash Graphic Component
const DecorativeKalash = () => (
  <motion.svg
    width="55"
    height="55"
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
const ArchPortrait = ({ name, relation }: { name: string; relation: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-24 md:w-24 md:h-32 rounded-t-full rounded-b-md border-[2px] border-gold p-0.5 bg-maroon-deep shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      <div className="absolute inset-0 border border-gold/40 rounded-t-full rounded-b-sm m-0.5 z-10 pointer-events-none" />
      <img src={getPortraitForRelation(relation)} alt={name} className="w-full h-full object-cover rounded-t-full rounded-b-sm filter sepia-[0.3] brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" />
    </div>
    <p className="display text-sm md:text-base text-cream mt-2 font-medium">{name}</p>
    <p className="label text-[9px] md:text-[10px] text-gold uppercase tracking-[0.2em]">{relation}</p>
  </div>
);

// Circular Portrait Frame
const CirclePortrait = ({ name, relation }: { name: string; relation: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[2px] border-gold p-0.5 bg-maroon-deep shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      <div className="absolute inset-0 border border-gold/40 rounded-full m-0.5 z-10 pointer-events-none" />
      <img src={getPortraitForRelation(relation)} alt={name} className="w-full h-full object-cover rounded-full filter sepia-[0.3] brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700" />
    </div>
    <p className="display text-xs md:text-sm text-cream mt-2 font-medium">{name}</p>
    <p className="label text-[8px] md:text-[9px] text-gold uppercase tracking-[0.2em]">{relation}</p>
  </div>
);

// Decorative subtle SVG background for the modal
const ModalDecoBackground = () => (
  <svg className="absolute inset-0 w-full h-full text-gold/5 pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
    <path d="M200 0 Q250 100, 400 150 Q300 200, 400 250 Q250 300, 200 400 Q150 300, 0 250 Q100 200, 0 150 Q150 100, 200 0 Z" fill="currentColor" />
  </svg>
);

const FamilyCard = ({ side, data, onOpen, delay, isMobile = false }: { side: string; data: typeof invitation.groomFamily; onOpen: () => void; delay: number, isMobile?: boolean }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative p-1.5 bg-gradient-to-br from-[#E2B75A] via-[#FDF5D3] to-[#B0852A] rounded-t-[80px] rounded-b-2xl shadow-[0_15px_30px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.8)] group h-full w-full ${isMobile ? 'max-w-[340px] mx-auto' : ''}`}
    >
      <div className="h-full">
        <div className="relative rounded-t-[75px] rounded-b-xl h-full overflow-hidden">
          
          {/* Animated Spinning Border Container */}
          <div className="absolute inset-0 rounded-t-[75px] rounded-b-xl overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_var(--border-angle),#D4AF37_0%,transparent_15%,transparent_85%,#D4AF37_100%)] animate-spin-border opacity-80" />
          </div>

          <div className="absolute inset-[2px] rounded-t-[73px] rounded-b-[10px] bg-[#FDFBF7] z-0" />
          
          <div className="absolute inset-1 rounded-t-[70px] rounded-b-lg bg-[radial-gradient(circle_at_center,_#cda34f_1.5px,_transparent_2px)] bg-[length:8px_8px] opacity-10 pointer-events-none z-10" />
          
          <div className="relative z-20 p-3 pt-6 sm:p-5 md:p-5 lg:p-6 text-center h-full flex flex-col justify-between rounded-t-[70px] rounded-b-lg m-[2px] overflow-hidden shadow-[inset_0_0_20px_rgba(201,162,39,0.05)]">
            {/* Animated Shine Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 border-[1px] border-[#D4AF37]/20 rounded-b-full pointer-events-none" />
            
            {/* Animated Corner Mandalas */}
            <RotatingMandala className="absolute top-2 left-2 w-5 h-5 opacity-[0.25]" />
            <RotatingMandala className="absolute top-2 right-2 w-5 h-5 opacity-[0.25]" />

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center mt-2">
              <p className="label text-[9px] sm:text-[11px] md:text-xs uppercase tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r from-[#B0852A] via-[#D4AF37] to-[#B0852A] font-bold">
                {side}
              </p>
              <h3 className="script text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-maroon mt-1 sm:mt-2 md:mt-1 lg:mt-2 group-hover:scale-105 transition-transform duration-700 drop-shadow-sm">
                {data.surname}
              </h3>
              
              <div className="my-2 sm:my-4 md:my-3 lg:my-4 w-12 sm:w-16 md:w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
              
              <p className="display text-xs sm:text-sm md:text-base lg:text-lg text-maroon-deep/90 mb-3 sm:mb-5 md:mb-4 lg:mb-5 px-1 font-medium leading-relaxed group-hover:text-maroon transition-colors duration-300">
                {data.note}
              </p>
              
              <button
                onClick={onOpen}
                className="mt-auto px-2 sm:px-6 md:px-6 lg:px-8 py-1.5 sm:py-2.5 md:py-2.5 lg:py-3 bg-gradient-to-r from-maroon-deep to-maroon text-cream label text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] rounded shadow-[0_4px_12px_rgba(122,31,43,0.4)] hover:shadow-[0_6px_20px_rgba(201,162,39,0.6)] border border-gold/50 hover:border-gold relative overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1"
              >
                <span className="relative z-10">View Family Tree</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

function FamiliesPage() {
  const [activeSide, setActiveSide] = useState<"groom" | "bride" | null>(null);
  const [activeCard, setActiveCard] = useState(0);

  // Auto-slide on mobile just for fun luxury feel
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 768 && !activeSide) {
        setActiveCard(prev => (prev + 1) % 2);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSide]);

  return (
    <PageShell>
      <section className="w-full h-full flex flex-col items-center justify-center px-0 sm:px-2 md:px-4 origin-center scale-[0.85] sm:scale-[0.90] md:scale-100 lg:scale-95 xl:scale-[0.85] mt-[12vh] md:mt-0">
        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center">
          
          <div className="text-center mb-4 md:mb-6 mt-2 md:mt-0">
            <DecorativeKalash />
            
            <div className="flex items-center justify-center space-x-3 mt-6 md:mt-4 lg:mt-6">
              <TitleFlourish className="rotate-180 hidden sm:block w-24 md:w-20 lg:w-32" />
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1.2 }}
                className="script text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-maroon drop-shadow-md leading-tight whitespace-nowrap"
                style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
              >
                Two Families, One Union
              </motion.h2>
              <TitleFlourish className="hidden sm:block w-24 md:w-20 lg:w-32" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:gap-8 md:gap-8 lg:gap-10 mt-2 w-full max-w-4xl px-0 md:px-0 lg:px-4">
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

          <motion.img 
            initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 1.5, duration: 2 }}
            src={cows} alt="" aria-hidden 
            className="mt-4 md:mt-4 lg:mt-8 w-full max-w-xs md:max-w-[12rem] lg:max-w-sm mx-auto max-h-16 md:max-h-16 lg:max-h-24 object-contain drop-shadow-lg" 
            loading="lazy" 
          />
        </div>
      </section>

      <GroomTreeModal isOpen={activeSide === "groom"} onClose={() => setActiveSide(null)} />
      <BrideTreeModal isOpen={activeSide === "bride"} onClose={() => setActiveSide(null)} />

    </PageShell>
  );
}

function GroomTreeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-md bg-gradient-to-b from-[#2A080D] via-maroon-deep to-[#1A0508] border-[3px] border-[#D4AF37] rounded-t-full rounded-b-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(212,175,55,0.15)] overflow-hidden flex flex-col group"
          >
            <div className="absolute inset-0 rounded-t-full rounded-b-[40px] border-[2px] border-gold/40 m-1 opacity-60 pointer-events-none z-0" />
            <div className="absolute inset-0 rounded-t-full rounded-b-[40px] border border-gold/20 opacity-50 group-hover:opacity-100 group-hover:animate-[pulse_3s_infinite] pointer-events-none z-0" />
            <ModalDecoBackground />

            <div className="p-4 pt-12 pb-6 text-center border-b border-gold/30 bg-gradient-to-b from-maroon to-maroon-deep/80 relative z-10 flex flex-col items-center">
              <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon-deep transition-all hover:scale-110 hover:rotate-90 text-sm z-50">✕</button>
              
              <div className="flex items-center space-x-2">
                <TitleFlourish className="w-8 md:w-12 rotate-180" />
                <h2 className="script text-3xl md:text-4xl text-gold drop-shadow-md">The Kapoor Family</h2>
                <TitleFlourish className="w-8 md:w-12" />
              </div>
            </div>

            <div className="p-6 pt-8 relative flex flex-col items-center z-10">
              <div className="absolute top-8 bottom-32 left-1/2 w-0.5 bg-gradient-to-b from-gold via-gold/70 to-transparent -translate-x-1/2 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-700" />
              
              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="flex justify-center space-x-10 w-full">
                  <ArchPortrait name="Shri. Rajesh" relation="Father" />
                  <ArchPortrait name="Smt. Anjali" relation="Mother" />
                </div>
                <div className="flex justify-center w-full">
                  <CirclePortrait name="Rhea Kapoor" relation="Sister" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function BrideTreeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-md bg-gradient-to-b from-[#2A080D] via-maroon-deep to-[#1A0508] border-[3px] border-[#D4AF37] rounded-t-full rounded-b-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(212,175,55,0.15)] overflow-hidden flex flex-col group"
          >
            <div className="absolute inset-0 rounded-t-full rounded-b-[40px] border-[2px] border-gold/40 m-1 opacity-60 pointer-events-none z-0" />
            <div className="absolute inset-0 rounded-t-full rounded-b-[40px] border border-gold/20 opacity-50 group-hover:opacity-100 group-hover:animate-[pulse_3s_infinite] pointer-events-none z-0" />
            <ModalDecoBackground />

            <div className="p-4 pt-12 pb-6 text-center border-b border-gold/30 bg-gradient-to-b from-maroon to-maroon-deep/80 relative z-10 flex flex-col items-center">
              <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon-deep transition-all hover:scale-110 hover:rotate-90 text-sm z-50">✕</button>
              
              <div className="flex items-center space-x-2">
                <TitleFlourish className="w-8 md:w-12 rotate-180" />
                <h2 className="script text-3xl md:text-4xl text-gold drop-shadow-md">The Malhotra Family</h2>
                <TitleFlourish className="w-8 md:w-12" />
              </div>
            </div>

            <div className="p-6 pt-8 relative flex flex-col items-center pb-12 z-10">
              <div className="absolute top-8 bottom-24 left-1/2 w-0.5 bg-gradient-to-b from-gold via-gold/70 to-transparent -translate-x-1/2 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-700" />
              
              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="flex justify-center space-x-10 w-full">
                  <ArchPortrait name="Shri. Vikram" relation="Father" />
                  <ArchPortrait name="Smt. Meera" relation="Mother" />
                </div>
                <div className="flex justify-center w-full">
                  <CirclePortrait name="Advait Malhotra" relation="Brother" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
