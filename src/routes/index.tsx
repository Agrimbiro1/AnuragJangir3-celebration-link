import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
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



export const Route = createFileRoute("/")({ component: Welcome });

function Welcome() {
  const [showIntro, setShowIntro] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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

          {/* Soft glow overlay pulsing on the arch */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.72 0.13 75 / 0.18) 0%, transparent 55%)",
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream/50" aria-hidden />

          <ThreeBackground />
          <Petals />
          <FallingLeaves />

          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 w-full flex flex-col items-center text-center mx-auto origin-center scale-[0.85] sm:scale-[0.90] md:scale-100 mt-[12vh] sm:mt-16 md:mt-10"
          >
            <div className="relative flex justify-center items-center mb-2 sm:mb-4">
              <RotatingMandala className="absolute w-24 sm:w-28 opacity-60 text-gold mix-blend-multiply" />
              <motion.img
                src={ganesha}
                alt="Lord Ganesha"
                className="w-16 sm:w-20 md:w-24 relative z-20 drop-shadow-[0_6px_20px_rgba(122,31,43,0.25)]"
                initial={{ scale: 0.6, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.p
              className="label text-[11px] sm:text-[10px] md:text-[11px] text-gold animate-pulse-gold mb-3 sm:mb-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.3, duration: 1 }}
            >
              ॥ Shri Ganeshaya Namah ॥
            </motion.p>
            <motion.p
              className="display italic text-maroon text-sm sm:text-sm md:text-base max-w-[260px] sm:max-w-xs md:max-w-md leading-snug mb-3 sm:mb-5 px-4"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5, duration: 1 }}
            >
              {invitation.welcome}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.7, duration: 1.2 }}
              className="script text-maroon-deep text-4xl sm:text-5xl md:text-7xl leading-none w-full text-center flex flex-col items-center justify-center"
            >
              <span>{invitation.groom}</span>
              <span className="block script text-2xl sm:text-3xl md:text-4xl text-gold my-1 sm:my-2">&</span>
              <span>{invitation.bride}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.1, duration: 1 }}
              className="mt-4 sm:mt-6 md:mt-3 flex flex-col items-center gap-1 sm:gap-2 w-full"
            >
              <AnimatedDivider className="w-48 sm:w-64" />
              <p className="display text-maroon text-sm sm:text-base md:text-xl">Sunday · 21<sup>st</sup> September 2026</p>
              <a
                href="/events"
                onClick={handleOpenInvitation}
                className="mt-2 group relative px-6 py-2 bg-gradient-to-r from-maroon via-maroon-deep to-maroon text-cream label text-[10px] rounded-full shadow-[0_10px_30px_-10px_rgba(122,31,43,0.6)] hover:shadow-[0_10px_40px_-5px_rgba(201,162,39,0.5)] transition-all hover:scale-105 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/30 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                <span className="absolute inset-0 rounded-full ring-1 ring-gold/60 ring-offset-2 ring-offset-cream" />
                <span className="relative z-10 font-bold tracking-widest drop-shadow-md">Open Invitation →</span>
              </a>
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
