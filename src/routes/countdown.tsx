import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
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
      <section className="relative py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center w-full">
          <p className="label text-[10px] text-gold">Counting Down to Our Special Day</p>
          <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Until We Say Yes</h2>
          <Divider />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="paper-card rounded-3xl p-8 md:p-12 mt-6 relative"
          >
            <div className="absolute inset-2 rounded-2xl border border-gold/40 pointer-events-none" />
            {done ? (
              <p className="script text-4xl text-maroon">Today's the day! 🌸</p>
            ) : (
              <div className="grid grid-cols-4 gap-2 md:gap-6">
                {units.map((u) => (
                  <div key={u.l} className="flex flex-col items-center">
                    <motion.span
                      key={u.v}
                      initial={{ scale: 0.9, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="display text-4xl md:text-6xl text-maroon-deep tabular-nums"
                      style={{ textShadow: "0 2px 12px oklch(0.72 0.13 75 / 0.35)" }}
                    >
                      {String(u.v).padStart(2, "0")}
                    </motion.span>
                    <span className="label text-[9px] md:text-[10px] text-gold mt-2">{u.l}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <p className="display italic text-maroon-deep/70 mt-6">Every moment brings us closer to forever.</p>
        </div>
      </section>
    </PageShell>
  );
}
