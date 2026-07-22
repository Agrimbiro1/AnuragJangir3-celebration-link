import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";
import { AnimatedDivider } from "@/components/invitation/AnimatedDecorations";

export const Route = createFileRoute("/blessings")({ component: BlessingsPage });

// Sleek Jali Corner Accent
const JaliCorner = ({ className = "" }: { className?: string }) => (
  <svg className={`w-5 h-5 text-gold/60 pointer-events-none absolute ${className}`} viewBox="0 0 40 40" fill="none">
    <path d="M0 0H40V4H4V40H0V0Z" fill="currentColor" />
    <circle cx="10" cy="10" r="2.5" fill="currentColor" />
  </svg>
);

// Animated Lotus SVG Accent
const AnimatedLotus = ({ className = "" }: { className?: string }) => (
  <motion.svg
    className={`w-7 h-7 text-gold drop-shadow-md pointer-events-none absolute ${className}`}
    viewBox="0 0 40 40"
    fill="none"
    animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M20 5C23 12 28 16 35 18C28 20 23 24 20 31C17 24 12 20 5 18C12 16 17 12 20 5Z" fill="currentColor" opacity="0.85" />
    <path d="M20 10C22 14 25 17 30 18C25 19 22 22 20 26C18 22 15 19 10 18C15 17 18 14 20 10Z" fill="#FDF5D3" opacity="0.6" />
    <circle cx="20" cy="18" r="2" fill="#7A1F2B" />
  </motion.svg>
);

const QUICK_BLESSINGS = [
  "✨ Wishing eternal love & harmony!",
  "🪔 May God bless your union!",
  "🌸 A lifetime of endless joy!",
];

