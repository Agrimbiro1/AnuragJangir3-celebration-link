import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/venue")({ component: VenuePage });

function VenuePage() {
  const v = invitation.venue;
  return (
    <PageShell>
      <section className="relative py-20 px-4 bg-[radial-gradient(ellipse_at_center,oklch(0.94_0.035_80)_0%,transparent_70%)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="label text-[10px] text-gold">Sthaan</p>
            <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Find Your Way</h2>
            <Divider />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="paper-card rounded-2xl p-2 overflow-hidden">
              <iframe
                src={v.embed}
                title="Venue map"
                className="w-full aspect-[4/3] rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="paper-card rounded-2xl p-6">
                <p className="label text-[10px] text-gold mb-2">Venue</p>
                <h3 className="display text-2xl text-maroon-deep">{v.name}</h3>
                <p className="italic text-maroon-deep/80 mt-2">{v.address}</p>
                <a href={v.mapUrl} target="_blank" rel="noreferrer" className="inline-block mt-4 px-6 py-2.5 bg-maroon text-cream label text-[10px] rounded-full hover:bg-maroon-deep transition-colors">
                  Open in Google Maps →
                </a>
              </div>

              <div>
                <p className="label text-[10px] text-gold text-center mb-3">Family Representatives</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[invitation.groomFamily, invitation.brideFamily].map((f, i) => (
                    <div key={f.contactPhone} className="paper-card rounded-2xl p-5 text-center">
                      <p className="label text-[10px] text-gold mb-1">{i === 0 ? "Groom Side" : "Bride Side"}</p>
                      <p className="display text-lg text-maroon-deep">{f.contactName}</p>
                      <a href={`tel:${f.contactPhone.replace(/\s/g, "")}`} className="inline-block mt-3 px-4 py-2 rounded-full bg-gold text-maroon-deep label text-[10px]">
                        {f.contactPhone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
