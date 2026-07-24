import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import { BottomNav } from "./BottomNav";
import { AnimatedFoliage } from "./AnimatedFoliage";
import cleanArchPortrait from "@/assets/clean-arch-portrait.png";
import heroArchDesktop from "@/assets/hero-arch-desktop.jpg";
import { PremiumBackground } from "./AnimatedDecorations";

export function PageShell({
  children,
  className = "",
  showFoliage = true,
  showGarland = true,
  showCorners = true,
  showBottomNav = true,
  showArch = true, // New prop for inner pages
}: {
  children: ReactNode;
  className?: string;
  showFoliage?: boolean;
  showGarland?: boolean;
  showCorners?: boolean;
  showBottomNav?: boolean;
  showArch?: boolean;
}) {
  const { pathname } = useLocation();

  // Use AnimatedFoliage if any of the old props are true (for backward compatibility)
  const renderPlants = showFoliage && (showGarland || showCorners);

  return (
    <main className="fixed inset-0 text-maroon-deep overflow-hidden bg-cream">
      {/* Background Arch for Inner Pages */}
      {showArch && (
        <>
          <motion.img
            src={cleanArchPortrait}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-top origin-top md:hidden"
            initial={{ scale: 1.35 }}
            animate={{ scale: [1.35, 1.37, 1.35] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={heroArchDesktop}
            alt=""
            aria-hidden
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
            initial={{ scale: 1.01 }}
            animate={{ scale: [1, 1.005, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {!showArch && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,oklch(0.95_0.04_80)_0%,oklch(0.92_0.035_75)_60%,oklch(0.88_0.045_70)_100%)]" />
      )}

      {/* Global Premium Background Animations (Sparkles and Corner Mandalas) */}
      <PremiumBackground />

      {/* We only render AnimatedFoliage if not showing the Arch, 
          because the Arch background already has the rich foliage built-in! */}
      {renderPlants && !showArch && <AnimatedFoliage />}

      {/* Main Inner Page Content — crossfade to avoid blink on nav */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`absolute inset-0 z-10 h-full w-full overflow-hidden flex flex-col 
            ${showArch ? "pt-[15vh] pb-[20vh] px-4 md:px-[15vw] items-center justify-center" : ""} 
            ${className}`}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {showBottomNav && <BottomNav />}
    </main>
  );
}