function BlessingsPage() {
  const [items, setItems] = useState([
    { name: "The Sharma Family", message: "May your lives be blessed with eternal love, harmony, and prosperity. Warmest wishes on your new beginning!" },
    { name: "Uncle & Aunty Kapoor", message: "Wishing the beautiful couple a lifetime of togetherness filled with laughter and endless joy. God bless you both!" },
    { name: "Verma Relatives", message: "May your journey together be as colorful and grand as this celebration. Loads of blessings!" },
    ...invitation.seedBlessings,
  ]);

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [guestName] = useState("Rahul Verma"); // Simulated guest name from backend

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#D4AF37", "#FDF5D3", "#7A1F2B"],
      zIndex: 300,
    });
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!msg.trim()) {
      setErr("Please write your blessing before sending.");
      return;
    }
    setItems([{ name: guestName, message: msg.trim().slice(0, 400) }, ...items]);
    setMsg("");
    setErr("");
    triggerConfetti();
  };

  const renderBlessingCard = (b: { name: string; message: string }, i: number) => (
    <motion.article
      key={`${b.name}-${i}`}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: i * 0.03 }}
      className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FDF7EA] rounded-xl p-3.5 md:p-4 shadow-xs border border-gold/35 hover:border-gold/60 transition-all overflow-hidden group"
    >
      <JaliCorner className="top-1.5 left-1.5" />
      <JaliCorner className="top-1.5 right-1.5 rotate-90" />

      <div className="relative z-10">
        <p className="display italic text-xs md:text-sm text-maroon-deep/90 leading-relaxed">
          "{b.message}"
        </p>
        <div className="mt-2.5 flex items-center justify-between border-t border-gold/20 pt-2">
          <span className="text-gold text-[10px]">❋</span>
          <p className="label text-[10px] md:text-xs font-bold tracking-widest text-gold text-right">
            — {b.name}
          </p>
        </div>
      </div>
    </motion.article>
  );

  return (
    <PageShell>
      <section className="relative w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 origin-center scale-[0.89] sm:scale-[0.90] md:scale-[0.88] lg:scale-[0.92] mt-[13vh] sm:mt-[6vh] md:mt-[-3vh]">
        <div className="max-w-5xl w-full mx-auto flex flex-col min-h-0 h-full relative z-10">
          {/* Header */}
          <div className="text-center shrink-0 mb-2">
            <p className="label text-[10px] md:text-xs text-gold animate-pulse-gold tracking-[0.3em] uppercase">
              ASHIRWAD
            </p>
            <h2 className="script text-4xl sm:text-5xl md:text-6xl text-maroon mt-0.5 mb-0.5 drop-shadow-md">
              Shower Your Blessings
            </h2>
            <AnimatedDivider />
          </div>

          {/* Wrapper for Golden Glowing Outer Aura */}
          <div className="relative w-full max-w-5xl mx-auto flex-1 h-[395px] sm:h-[415px] md:h-[440px] md:max-h-[460px]">
            {/* Glowing Golden Aura Outer Border */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-gold/30 via-amber-400/60 to-gold/30 animate-pulse pointer-events-none blur-[3px]" />

            {/* Master 3D Luxury Box Card containing both Input Section & Blessings List */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#FFFDF8] via-[#FDF6E8] to-[#F8EBD4] rounded-2xl p-4.5 sm:p-5 md:p-6 shadow-[0_20px_50px_-15px_rgba(122,31,43,0.25),0_0_0_1px_rgba(212,175,55,0.4)] border-2 border-gold/60 overflow-hidden w-full h-full flex flex-col justify-between"
            >
              {/* Animated Light Shimmer Beam */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-x-full animate-[shimmer_5s_infinite] pointer-events-none" />

              {/* Gold Jali Corner Accents on Master Card */}
              <JaliCorner className="top-2.5 left-2.5" />
              <JaliCorner className="top-2.5 right-2.5 rotate-90" />
              <JaliCorner className="bottom-2.5 left-2.5 -rotate-90" />
              <JaliCorner className="bottom-2.5 right-2.5 rotate-180" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-stretch h-full min-h-0 relative z-10">
                {/* Left Side: Input Blessing Area */}
                <div className="md:col-span-5 flex flex-col justify-between h-full">
                  <form onSubmit={submit} className="space-y-2.5 sm:space-y-3 my-auto">
                    {/* Dynamic Greeting */}
                    <div>
                      <h3 className="script text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl text-maroon font-bold drop-shadow-xs">
                        Namaste, {guestName}
                      </h3>
                      <p className="display italic text-[11px] sm:text-xs md:text-sm text-maroon-deep/75 mt-0.5">
                        Leave your heartfelt wishes & blessings for the couple.
                      </p>
                    </div>

                    {/* Interactive Quick Inspiration Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {QUICK_BLESSINGS.map((qb, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setMsg(qb)}
                          className="text-[9px] sm:text-[10px] bg-gradient-to-r from-gold/15 via-amber-200/25 to-gold/15 hover:from-gold/30 hover:to-gold/30 text-maroon-deep border border-gold/45 rounded-full px-2.5 py-1 transition-all hover:scale-105 active:scale-95 cursor-pointer font-medium shadow-2xs hover:shadow-gold/30"
                        >
                          {qb}
                        </button>
                      ))}
                    </div>

                    {/* Textarea Input */}
                    <div className="relative">
                      <textarea
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="Write your blessing..."
                        rows={3}
                        maxLength={400}
                        className="w-full bg-cream/80 border border-gold/40 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-maroon-deep placeholder:text-maroon/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 shadow-inner resize-none transition-all leading-relaxed"
                      />
                      <span className="absolute bottom-2 right-2.5 text-[9px] text-gold/60 label">
                        {msg.length}/400
                      </span>
                    </div>

                    {err && (
                      <p className="text-destructive text-xs italic font-medium">
                        {err}
                      </p>
                    )}

                    {/* Buttons Container */}
                    <div className="space-y-2 pt-0.5">
                      {/* Send Button */}
                      <button
                        type="submit"
                        className="relative group w-full py-2.5 sm:py-3 bg-gradient-to-r from-maroon via-maroon-deep to-maroon text-cream label text-xs font-bold tracking-[0.2em] rounded-full shadow-[0_8px_25px_-5px_rgba(122,31,43,0.6)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] border border-gold/50 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
                      >
                        {/* Shimmer Light Beam */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                        <span className="absolute inset-0 rounded-full ring-2 ring-gold/50 ring-offset-1 ring-offset-cream pointer-events-none" />
                        <span className="relative z-10 drop-shadow-md">SEND BLESSING</span>
                        <span className="relative z-10 group-hover:rotate-12 transition-transform drop-shadow-md">
                          ✨
                        </span>
                      </button>

                      {/* Mobile view trigger button */}
                      <button
                        type="button"
                        onClick={() => setShowMobileModal(true)}
                        className="relative group w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#FDF0A6] via-[#D4AF37] to-[#B38F24] text-maroon-deep label text-xs font-bold tracking-[0.2em] rounded-full shadow-[0_8px_25px_-5px_rgba(212,175,55,0.6)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.8)] transition-all hover:scale-[1.02] active:scale-[0.98] border border-gold flex items-center justify-center gap-2 cursor-pointer md:hidden overflow-hidden"
                      >
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                        <span className="relative z-10 drop-shadow-xs">📜 VIEW ALL BLESSINGS</span>
                        <span className="relative z-10 bg-maroon text-cream rounded-full px-2 py-0.5 text-[10px] font-bold shadow-xs">
                          {items.length}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Vertical Gold Divider for Desktop with Animated Pulse Spark */}
                <div className="hidden md:flex md:col-span-1 items-center justify-center">
                  <div className="w-px h-[85%] bg-gradient-to-b from-transparent via-gold/40 to-transparent relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-gold to-transparent"
                      animate={{ y: ["-100%", "300%"] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>

                {/* Right Side: Blessed Cards List inside the Master Section Card */}
                <div className="hidden md:flex md:col-span-6 flex-col h-full min-h-0 overflow-hidden">
                  <div className="flex items-center justify-between mb-2 px-1 shrink-0">
                    <span className="label text-[9px] text-gold tracking-widest uppercase font-bold">
                      Wishes & Blessings ({items.length})
                    </span>
                  </div>
                  <div className="overflow-y-auto space-y-3 pr-1 flex-1 scrollbar-none max-h-[350px] md:max-h-[370px]">
                    <AnimatePresence initial={false}>
                      {items.map((b, i) => renderBlessingCard(b, i))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Pop-up Modal for Blessings List */}
        <AnimatePresence>
          {showMobileModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[300] bg-maroon-deep/80 backdrop-blur-md flex items-center justify-center p-4 md:hidden"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-gradient-to-br from-[#FFFDF8] via-[#FDF6E8] to-[#F8EBD4] rounded-2xl p-5 shadow-2xl border border-gold/60 max-h-[85vh] flex flex-col overflow-hidden"
              >
                <JaliCorner className="top-2.5 left-2.5" />
                <JaliCorner className="top-2.5 right-2.5 rotate-90" />
                <JaliCorner className="bottom-2.5 left-2.5 -rotate-90" />
                <JaliCorner className="bottom-2.5 right-2.5 rotate-180" />

                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-gold/30 pb-3 mb-3 shrink-0 relative z-10">
                  <h3 className="script text-2xl text-maroon font-bold">
                    All Blessings ({items.length})
                  </h3>
                  <button
                    onClick={() => setShowMobileModal(false)}
                    className="w-7 h-7 rounded-full bg-maroon/10 hover:bg-maroon/20 text-maroon flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {/* Scrollable list inside modal */}
                <div className="overflow-y-auto space-y-3 flex-1 pr-1 relative z-10 scrollbar-none">
                  {items.map((b, i) => renderBlessingCard(b, i))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageShell>
  );
}
