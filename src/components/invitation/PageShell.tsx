import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { BottomNav } from "./BottomNav";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main className="min-h-screen text-maroon-deep overflow-x-hidden pb-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
      <BottomNav />
    </main>
  );
}
