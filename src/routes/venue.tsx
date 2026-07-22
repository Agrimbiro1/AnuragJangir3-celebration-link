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
      <section className="w-full h-full flex flex-col items-center justify-center px-3 origin-center scale-[0.85] sm:scale-[0.90] md:scale-100 mt-[-4vh] md:mt-0">
        <div className="max-w-5xl w-full mx-auto flex flex-col min-h-0">
          <div className="text-center shrink-0">
            <p className="label text-[9px] text-gold">Sthaan</p>
            <h2 className="script text-2xl sm:text-3xl md:text-5xl text-maroon mt-1">Find Your Way</h2>
            <Divider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 items-start mt-2 min-h-0">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="paper-card rounded-xl p-1.5 overflow-hidden">
              <iframe
                src={v.embed}
                title="Venue map"
                className="w-full aspect-[4/3] md:aspect-square rounded-lg border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-2">
              <div className="paper-card rounded-xl p-3 md:p-4">
                <p className="label text-[9px] text-gold mb-1">Venue</p>
                <h3 className="display text-base md:text-xl text-maroon-deep">{v.name}</h3>
                <p className="italic text-maroon-deep/80 text-xs md:text-sm mt-1">{v.address}</p>
                <a
                  href={v.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative group inline-flex items-center gap-1.5 mt-2.5 px-5 py-2 bg-gradient-to-r from-maroon via-maroon-deep to-maroon text-cream label text-[10px] md:text-xs font-bold tracking-wider rounded-full shadow-md hover:shadow-[0_8px_25px_rgba(212,175,55,0.6)] transition-all hover:scale-105 overflow-hidden border border-gold/40 cursor-pointer"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
                  <span className="absolute inset-0 rounded-full ring-2 ring-gold/50 ring-offset-1 ring-offset-cream pointer-events-none" />
                  <span className="relative z-10">OPEN IN GOOGLE MAPS</span>
                  <span className="relative z-10 text-gold group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>

              <div>
                <p className="label text-[9px] text-gold text-center mb-1">Family Representatives</p>
                <div className="grid grid-cols-2 gap-2">
                  {[invitation.groomFamily, invitation.brideFamily].map((f, i) => (
                    <div key={f.contactPhone} className="paper-card rounded-xl p-2 md:p-3 text-center">
                      <p className="label text-[9px] text-gold">{i === 0 ? "Groom Side" : "Bride Side"}</p>
                      <p className="display text-sm md:text-base text-maroon-deep mt-0.5">{f.contactName}</p>
                      <a
                        href={`tel:${f.contactPhone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-1 mt-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FDF0A6] via-[#D4AF37] to-[#B38F24] text-maroon-deep label text-[10px] font-bold border border-gold shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <span>📞</span>
                        <span>{f.contactPhone}</span>
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
