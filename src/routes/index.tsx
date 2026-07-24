import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import heroArch from "@/assets/hero-arch.jpg";
import heroArchDesktop from "@/assets/hero-arch-desktop.jpg";

import ganesha from "@/assets/ganesha.png";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
import { Petals } from "@/components/invitation/Petals";
import { FallingLeaves } from "@/components/invitation/FallingLeaves";
import { PageShell } from "@/components/invitation/PageShell";
import { OpeningAnimation } from "@/components/invitation/OpeningAnimation";
import { RotatingMandala, AnimatedDivider } from "@/components/invitation/AnimatedDecorations";
import { ThreeBackground } from "@/components/invitation/ThreeBackground";
import { AnimatedMandalaBackground } from "@/components/invitation/AnimatedMandalaBackground";
import { useGuestName } from "@/hooks/useGuestName";
import { Sparkles, Mail, ChevronRight } from "lucide-react";



export const Route = createFileRoute("/")({ component: Welcome });

function Welcome() {
  const guestName = useGuestName("Rahul Verma");
  const [showIntro, setShowIntro] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleOpenInvitation = (e: React.MouseEvent) => {
    e.preventDefault();
    setClickPos({ x: e.clientX, y: e.clientY });
    setIsNavigating(true);
    
    // Golden confetti burst
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      colors: ['#D4AF37', '#FDF5D3', '#E2B75A'],
      zIndex: 250,
      disableForReducedMotion: true
    });

    setTimeout(() => {
      navigate({ to: "/events" });
    }, 1200); // Increased time for premium animation
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <OpeningAnimation key="intro" onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <PageShell showGarland={false} showCorners={false} showBottomNav={false} showArch={false}>
        <section className="relative w-full h-full flex flex-col items-center justify-center px-4 overflow-hidden">
          {/* Full-screen painted arch backdrop with subtle breathing animation */}
          <motion.img
            src={heroArch}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: [1, 1.04, 1], opacity: 1 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeOut" },
              scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.img
            src={heroArchDesktop}
            alt=""
            aria-hidden
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: [1, 1.03, 1], opacity: 1 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeOut" },
              scale: { duration: 22, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Soft ambient radiance overlay pulsing on the arch */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(212, 175, 55, 0.25) 0%, rgba(122, 31, 43, 0.08) 50%, transparent 75%)",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream/40 pointer-events-none" aria-hidden />

          <ThreeBackground />
          <AnimatedMandalaBackground />
          <Petals />
          <FallingLeaves />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 w-full flex flex-col items-center text-center mx-auto origin-center scale-[0.85] sm:scale-[0.90] md:scale-100 mt-[10vh] sm:mt-14 md:mt-8 px-4 select-none"
          >
            {/* Sacred Ganesha Emblem with Dual Rotating Mandalas & Gold Halo */}
            <div className="relative flex justify-center items-center mb-2 sm:mb-3">
              <RotatingMandala className="absolute w-28 sm:w-36 md:w-40 opacity-30 text-gold mix-blend-multiply pointer-events-none" />
              <RotatingMandala className="absolute w-20 sm:w-26 md:w-30 opacity-20 text-gold mix-blend-multiply -rotate-180 pointer-events-none" />
              <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-radial from-gold/35 via-gold/10 to-transparent blur-md pointer-events-none" />
              
              <motion.img
                src={ganesha}
                alt="Lord Ganesha"
                className="w-16 sm:w-20 md:w-24 relative z-20 drop-shadow-[0_8px_24px_rgba(122,31,43,0.35)]"
                initial={{ scale: 0.6, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Sacred Motto */}
            <motion.p
              className="label text-[10px] sm:text-[11.5px] text-gold tracking-[0.35em] uppercase font-bold animate-pulse-gold mb-1.5 sm:mb-2 drop-shadow-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.8 }}
            >
              ॥ Shri Ganeshaya Namah ॥
            </motion.p>

            {/* Personalized Guest Greeting - Same as Blessing Section */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative my-1.5 sm:my-2 px-5 sm:px-6 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-gold/15 via-amber-100/40 to-gold/15 border border-gold/45 shadow-[0_4px_20px_-4px_rgba(212,175,55,0.25)] backdrop-blur-xs flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold animate-pulse" />
              <h3 className="script text-xl sm:text-2xl md:text-3xl text-maroon font-bold drop-shadow-xs tracking-wide">
                Dear {guestName}
              </h3>
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold animate-pulse" />
            </motion.div>

            {/* Event Tagline */}
            <motion.p
              className="display italic text-maroon-deep text-xs sm:text-sm md:text-base max-w-[280px] sm:max-w-md leading-relaxed mb-2.5 sm:mb-3 px-2 font-medium"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
            >
              {invitation.welcome}
            </motion.p>

            {/* Couple Names - Royal Script Typography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }}
              className="relative flex flex-col items-center justify-center w-full my-1 sm:my-2 py-1"
            >
              {/* Soft Golden Ambient Radiance behind names */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-20 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.25)_0%,_transparent_75%)] pointer-events-none blur-xl" />

              <h1 
                className="script text-transparent bg-clip-text bg-gradient-to-r from-[#5B121A] via-maroon via-[#7A1F2B] to-[#5B121A] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight whitespace-nowrap relative z-10 font-bold drop-shadow-[0_4px_18px_rgba(212,175,55,0.4)]"
              >
                {invitation.groom}{" "}
                <span className="script text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF5D6] to-[#D4AF37] text-2xl sm:text-4xl md:text-5xl my-1 sm:my-2 px-1 font-normal drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)] animate-pulse-gold">
                  &
                </span>{" "}
                {invitation.bride}
              </h1>
            </motion.div>

            {/* Event Details & CTA Button */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-3 sm:mt-5 flex flex-col items-center gap-2 sm:gap-3 w-full"
            >
              <AnimatedDivider className="w-44 sm:w-60 md:w-72" />
              
              {/* Translucent Glass Blur Pill Container for Event Date & Venue */}
              <div className="my-1.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#1A0508]/35 backdrop-blur-md border border-gold/50 shadow-[0_4px_25px_rgba(0,0,0,0.3)] flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-gold text-xs animate-spin-slow">❋</span>
                  <p className="display text-[#FDF5D3] text-sm sm:text-lg md:text-2xl font-bold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    Sunday · 21<sup>st</sup> September 2026
                  </p>
                  <span className="text-gold text-xs animate-spin-slow">❋</span>
                </div>
                <p className="label text-[9.5px] sm:text-[11.5px] text-[#E2B75A] font-bold tracking-[0.25em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  ✦ Heritage Palace • Jaipur ✦
                </p>
              </div>

              {/* Ultra-Premium Action CTA Button */}
              <motion.a
                href="/events"
                onClick={handleOpenInvitation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 group relative px-9 sm:px-11 py-3.5 sm:py-4 bg-gradient-to-r from-[#4A0E17] via-[#7A1F2B] via-maroon to-[#4A0E17] text-[#FFF7D6] label text-[11px] sm:text-xs font-extrabold tracking-[0.28em] uppercase rounded-full shadow-[0_12px_40px_-5px_rgba(122,31,43,0.85)] hover:shadow-[0_16px_50px_rgba(212,175,55,0.7)] transition-all overflow-hidden border-2 border-gold/70 cursor-pointer"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:animate-[shimmer_1.8s_infinite]" />
                <span className="absolute inset-0 rounded-full ring-2 ring-gold/80 ring-offset-2 ring-offset-[#FAF3E2] pointer-events-none opacity-80" />
                <span className="relative z-10 flex items-center gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gold animate-pulse" />
                  <span>ENTER INVITATION</span>
                  <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gold group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </PageShell>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
          >
            {/* Core expanding burst */}
            <motion.div
              className="absolute bg-gradient-to-br from-maroon-deep via-[#3A0C14] to-[#1A0508] shadow-[inset_0_0_100px_rgba(212,175,55,0.5)] rounded-full flex items-center justify-center overflow-hidden"
              style={{ top: clickPos.y, left: clickPos.x, x: "-50%", y: "-50%" }}
              initial={{ width: "10px", height: "10px", opacity: 0.8 }}
              animate={{ width: "300vw", height: "300vw", opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <RotatingMandala className="w-[100vw] h-[100vw] text-gold opacity-10 mix-blend-screen scale-150 animate-spin-slow" />
            </motion.div>
            
            {/* Layered Gold Rings */}
            <motion.div
              className="absolute border-[2px] border-gold/60 rounded-full"
              style={{ top: clickPos.y, left: clickPos.x, x: "-50%", y: "-50%" }}
              initial={{ width: "10px", height: "10px", opacity: 1 }}
              animate={{ width: "200vw", height: "200vw", opacity: 0, borderWidth: "10px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.div
              className="absolute border-[1px] border-gold/40 rounded-full"
              style={{ top: clickPos.y, left: clickPos.x, x: "-50%", y: "-50%" }}
              initial={{ width: "10px", height: "10px", opacity: 1 }}
              animate={{ width: "150vw", height: "150vw", opacity: 0, borderWidth: "5px" }}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
            />
            
            {/* Screen Flash */}
            <motion.div
              className="absolute inset-0 bg-gold/20 mix-blend-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
