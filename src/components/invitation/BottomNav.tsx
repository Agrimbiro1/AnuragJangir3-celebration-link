import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const pages = [
  { path: "/", label: "Welcome", short: "❋" },
  { path: "/events", label: "Events", short: "◈" },
  { path: "/families", label: "Families", short: "❁" },
  { path: "/gallery", label: "Gallery", short: "❊" },
  { path: "/countdown", label: "Countdown", short: "◉" },
  { path: "/rsvp", label: "RSVP", short: "✿" },
  { path: "/blessings", label: "Blessings", short: "❋" },
  { path: "/venue", label: "Venue", short: "◈" },
  { path: "/closing", label: "Thanks", short: "❁" },
] as const;

export function BottomNav() {
  const { pathname } = useLocation();
  const idx = pages.findIndex((p) => p.path === pathname);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null;

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-0 inset-x-0 z-40 pb-[env(safe-area-inset-bottom)] pointer-events-none"
    >
      <div className="mx-auto max-w-2xl px-3 pb-3 pointer-events-auto">
        <div className="rounded-2xl bg-maroon-deep/95 backdrop-blur-md border border-gold/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] px-3 py-2 flex items-center gap-2">
          {prev ? (
            <Link
              to={prev.path}
              className="flex-1 min-w-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-cream/5 hover:bg-cream/10 transition text-cream"
            >
              <span className="text-gold">←</span>
              <span className="truncate label text-[10px]">{prev.label}</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <div className="flex items-center gap-1 px-2">
            {pages.map((p, i) => (
              <Link
                key={p.path}
                to={p.path}
                aria-label={p.label}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === idx ? "bg-gold w-4" : "bg-cream/30 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>

          {next ? (
            <Link
              to={next.path}
              className="flex-1 min-w-0 flex items-center justify-end gap-2 px-3 py-2 rounded-xl bg-gold text-maroon-deep hover:brightness-110 transition"
            >
              <span className="truncate label text-[10px]">{next.label}</span>
              <span>→</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </motion.nav>
  );
}
