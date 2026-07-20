import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroArch from "@/assets/hero-arch.jpg";
import ganesha from "@/assets/ganesha.png";
import garland from "@/assets/lotus-garland.png";
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
            {/* radiating rings */}
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
              className="relative text-center"
            >
              <motion.img
                src={ganesha}
                alt="Lord Ganesha"
                className="w-32 mx-auto drop-shadow-[0_0_40px_rgba(201,162,39,0.7)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="script text-gold text-4xl mt-4"
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

      <PageShell>
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroArch})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-cream/30" aria-hidden />

          <motion.img
            src={garland}
            alt=""
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[820px] animate-sway origin-top pointer-events-none z-10"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 2.6 }}
          />

          <Petals />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 mt-24 md:mt-32 mx-auto w-full max-w-lg"
          >
            <div className="paper-card rounded-3xl p-8 md:p-10 text-center relative">
              <div className="absolute inset-2 rounded-2xl border border-gold/40 pointer-events-none" />
              <img
                src={ganesha}
                alt="Lord Ganesha"
                className="w-24 md:w-28 mx-auto -mt-16 drop-shadow-[0_6px_20px_rgba(122,31,43,0.25)]"
              />
              <p className="label text-[10px] text-gold mt-3 animate-pulse-gold">॥ Shri Ganeshaya Namah ॥</p>
              <p className="display italic text-maroon text-sm md:text-base leading-relaxed mt-4">
                {invitation.welcome}
              </p>
              <h1 className="script text-maroon-deep text-5xl md:text-7xl leading-none mt-4">
                {invitation.groom}
                <span className="block script text-3xl md:text-4xl text-gold my-1">&</span>
                {invitation.bride}
              </h1>
              <Divider label="Engagement Ceremony" />
              <p className="display text-maroon text-lg md:text-xl mt-2">
                Sunday · 21<sup>st</sup> September 2026
              </p>
              <Link
                to="/events"
                className="inline-block mt-6 px-8 py-3 bg-maroon text-cream label text-[10px] rounded-full shadow-[0_10px_30px_-10px_rgba(122,31,43,0.6)] hover:bg-maroon-deep transition-all hover:scale-105"
              >
                View Events →
              </Link>
            </div>
          </motion.div>
        </section>
      </PageShell>
    </>
  );
}
