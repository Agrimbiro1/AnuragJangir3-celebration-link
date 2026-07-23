import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import elephant from "@/assets/elephant.png";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/rsvp")({ component: RsvpPage });

function RsvpPage() {
  const [state, setState] = useState<"idle" | "done">("idle");

  const celebrate = () => {
    const end = Date.now() + 1500;
    const colors = ["#D4AF37", "#FDF5D3", "#E2B75A", "#7A1F2B"];
    (function frame() {
      confetti({ particleCount: 8, angle: 60, spread: 80, origin: { x: 0 }, colors, zIndex: 200 });
      confetti({ particleCount: 8, angle: 120, spread: 80, origin: { x: 1 }, colors, zIndex: 200 });
      confetti({ particleCount: 5, spread: 120, origin: { y: 0.8 }, colors, scalar: 1.2, zIndex: 200 });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleAccept = () => {
    celebrate();
    setState("done");
  };

  return (
    <PageShell>
      <section className="relative w-full h-full flex items-center justify-center px-4 origin-center scale-[0.85] sm:scale-[0.90] md:scale-100 mt-[4vh] md:mt-12 pb-12 sm:pb-0">
        <img src={elephant} alt="" aria-hidden className="absolute bottom-2 sm:bottom-16 -left-3 sm:left-4 md:left-[12%] lg:left-[18%] w-14 sm:w-24 md:w-32 opacity-80 md:opacity-90 pointer-events-none animate-elephant block" loading="lazy" />
        <img src={elephant} alt="" aria-hidden className="absolute bottom-2 sm:bottom-16 -right-3 sm:right-4 md:right-[12%] lg:right-[18%] w-14 sm:w-24 md:w-32 opacity-80 md:opacity-90 pointer-events-none animate-elephant-mirror block" loading="lazy" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full mt-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="label text-[11px] md:text-xs text-gold animate-pulse-gold tracking-[0.3em]">With Joy in Our Hearts</p>
            <h2 className="script text-5xl sm:text-7xl md:text-[6rem] md:whitespace-nowrap leading-none text-maroon mt-3 mb-3 drop-shadow-md">Will You Join Us?</h2>
            <div className="flex items-center justify-center gap-4 my-5 sm:my-6">
              <span className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="text-gold text-lg sm:text-xl animate-spin-slow">❋</span>
              <span className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10, filter: "blur(4px)" }} transition={{ duration: 0.8 }}>
                <p className="display italic text-base sm:text-2xl lg:text-3xl text-maroon-deep/90 mb-8 sm:mb-10 max-w-lg sm:max-w-xl mx-auto leading-relaxed drop-shadow-sm px-2">
                  "In the garden of our lives, your presence blooms as the most cherished flower. Grace our celebration with your love."
                </p>
                <div className="flex items-center justify-center mt-6">
                  <button
                    onClick={handleAccept}
                    className="relative group px-10 sm:px-14 py-3.5 sm:py-4 bg-gradient-to-r from-maroon via-maroon-deep to-maroon text-cream label text-xs sm:text-base rounded-full shadow-[0_10px_35px_-5px_rgba(122,31,43,0.8)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.7)] transition-all hover:scale-105 active:scale-95 overflow-hidden border border-gold/40 cursor-pointer"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                    <span className="absolute inset-0 rounded-full ring-2 ring-gold/70 ring-offset-2 ring-offset-cream pointer-events-none" />
                    <span className="relative z-10 font-bold tracking-[0.25em] drop-shadow-md flex items-center gap-2">
                      <span>✨</span> JOYFULLY ACCEPT <span>✨</span>
                    </span>
                  </button>
                </div>
              </motion.div>
            )}

            {state === "done" && (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1, ease: "easeOut" }} className="py-12">
                <p className="script text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-none text-maroon-deep drop-shadow-md mb-6 whitespace-nowrap">Thank you ✿</p>
                <p className="display italic text-lg sm:text-2xl md:text-4xl text-maroon drop-shadow-sm whitespace-nowrap">We can't wait to celebrate with you!</p>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} className="mt-10">
                  <span className="text-5xl filter drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">✨</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageShell>
  );
}
