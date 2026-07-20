import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroArch from "@/assets/hero-arch.jpg";
import ganesha from "@/assets/ganesha.png";
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

      <PageShell showGarland={false} showCorners={false}>
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
          {/* Painted arch backdrop */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroArch})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-cream/30" aria-hidden />

          <Petals />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto pt-28 md:pt-36"
          >
            <motion.img
              src={ganesha}
              alt="Lord Ganesha"
              className="w-28 md:w-36 mb-4 drop-shadow-[0_6px_20px_rgba(122,31,43,0.25)]"
              initial={{ scale: 0.6, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.p
              className="label text-[10px] md:text-xs text-gold animate-pulse-gold mb-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.3, duration: 1 }}
            >
              ॥ Shri Ganeshaya Namah ॥
            </motion.p>
            <motion.p
              className="display italic text-maroon text-base md:text-lg max-w-md leading-relaxed mb-6"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5, duration: 1 }}
            >
              {invitation.welcome}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.7, duration: 1.2 }}
              className="script text-maroon-deep text-6xl md:text-8xl leading-none"
            >
              {invitation.groom}
              <span className="block script text-4xl md:text-5xl text-gold my-2">&</span>
              {invitation.bride}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.1, duration: 1 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <Divider label="Engagement Ceremony" />
              <p className="display text-maroon text-xl md:text-2xl">Sunday · 21<sup>st</sup> September 2026</p>
              <Link
                to="/events"
                className="mt-6 group relative px-8 py-3 bg-maroon text-cream label text-[10px] rounded-full shadow-[0_10px_30px_-10px_rgba(122,31,43,0.6)] hover:bg-maroon-deep transition-all hover:scale-105"
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
