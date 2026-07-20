import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import garland from "@/assets/lotus-garland.png";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/closing")({ component: ClosingPage });

function ClosingPage() {
  return (
    <PageShell>
      <section className="relative py-24 px-4 text-center overflow-hidden min-h-screen flex items-center">
        <img src={garland} alt="" aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[820px] opacity-70 rotate-180 pointer-events-none" loading="lazy" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-xl mx-auto relative z-10 pt-16 w-full"
        >
          <div className="mx-auto w-16 h-16 rounded-full mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold to-rose animate-shimmer" style={{ boxShadow: "0 0 60px 20px oklch(0.72 0.13 75 / 0.6)" }} />
            <div className="absolute inset-2 rounded-full bg-maroon-deep" />
          </div>

          <p className="display italic text-xl md:text-2xl text-maroon leading-relaxed">"{invitation.closing}"</p>
          <h3 className="script text-6xl md:text-7xl text-maroon-deep mt-8">
            {invitation.groom} <span className="text-gold">&</span> {invitation.bride}
          </h3>
          <p className="label text-xs text-gold mt-6">— Thank You For Being Part Of Our Story —</p>
        </motion.div>
      </section>
    </PageShell>
  );
}
