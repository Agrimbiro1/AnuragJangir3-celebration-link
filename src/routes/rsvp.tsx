import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import elephant from "@/assets/elephant.png";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/rsvp")({ component: RsvpPage });

function RsvpPage() {
  const [state, setState] = useState<"idle" | "confirming" | "done">("idle");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);

  const celebrate = () => {
    const end = Date.now() + 1200;
    const colors = ["#C9A227", "#7A1F2B", "#EBA0AC", "#FFF8EC"];
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 }, colors });
      confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 }, colors });
      confetti({ particleCount: 3, spread: 100, origin: { y: 0.6 }, colors, scalar: 1.2 });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    celebrate();
    setState("done");
  };

  return (
    <PageShell>
      <section className="relative py-20 px-4 min-h-screen flex items-center">
        <img src={elephant} alt="" aria-hidden className="absolute bottom-28 -left-4 w-28 md:w-44 opacity-90 pointer-events-none" loading="lazy" />
        <img src={elephant} alt="" aria-hidden className="absolute bottom-28 -right-4 w-28 md:w-44 opacity-90 pointer-events-none -scale-x-100" loading="lazy" />

        <div className="max-w-xl mx-auto text-center relative z-10 w-full">
          <p className="label text-[10px] text-gold">With Joy in Our Hearts</p>
          <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Will You Join Us?</h2>
          <div className="flex items-center justify-center gap-4 my-6">
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-gold">❋</span>
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                <p className="display italic text-lg text-maroon-deep/80 mb-8 max-w-md mx-auto leading-relaxed">
                  "In the garden of our lives, your presence blooms as the most cherished flower. Grace our celebration with your love."
                </p>
                <button
                  onClick={() => setState("confirming")}
                  className="px-10 py-4 bg-maroon text-cream label text-xs rounded-full shadow-[0_10px_40px_-10px_rgba(122,31,43,0.5)] hover:bg-maroon-deep hover:scale-105 transition-all"
                >
                  Accept Invitation
                </button>
              </motion.div>
            )}

            {state === "confirming" && (
              <motion.form key="confirming" onSubmit={submit} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="paper-card rounded-2xl p-6 space-y-4 max-w-sm mx-auto text-left">
                <div>
                  <label className="label text-[10px] text-gold block mb-2">Your Name</label>
                  <input required maxLength={80} value={name} onChange={(e) => setName(e.target.value.slice(0, 80))} className="w-full bg-cream/60 border border-gold/40 rounded-lg px-4 py-3 text-maroon-deep placeholder:text-maroon/40 focus:outline-none focus:border-gold" placeholder="Full name" />
                </div>
                <div>
                  <label className="label text-[10px] text-gold block mb-2">Guests attending</label>
                  <input required type="number" min={1} max={10} value={guests} onChange={(e) => setGuests(Math.max(1, Math.min(10, Number(e.target.value) || 1)))} className="w-full bg-cream/60 border border-gold/40 rounded-lg px-4 py-3 text-maroon-deep focus:outline-none focus:border-gold" />
                </div>
                <button type="submit" className="w-full mt-2 py-4 bg-maroon text-cream label text-xs rounded-full hover:bg-maroon-deep hover:scale-[1.02] transition-all">
                  Confirm With Joy 🎉
                </button>
              </motion.form>
            )}

            {state === "done" && (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="paper-card rounded-2xl p-8 text-maroon-deep">
                <p className="script text-4xl text-maroon">Thank you, {name || "friend"} ✿</p>
                <p className="display italic mt-3">We can't wait to celebrate with you.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageShell>
  );
}
