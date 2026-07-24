import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  PartyPopper,
  Crown,
  Flower2,
  Hourglass,
  Mail,
  Scroll,
  Castle,
  Heart,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

export interface NavPage {
  path: string;
  label: string;
  Icon: LucideIcon;
}

export const pages: NavPage[] = [
  { path: "/", label: "Welcome", Icon: Sparkles },
  { path: "/events", label: "Events", Icon: PartyPopper },
  { path: "/families", label: "Families", Icon: Crown },
  { path: "/gallery", label: "Our Story", Icon: Flower2 },
  { path: "/countdown", label: "Countdown", Icon: Hourglass },
  { path: "/rsvp", label: "RSVP", Icon: Mail },
  { path: "/blessings", label: "Blessings", Icon: Scroll },
  { path: "/venue", label: "Venue", Icon: Castle },
  { path: "/closing", label: "Thanks", Icon: Heart },
];

const MotionLink = motion(Link);

export function BottomNav() {
  const { pathname } = useLocation();
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const idx = pages.findIndex((p) => p.path === pathname);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null;
  const current = idx >= 0 ? pages[idx] : pages[0];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pointer-events-none">
      {/* Quick Menu Popover */}
      <AnimatePresence>
        {showQuickMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pointer-events-auto max-w-md mx-auto px-4 mb-2"
          >
            <div className="bg-[#2D0B10]/95 backdrop-blur-md border-2 border-gold/70 rounded-2xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-gold/30">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                  <span className="label text-xs text-gold uppercase font-bold tracking-widest">Direct Jump</span>
                </div>
                <motion.button 
                  onClick={() => setShowQuickMenu(false)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="text-gold/80 hover:text-gold text-xs px-2 py-0.5 rounded-full border border-gold/30 flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                  <span>Close</span>
                </motion.button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {pages.map((p) => {
                  const isActive = p.path === pathname;
                  const Icon = p.Icon;
                  return (
                    <MotionLink
                      key={p.path}
                      to={p.path}
                      onClick={() => setShowQuickMenu(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all text-center ${
                        isActive
                          ? "bg-gradient-to-r from-gold via-amber-300 to-gold text-maroon-deep border-gold font-bold shadow-md"
                          : "bg-maroon/40 hover:bg-maroon/70 text-cream/90 border-gold/25 hover:border-gold/60"
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-1 ${isActive ? "text-maroon-deep" : "text-gold"}`} />
                      <span className="label text-[10px] tracking-wider truncate w-full">{p.label}</span>
                    </MotionLink>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Bottom Navbar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pointer-events-none"
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
                <MotionLink
                  to={prev.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-maroon/60 hover:bg-maroon text-cream border border-gold/40 hover:border-gold transition-all group cursor-pointer shadow-xs shrink-0"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-gold group-hover:-translate-x-0.5 transition-transform" />
                  <span className="label text-[10px] sm:text-xs font-bold tracking-wider text-cream/90">{prev.label}</span>
                </MotionLink>
              ) : (
                <div className="w-16 sm:w-20" />
              )}

              {/* Center Page Dots & Quick Menu Trigger */}
              <div className="flex items-center justify-center gap-1.5 flex-1 mx-1">
                <motion.button
                  type="button"
                  onClick={() => setShowQuickMenu(!showQuickMenu)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Open Quick Navigation Menu"
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-gold/20 hover:bg-gold/35 text-gold border border-gold/50 transition-all cursor-pointer shrink-0 shadow-xs"
                >
                  <Menu className="w-3.5 h-3.5 text-gold" />
                </motion.button>

                {/* Dots indicator */}
                <div className="hidden sm:flex items-center gap-1.5">
                  {pages.map((p, i) => (
                    <MotionLink
                      key={p.path}
                      to={p.path}
                      aria-label={p.label}
                      title={p.label}
                      whileHover={{ scale: 1.3 }}
                      className={`h-2 rounded-full transition-all ${
                        i === idx
                          ? "bg-gradient-to-r from-gold to-amber-200 w-5 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                          : "bg-cream/30 hover:bg-gold/60 w-2"
                      }`}
                    />
                  ))}
                </div>

                {/* Mobile Active Page Indicator Badge */}
                <motion.button
                  type="button"
                  onClick={() => setShowQuickMenu(!showQuickMenu)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="sm:hidden label text-[10px] text-gold font-bold tracking-wider px-2 py-0.5 rounded-full bg-gold/15 border border-gold/40 truncate max-w-[90px]"
                >
                  {current.label}
                </motion.button>
              </div>

              {/* Next Button */}
              {next ? (
                <MotionLink
                  to={next.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gold via-amber-300 to-gold text-maroon-deep font-bold border border-gold hover:brightness-110 transition-all group cursor-pointer shadow-[0_4px_12px_rgba(212,175,55,0.4)] shrink-0"
                >
                  <span className="label text-[10px] sm:text-xs font-bold tracking-wider text-maroon-deep">{next.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-maroon-deep group-hover:translate-x-0.5 transition-transform" />
                </MotionLink>
              ) : (
                <div className="w-16 sm:w-20" />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
