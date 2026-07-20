import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroArch from "@/assets/hero-arch.jpg";
import ganesha from "@/assets/ganesha.png";
import garland from "@/assets/lotus-garland.png";
import elephant from "@/assets/elephant.png";
import foliage from "@/assets/corner-foliage.png";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
import { Petals } from "@/components/invitation/Petals";
import { PageShell } from "@/components/invitation/PageShell";


export const Route = createFileRoute("/")({ component: Welcome });

function Welcome() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[60] bg-maroon-deep flex items-center justify-center overflow-hidden"
            onClick={() => setShowIntro(false)}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="absolute rounded-full border border-gold/60"
                initial={{ width: 0, height: 0, opacity: 0.9 }}
                animate={{ width: 900, height: 900, opacity: 0 }}
                transition={{ duration: 2.2, delay: i * 0.4, repeat: Infinity, ease: "easeOut" }}
              />
            ))}
            <motion.div
              initial={{ scale: 0.4, opacity: 0, rotate: -30 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center px-4"
            >
              <motion.img
                src={ganesha}
                alt="Lord Ganesha"
                className="w-24 sm:w-28 mx-auto drop-shadow-[0_0_40px_rgba(201,162,39,0.7)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="script text-gold text-3xl sm:text-4xl mt-3"
              >
                ॥ Shubh Aarambh ॥
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="label text-cream/80 text-[10px] mt-2 tracking-[0.4em]"
              >
                A Sacred Invitation
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageShell showGarland={false} showCorners={false}>
        <section className="relative w-full h-full flex flex-col items-center justify-center px-4 pb-16 overflow-hidden">
          {/* Painted arch backdrop — contained so it doesn't zoom on desktop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
            <motion.img
              src={heroArch}
              alt=""
              className="h-full w-auto max-w-none object-contain opacity-90 animate-arch-glow"
              initial={{ scale: 1.04, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/60" aria-hidden />

          {/* Top lotus garland — sways gently from top */}
          <motion.img
            src={garland}
            alt=""
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] max-w-[560px] md:max-w-[760px] lg:max-w-[880px] animate-sway origin-top pointer-events-none z-[5] opacity-95"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 0.95 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          {/* Bottom lotus garland — mirrored, sways from bottom */}
          <motion.img
            src={garland}
            alt=""
            aria-hidden
            className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[92%] max-w-[560px] md:max-w-[760px] lg:max-w-[880px] animate-sway-bottom pointer-events-none z-[5] opacity-90"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          />

          {/* Side foliage / plants — sway */}
          <motion.img
            src={foliage}
            alt=""
            aria-hidden
            className="absolute bottom-14 left-0 w-24 sm:w-32 md:w-52 lg:w-64 opacity-85 pointer-events-none z-[6] animate-leaf-sway"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 0.85 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          />
          <motion.img
            src={foliage}
            alt=""
            aria-hidden
            className="absolute bottom-14 right-0 w-24 sm:w-32 md:w-52 lg:w-64 opacity-85 pointer-events-none z-[6] animate-leaf-sway-mirror"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 0.85 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          />

          {/* Ceremonial elephants — walk in from sides, bob gently */}
          <motion.img
            src={elephant}
            alt=""
            aria-hidden
            className="absolute bottom-16 left-2 sm:left-6 md:left-16 w-20 sm:w-28 md:w-40 lg:w-48 opacity-95 pointer-events-none z-[7] animate-elephant drop-shadow-[0_10px_20px_rgba(122,31,43,0.25)]"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 0.95 }}
            transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
          />
          <motion.img
            src={elephant}
            alt=""
            aria-hidden
            className="absolute bottom-16 right-2 sm:right-6 md:right-16 w-20 sm:w-28 md:w-40 lg:w-48 opacity-95 pointer-events-none z-[7] animate-elephant-mirror drop-shadow-[0_10px_20px_rgba(122,31,43,0.25)]"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 0.95 }}
            transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
          />

          <Petals />


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto"
          >
            <motion.img
              src={ganesha}
              alt="Lord Ganesha"
              className="w-16 sm:w-20 md:w-24 mb-2 drop-shadow-[0_6px_20px_rgba(122,31,43,0.25)]"
              initial={{ scale: 0.6, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.p
              className="label text-[9px] md:text-[11px] text-gold animate-pulse-gold mb-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.3, duration: 1 }}
            >
              ॥ Shri Ganeshaya Namah ॥
            </motion.p>
            <motion.p
              className="display italic text-maroon text-xs sm:text-sm md:text-base max-w-md leading-snug mb-3 px-2"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5, duration: 1 }}
            >
              {invitation.welcome}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.7, duration: 1.2 }}
              className="script text-maroon-deep text-4xl sm:text-5xl md:text-7xl leading-none"
            >
              {invitation.groom}
              <span className="block script text-2xl sm:text-3xl md:text-4xl text-gold my-1">&</span>
              {invitation.bride}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.1, duration: 1 }}
              className="mt-3 flex flex-col items-center gap-2"
            >
              <Divider label="Engagement Ceremony" />
              <p className="display text-maroon text-sm sm:text-base md:text-xl">Sunday · 21<sup>st</sup> September 2026</p>
              <Link
                to="/events"
                className="mt-2 group relative px-6 py-2 bg-maroon text-cream label text-[10px] rounded-full shadow-[0_10px_30px_-10px_rgba(122,31,43,0.6)] hover:bg-maroon-deep transition-all hover:scale-105"
              >
                <span className="absolute inset-0 rounded-full ring-1 ring-gold/60 ring-offset-2 ring-offset-cream" />
                View Ceremonies →
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </PageShell>
    </>
  );
}
