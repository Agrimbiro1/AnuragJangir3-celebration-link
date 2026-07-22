import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const pages = [
  { path: "/", label: "Welcome", icon: "✨" },
  { path: "/events", label: "Events", icon: "🎉" },
  { path: "/families", label: "Families", icon: "👑" },
  { path: "/gallery", label: "Gallery", icon: "🌸" },
  { path: "/countdown", label: "Countdown", icon: "⏳" },
  { path: "/rsvp", label: "RSVP", icon: "💌" },
  { path: "/blessings", label: "Blessings", icon: "📜" },
  { path: "/venue", label: "Venue", icon: "🏰" },
  { path: "/closing", label: "Thanks", icon: "💖" },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const idx = pages.findIndex((p) => p.path === pathname);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null;
  const current = idx >= 0 ? pages[idx] : pages[0];

  return (
    <>
      {/* Quick Navigation Full Menu Drawer */}
      <AnimatePresence>
        {showQuickMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-16 inset-x-0 z-50 p-3 max-w-lg mx-auto pointer-events-auto"
          >
            <div className="bg-gradient-to-b from-[#3D0A11]/98 via-[#5C131D]/98 to-[#3D0A11]/98 backdrop-blur-xl border-2 border-gold/70 rounded-2xl p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-gold/30 pb-2 mb-2.5 px-1">
                <span className="label text-[10px] text-gold tracking-[0.2em] font-bold uppercase flex items-center gap-1.5">
                  <span className="text-gold">✦</span> Quick Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setShowQuickMenu(false)}
                  className="text-gold/70 hover:text-gold text-xs font-bold px-1.5 py-0.5 rounded cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {pages.map((p) => {
                  const isActive = p.path === pathname;
                  return (
                    <Link
                      key={p.path}
                      to={p.path}
                      onClick={() => setShowQuickMenu(false)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all text-center ${
                        isActive
                          ? "bg-gradient-to-r from-gold via-amber-300 to-gold text-maroon-deep border-gold font-bold shadow-md scale-[1.02]"
                          : "bg-maroon/40 hover:bg-maroon/70 text-cream/90 border-gold/25 hover:border-gold/60"
                      }`}
                    >
                      <span className="text-base mb-0.5">{p.icon}</span>
                      <span className="label text-[10px] tracking-wider truncate w-full">{p.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Bottom Navbar */}
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed bottom-0 inset-x-0 z-40 pointer-events-none"
      >
        <div className="mx-auto max-w-xl px-2 pb-2.5 pointer-events-auto">
          {/* Golden Outer Glow Ring */}
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-gold/40 via-amber-300/80 to-gold/40 animate-pulse pointer-events-none blur-[2px]" />

            <div className="relative rounded-full bg-gradient-to-r from-[#4A0E17]/95 via-[#7A1F2B]/95 to-[#4A0E17]/95 backdrop-blur-md border-2 border-gold/70 shadow-[0_10px_35px_rgba(122,31,43,0.5),0_0_0_1px_rgba(212,175,55,0.3)] px-3 py-2 flex items-center justify-between gap-2 overflow-hidden">
              {/* Shimmer Light Beam */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/15 to-transparent -translate-x-full animate-[shimmer_6s_infinite] pointer-events-none" />

              {/* Prev Button */}
              {prev ? (
                <Link
                  to={prev.path}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-maroon/60 hover:bg-maroon text-cream border border-gold/40 hover:border-gold transition-all hover:scale-[1.03] active:scale-[0.97] group cursor-pointer shadow-xs shrink-0"
                >
                  <span className="text-gold text-xs group-hover:-translate-x-0.5 transition-transform">←</span>
                  <span className="label text-[10px] sm:text-xs font-bold tracking-wider text-cream/90">{prev.label}</span>
                </Link>
              ) : (
                <div className="w-16 sm:w-20" />
              )}

              {/* Center Page Dots & Quick Menu Trigger */}
              <div className="flex items-center justify-center gap-1.5 flex-1 mx-1">
                <button
                  type="button"
                  onClick={() => setShowQuickMenu(!showQuickMenu)}
                  title="Open Quick Navigation Menu"
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-gold/20 hover:bg-gold/35 text-gold border border-gold/50 transition-all hover:scale-110 cursor-pointer shrink-0 shadow-xs"
                >
                  <span className="text-xs font-bold">☰</span>
                </button>

                {/* Dots indicator */}
                <div className="hidden sm:flex items-center gap-1.5">
                  {pages.map((p, i) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      aria-label={p.label}
                      title={p.label}
                      className={`h-2 rounded-full transition-all ${
                        i === idx
                          ? "bg-gradient-to-r from-gold to-amber-200 w-5 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                          : "bg-cream/30 hover:bg-gold/60 w-2"
                      }`}
                    />
                  ))}
                </div>

                {/* Mobile Active Page Indicator Badge */}
                <button
                  type="button"
                  onClick={() => setShowQuickMenu(!showQuickMenu)}
                  className="sm:hidden label text-[10px] text-gold font-bold tracking-wider px-2 py-0.5 rounded-full bg-gold/15 border border-gold/40 truncate max-w-[90px]"
                >
                  {current.label}
                </button>
              </div>

              {/* Next Button */}
              {next ? (
                <Link
                  to={next.path}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gold via-amber-300 to-gold text-maroon-deep font-bold border border-gold hover:brightness-110 transition-all hover:scale-[1.03] active:scale-[0.97] group cursor-pointer shadow-[0_4px_12px_rgba(212,175,55,0.4)] shrink-0"
                >
                  <span className="label text-[10px] sm:text-xs font-bold tracking-wider text-maroon-deep">{next.label}</span>
                  <span className="text-maroon-deep text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              ) : (
                <div className="w-16 sm:w-20" />
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
