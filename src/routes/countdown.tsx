import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { AnimatedDivider } from "@/components/invitation/AnimatedDecorations";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/countdown")({ component: CountdownPage });

function useCountdown(target: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  };
}

function CountdownPage() {
  const { d, h, m, s, done } = useCountdown(invitation.targetDate);
  const units = useMemo(
    () => [
      { v: d, l: "Days" },
      { v: h, l: "Hours" },
      { v: m, l: "Minutes" },
      { v: s, l: "Seconds" },
    ],
    [d, h, m, s]
  );

  return (
    <PageShell>
      <section className="w-full h-full flex items-center justify-center origin-center scale-[0.85] sm:scale-[0.90] md:scale-100 mt-[6vh] md:mt-0 select-none">
        <div className="max-w-4xl mx-auto text-center w-full relative z-10 px-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="label text-[10px] md:text-[12px] text-gold uppercase tracking-[0.4em] mb-2 font-bold drop-shadow-sm"
          >
            Counting Down To Our Special Day
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="script text-6xl sm:text-7xl md:text-8xl text-maroon drop-shadow-lg mb-8"
            style={{ textShadow: "0 4px 15px rgba(201,162,39,0.3)" }}
          >
            Until We Say Yes
          </motion.h2>

          <AnimatedDivider className="w-1/2 mx-auto" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative bg-gradient-to-br from-[#E2B75A] via-[#FDF5D3] to-[#B0852A] rounded-t-[100px] md:rounded-t-[140px] rounded-b-3xl p-2 shadow-[0_20px_50px_rgba(201,162,39,0.35)] w-full max-w-sm md:max-w-3xl mx-auto mt-6"
          >
            {/* Inner Border Container */}
            <div className="bg-[#FDFBF7] rounded-t-[92px] md:rounded-t-[132px] rounded-b-2xl p-2 relative border-[2px] border-[#D4AF37]/60 shadow-[inset_0_5px_20px_rgba(122,31,43,0.08)] overflow-hidden h-full">
              
              {/* Subtle Pattern Background */}
              <div className="absolute inset-2 rounded-t-[84px] md:rounded-t-[124px] rounded-b-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iI2NkYTM0ZiIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KCTwvc3ZnPg==')] opacity-40 pointer-events-none" />
              
              {/* Core Content Box */}
              <div className="relative px-6 py-10 md:py-14 flex flex-col items-center justify-center border-[1.5px] border-[#D4AF37]/40 rounded-t-[84px] md:rounded-t-[124px] rounded-b-xl m-1 bg-[#FDFBF7]/90 shadow-[inset_0_0_30px_rgba(201,162,39,0.1)]">
                
                {/* Shine overlay */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_3s_infinite]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 border-[1px] border-[#D4AF37]/30 rounded-b-full pointer-events-none" />

                {done ? (
                  <p className="script text-4xl sm:text-5xl text-maroon relative z-10 my-4 md:my-8 drop-shadow-md">Today's the day! 🌸</p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:gap-x-12 relative z-10 w-full mt-2">
                    {units.map((u, i) => (
                      <div key={u.l} className="flex flex-col items-center relative group">
                        
                        {/* Divider Lines (Desktop: between items. Mobile: between columns and rows) */}
                        <div className={`absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-[1px] h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent ${i % 2 === 1 && 'md:block hidden'} ${i === 3 && 'hidden'}`} />
                        {i < 2 && <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent md:hidden" />}

                        <motion.span
                          key={u.v}
                          initial={{ y: -5, opacity: 0.5 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="display text-5xl sm:text-6xl md:text-7xl text-maroon-deep tabular-nums font-normal drop-shadow-md"
                        >
                          {String(u.v).padStart(2, "0")}
                        </motion.span>
                        <span className="label text-[10px] sm:text-[11px] md:text-[12px] text-gold mt-2 uppercase tracking-[0.3em] font-bold">{u.l}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="display italic text-maroon/80 text-sm md:text-lg mt-10"
          >
            Every moment brings us closer to forever.
          </motion.p>
        </div>
      </section>
    </PageShell>
  );
}
