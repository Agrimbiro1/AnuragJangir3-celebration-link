import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { BottomNav } from "./BottomNav";
import garland from "@/assets/lotus-garland.png";
import corner from "@/assets/corner-foliage.png";

export function PageShell({
  children,
  className = "",
  showGarland = true,
  showCorners = true,
}: {
  children: ReactNode;
  className?: string;
  showGarland?: boolean;
  showCorners?: boolean;
}) {
  return (
    <main className="relative min-h-screen text-maroon-deep overflow-x-hidden pb-32 bg-cream">
      {/* Pichwai paper backdrop */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.95_0.04_80)_0%,oklch(0.92_0.035_75)_60%,oklch(0.88_0.045_70)_100%)]" />
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.15] mix-blend-multiply"
           style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.5 0 0 0 0 0.35 0 0 0 0 0.15 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />

      {showGarland && (
        <motion.img
          src={garland}
          alt=""
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[820px] animate-sway origin-top pointer-events-none z-0 opacity-95"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      )}

      {showCorners && (
        <>
          <img src={corner} alt="" aria-hidden className="absolute top-0 left-0 w-28 md:w-48 opacity-80 pointer-events-none z-0" loading="lazy" />
          <img src={corner} alt="" aria-hidden className="absolute top-0 right-0 w-28 md:w-48 opacity-80 pointer-events-none -scale-x-100 z-0" loading="lazy" />
          <img src={corner} alt="" aria-hidden className="absolute bottom-24 left-0 w-24 md:w-40 opacity-70 pointer-events-none -scale-y-100 z-0" loading="lazy" />
          <img src={corner} alt="" aria-hidden className="absolute bottom-24 right-0 w-24 md:w-40 opacity-70 pointer-events-none -scale-100 z-0" loading="lazy" />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 ${className}`}
      >
        {children}
      </motion.div>
      <BottomNav />
    </main>
  );
}
