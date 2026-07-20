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
      <section className="w-full h-full flex flex-col items-center justify-center px-3 pt-24 pb-16 md:pt-28">
        <div className="max-w-5xl w-full mx-auto">
          <div className="text-center">
            <p className="label text-[9px] text-gold">Two Families, One Union</p>
            <h2 className="script text-2xl sm:text-3xl md:text-5xl text-maroon mt-1">Our Families</h2>
            <Divider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mt-3">
            <FamilyCard side="Groom's Side" data={invitation.groomFamily} open={openG} setOpen={setOpenG} />
            <FamilyCard side="Bride's Side" data={invitation.brideFamily} open={openB} setOpen={setOpenB} />
          </div>

          <img src={cows} alt="" aria-hidden className="mt-3 w-full max-w-md md:max-w-xl mx-auto opacity-90 max-h-24 md:max-h-32 object-contain" loading="lazy" />
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
      className="paper-card rounded-xl p-3 md:p-5 text-center"
    >
      <p className="label text-[9px] text-gold">{side}</p>
      <h3 className="script text-xl md:text-3xl text-maroon mt-1">{data.surname}</h3>
      <div className="my-2 h-px gold-divider mx-auto w-24" />
      <p className="display text-sm md:text-base text-maroon-deep">{data.parents}</p>
      <p className="italic text-maroon-deep/70 text-[11px] md:text-sm mt-1">{data.note}</p>
      <button
        onClick={() => setOpen(!open)}
        className="mt-2 px-4 py-1.5 bg-maroon text-cream label text-[9px] rounded-full hover:bg-maroon-deep transition-colors"
      >
        {open ? "Hide Details" : "Show Details"}
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
            <div className="pt-2 mt-2 border-t border-gold/25 text-[11px] md:text-xs space-y-1">
              <p><span className="label text-[9px] text-gold mr-1">Siblings</span>{data.siblings}</p>
              <p><span className="label text-[9px] text-gold mr-1">Contact</span>{data.contactName}</p>
              <a href={`tel:${data.contactPhone.replace(/\s/g, "")}`} className="inline-block mt-1 px-3 py-1 rounded-full bg-gold text-maroon-deep label text-[9px]">
                {data.contactPhone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
