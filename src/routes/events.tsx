import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/events")({ component: EventsPage });

function EventsPage() {
  return (
    <PageShell>
      <section className="w-full h-full flex flex-col items-center justify-center px-3 pt-24 pb-16 md:pt-28">
        <div className="max-w-5xl w-full mx-auto flex flex-col min-h-0">
          <div className="text-center shrink-0">
            <p className="label text-[9px] text-gold">Shubh Muhurat</p>
            <h2 className="script text-2xl sm:text-3xl md:text-5xl text-maroon mt-1">Our Celebrations</h2>
            <Divider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 mt-3 min-h-0">
            {invitation.events.map((e, i) => (
              <motion.article
                key={e.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="paper-card rounded-xl p-3 md:p-5 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <p className="label text-[9px] text-gold mb-1">Ceremony {String(i + 1).padStart(2, "0")}</p>
                <h3 className="display text-base md:text-2xl text-maroon-deep mb-1">{e.name}</h3>
                <p className="display italic text-maroon text-xs md:text-sm">{e.date}</p>
                <p className="text-maroon-deep/80 text-xs md:text-sm mb-2">{e.time}</p>
                <div className="pt-2 border-t border-gold/25 space-y-0.5 text-[11px] md:text-xs">
                  <p><span className="label text-[9px] text-gold mr-1">Venue</span>{e.venue}</p>
                  <p className="italic text-maroon-deep/70">{e.note}</p>
                  <p><span className="label text-[9px] text-gold mr-1">Attire</span>{e.dress}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
