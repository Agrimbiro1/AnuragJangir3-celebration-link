import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Divider } from "@/components/invitation/Divider";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80", alt: "Couple portrait" },
  { url: "https://images.unsplash.com/photo-1600788907416-456578634209?w=800&q=80", alt: "Ceremony details" },
  { url: "https://images.unsplash.com/photo-1610030006630-3e5c5c8a4d59?w=800&q=80", alt: "Traditional henna" },
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Wedding rings" },
  { url: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80", alt: "Bride portrait" },
  { url: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=80", alt: "Family" },
];

function FloatSvg({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="20" cy="20" r="6" />
        <circle cx="20" cy="8" r="3" />
        <circle cx="20" cy="32" r="3" />
        <circle cx="8" cy="20" r="3" />
        <circle cx="32" cy="20" r="3" />
      </g>
    </svg>
  );
}

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <PageShell>
      <section className="w-full h-full flex flex-col items-center justify-center px-3 pt-24 pb-16 md:pt-28">
        <div className="max-w-5xl w-full mx-auto flex flex-col min-h-0">
          <div className="text-center shrink-0">
            <p className="label text-[9px] text-gold">Moments in Time</p>
            <h2 className="script text-2xl sm:text-3xl md:text-5xl text-maroon mt-1">Our Story</h2>
            <Divider />
          </div>

          <div className="mt-3 grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 relative min-h-0">
            <FloatSvg className="absolute -top-2 -left-1 w-6 md:w-8 text-gold/60 animate-pulse-gold pointer-events-none z-10" />
            <FloatSvg className="absolute top-1/2 -right-1 w-6 md:w-8 text-rose/70 animate-pulse-gold pointer-events-none z-10" />
            {galleryImages.map((g, i) => (
              <motion.button
                type="button"
                key={g.url}
                onClick={() => setOpen(i)}
                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -4, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`overflow-hidden rounded-lg paper-card p-1 group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img src={g.url} alt={g.alt} loading="lazy" className={`w-full h-full ${i === 0 ? "aspect-square" : "aspect-square"} object-cover rounded-md group-hover:scale-105 transition-transform duration-700`} />
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {open !== null && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-maroon-deep/90 z-50 flex items-center justify-center p-4"
              onClick={() => setOpen(null)}
            >
              <motion.img
                initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                src={galleryImages[open].url} alt={galleryImages[open].alt}
                className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
              />
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 text-cream label text-xs">Close ✕</button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageShell>
  );
}
