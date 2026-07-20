import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/events")({ component: EventsPage });

function EventsPage() {
  return (
    <PageShell>
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <p className="label text-[10px] text-gold">Shubh Muhurat</p>
            <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Our Celebrations</h2>
            <Divider />
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
            {invitation.events.map((e, i) => (
              <motion.article
                key={e.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="paper-card rounded-2xl p-7 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <p className="label text-[10px] text-gold mb-3">Ceremony {String(i + 1).padStart(2, "0")}</p>
                <h3 className="display text-2xl md:text-3xl text-maroon-deep mb-4">{e.name}</h3>
                <p className="display italic text-maroon mb-1">{e.date}</p>
                <p className="text-maroon-deep/80 mb-4">{e.time}</p>
                <div className="pt-4 border-t border-gold/25 space-y-2 text-sm">
                  <p><span className="label text-[10px] text-gold mr-2">Venue</span>{e.venue}</p>
                  <p className="italic text-maroon-deep/70">{e.note}</p>
                  <p><span className="label text-[10px] text-gold mr-2">Attire</span>{e.dress}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
