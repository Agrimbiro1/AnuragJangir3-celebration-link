import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cows from "@/assets/pichwai-cows.png";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/families")({ component: FamiliesPage });

function FamiliesPage() {
  const [openG, setOpenG] = useState(false);
  const [openB, setOpenB] = useState(false);
  return (
    <PageShell>
      <section className="relative py-20 px-4 bg-[radial-gradient(ellipse_at_center,oklch(0.94_0.035_80)_0%,transparent_70%)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="label text-[10px] text-gold">Two Families, One Union</p>
            <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Our Families</h2>
            <Divider />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <FamilyCard side="Groom's Side" data={invitation.groomFamily} open={openG} setOpen={setOpenG} />
            <FamilyCard side="Bride's Side" data={invitation.brideFamily} open={openB} setOpen={setOpenB} />
          </div>

          <img src={cows} alt="" aria-hidden className="mt-12 w-full max-w-3xl mx-auto opacity-90" loading="lazy" />
        </div>
      </section>
    </PageShell>
  );
}

function FamilyCard({ side, data, open, setOpen }: { side: string; data: typeof invitation.groomFamily; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="paper-card rounded-2xl p-7 text-center"
    >
      <p className="label text-[10px] text-gold">{side}</p>
      <h3 className="script text-4xl text-maroon mt-2">{data.surname}</h3>
      <div className="my-4 h-px gold-divider mx-auto w-32" />
      <p className="display text-lg text-maroon-deep">{data.parents}</p>
      <p className="italic text-maroon-deep/70 mt-2">{data.note}</p>
      <button
        onClick={() => setOpen(!open)}
        className="mt-6 px-6 py-2 bg-maroon text-cream label text-[10px] rounded-full hover:bg-maroon-deep transition-colors"
      >
        {open ? "Hide Family Details" : "Show Family Details"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-gold/25 text-sm space-y-2">
              <p><span className="label text-[10px] text-gold mr-2">Siblings</span>{data.siblings}</p>
              <p><span className="label text-[10px] text-gold mr-2">Contact</span>{data.contactName}</p>
              <a href={`tel:${data.contactPhone.replace(/\s/g, "")}`} className="inline-block mt-2 px-4 py-2 rounded-full bg-gold text-maroon-deep label text-[10px]">
                {data.contactPhone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
