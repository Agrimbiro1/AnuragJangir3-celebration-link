import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/closing")({ component: ClosingPage });

function ClosingPage() {
  return (
    <PageShell>
      <section className="w-full h-full flex items-center justify-center px-4 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-xl mx-auto relative z-10 w-full"
        >
          <div className="mx-auto w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold to-rose animate-shimmer" style={{ boxShadow: "0 0 50px 15px oklch(0.72 0.13 75 / 0.6)" }} />
            <div className="absolute inset-2 rounded-full bg-maroon-deep" />
          </div>

          <p className="display italic text-sm md:text-xl text-maroon leading-relaxed">"{invitation.closing}"</p>
          <h3 className="script text-4xl sm:text-5xl md:text-7xl text-maroon-deep mt-4">
            {invitation.groom} <span className="text-gold">&</span> {invitation.bride}
          </h3>
          <p className="label text-[10px] md:text-xs text-gold mt-3">— Thank You For Being Part Of Our Story —</p>
        </motion.div>
      </section>
    </PageShell>
  );
}
