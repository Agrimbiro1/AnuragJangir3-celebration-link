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
      {showIntro && <OpeningAnimation onComplete={() => setShowIntro(false)} />}

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
            transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 1, delay: 3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Sacred Motto */}
            <motion.p
              className="label text-[10px] sm:text-[11.5px] text-gold tracking-[0.35em] uppercase font-bold animate-pulse-gold mb-1.5 sm:mb-2 drop-shadow-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.3, duration: 1 }}
            >
              ॥ Shri Ganeshaya Namah ॥
            </motion.p>

            {/* Personalized Guest Greeting - Same as Blessing Section */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 3.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative my-1.5 sm:my-2 px-5 sm:px-6 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-gold/15 via-amber-100/40 to-gold/15 border border-gold/45 shadow-[0_4px_20px_-4px_rgba(212,175,55,0.25)] backdrop-blur-xs flex items-center gap-2"
            >
              <span className="text-gold text-xs sm:text-sm animate-pulse">🌸</span>
              <h3 className="script text-2xl sm:text-3xl md:text-4xl text-maroon font-bold drop-shadow-xs tracking-wide">
                Dear {guestName}
              </h3>
              <span className="text-gold text-xs sm:text-sm animate-pulse">🌸</span>
            </motion.div>

            {/* Event Tagline */}
            <motion.p
              className="display italic text-maroon-deep text-sm sm:text-base md:text-lg max-w-[280px] sm:max-w-md leading-relaxed mb-3 sm:mb-4 px-2 font-medium"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5, duration: 1 }}
            >
              {invitation.welcome}
            </motion.p>

            {/* Couple Names - Royal Script Typography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.7, duration: 1.2 }}
              className="flex flex-col items-center justify-center w-full my-1 sm:my-2"
            >
              <h1 
                className="script text-maroon text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight whitespace-nowrap"
                style={{ textShadow: "0 6px 24px rgba(201,162,39,0.4)" }}
              >
                {invitation.groom} <span className="text-gold script text-3xl sm:text-5xl md:text-6xl my-1 sm:my-2">&</span> {invitation.bride}
              </h1>
            </motion.div>

            {/* Event Details & CTA Button */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.1, duration: 1 }}
              className="mt-3 sm:mt-5 flex flex-col items-center gap-2 sm:gap-3 w-full"
            >
              <AnimatedDivider className="w-44 sm:w-60 md:w-72" />
              
              <div className="flex items-center gap-2 text-maroon font-medium mt-1">
                <span className="text-gold text-xs animate-spin-slow">❋</span>
                <p className="display text-maroon-deep text-sm sm:text-lg md:text-2xl font-semibold tracking-wide">
                  Sunday · 21<sup>st</sup> September 2026
                </p>
                <span className="text-gold text-xs animate-spin-slow">❋</span>
              </div>
              <p className="label text-[9px] sm:text-[11px] text-gold font-bold tracking-[0.25em] uppercase">
                ✦ Heritage Palace • Jaipur ✦
              </p>

              {/* Ultra-Premium Action CTA Button */}
              <motion.a
                href="/events"
                onClick={handleOpenInvitation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 group relative px-8 sm:px-10 py-3 sm:py-3.5 bg-gradient-to-r from-maroon-deep via-maroon to-maroon-deep text-cream label text-[10.5px] sm:text-xs font-bold tracking-[0.25em] uppercase rounded-full shadow-[0_10px_35px_-5px_rgba(122,31,43,0.7)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.6)] transition-all overflow-hidden border border-gold/60 cursor-pointer"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <span className="absolute inset-0 rounded-full ring-2 ring-gold/70 ring-offset-2 ring-offset-cream pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2.5 drop-shadow-md">
                  <span>💌</span>
                  <span>ENTER INVITATION</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
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
