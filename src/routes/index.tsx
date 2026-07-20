import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import heroArch from "@/assets/hero-arch.jpg";
import ganesha from "@/assets/ganesha.png";
import cows from "@/assets/pichwai-cows.png";
import garland from "@/assets/lotus-garland.png";
import corner from "@/assets/corner-foliage.png";
import elephant from "@/assets/elephant.png";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
import { Petals } from "@/components/invitation/Petals";

export const Route = createFileRoute("/")({ component: Invitation });

function useCountdown(target: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, done: diff === 0 };
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Invitation() {
  return (
    <main className="min-h-screen text-maroon-deep overflow-x-hidden">
      <Hero />
      <Events />
      <Families />
      <Gallery />
      <Countdown />
      <Rsvp />
      <Blessings />
      <Venue />
      <Closing />
    </main>
  );
}

/* ----------------- HERO ----------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      {/* Painted arch backdrop */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroArch})`, backgroundSize: "cover" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-cream/30" aria-hidden />

      {/* Hanging garland */}
      <motion.img
        src={garland}
        alt=""
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[820px] animate-sway origin-top pointer-events-none z-10"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <Petals />

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto pt-32 md:pt-40"
      >
        <motion.img
          src={ganesha}
          alt="Lord Ganesha"
          className="w-32 md:w-40 mb-4 drop-shadow-[0_6px_20px_rgba(122,31,43,0.25)]"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="label text-[10px] md:text-xs text-gold animate-pulse-gold mb-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
        >
          ॥ Shri Ganeshaya Namah ॥
        </motion.p>
        <motion.p
          className="display italic text-maroon text-base md:text-lg max-w-md leading-relaxed mb-6"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1 }}
        >
          {invitation.welcome}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 1.2 }}
          className="script text-maroon-deep text-6xl md:text-8xl leading-none"
        >
          {invitation.groom}
          <span className="block script text-4xl md:text-5xl text-gold my-2">&</span>
          {invitation.bride}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <Divider label="Engagement Ceremony" />
          <p className="display text-maroon text-xl md:text-2xl">Sunday · 21<sup>st</sup> September 2026</p>
          <button
            onClick={() => scrollTo("events")}
            className="mt-6 group relative px-8 py-3 bg-maroon text-cream label text-[10px] rounded-full shadow-[0_10px_30px_-10px_rgba(122,31,43,0.6)] hover:bg-maroon-deep transition-all hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full ring-1 ring-gold/60 ring-offset-2 ring-offset-cream" />
            View Ceremonies
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ----------------- EVENTS ----------------- */
function Events() {
  return (
    <section id="events" className="relative py-24 px-4">
      <img src={corner} alt="" aria-hidden className="absolute top-0 left-0 w-40 md:w-64 opacity-90 pointer-events-none" loading="lazy" />
      <img src={corner} alt="" aria-hidden className="absolute top-0 right-0 w-40 md:w-64 opacity-90 pointer-events-none -scale-x-100" loading="lazy" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <p className="label text-[10px] text-gold">Shubh Muhurat</p>
          <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Our Celebrations</h2>
          <Divider />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
          {invitation.events.map((e, i) => (
            <motion.article
              key={e.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="paper-card rounded-2xl p-8 relative overflow-hidden"
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
  );
}

/* ----------------- FAMILIES ----------------- */
function Families() {
  const [openG, setOpenG] = useState(false);
  const [openB, setOpenB] = useState(false);

  return (
    <section id="families" className="relative py-24 px-4 bg-[radial-gradient(ellipse_at_center,oklch(0.94_0.035_80)_0%,transparent_70%)]">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <p className="label text-[10px] text-gold">Two Families, One Union</p>
          <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Our Families</h2>
          <Divider />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <FamilyCard side="Groom's Side" data={invitation.groomFamily} open={openG} setOpen={setOpenG} />
          <FamilyCard side="Bride's Side" data={invitation.brideFamily} open={openB} setOpen={setOpenB} />
        </div>

        {/* Pichwai cows accent */}
        <img src={cows} alt="" aria-hidden className="mt-16 w-full max-w-3xl mx-auto opacity-90" loading="lazy" />
      </div>
    </section>
  );
}

function FamilyCard({ side, data, open, setOpen }: { side: string; data: typeof invitation.groomFamily; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="paper-card rounded-2xl p-8 text-center"
    >
      <p className="label text-[10px] text-gold">{side}</p>
      <h3 className="script text-4xl text-maroon mt-2">{data.surname}</h3>
      <div className="my-4 h-px gold-divider mx-auto w-32" />
      <p className="display text-lg text-maroon-deep">{data.parents}</p>
      <p className="italic text-maroon-deep/70 mt-2">{data.note}</p>
      <button
        onClick={() => setOpen(!open)}
        className="mt-6 label text-[10px] text-gold hover:text-maroon transition-colors"
      >
        {open ? "— Hide Details —" : "— Show Family Details —"}
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
              <a href={`tel:${data.contactPhone.replace(/\s/g, "")}`} className="inline-block mt-2 px-4 py-2 rounded-full bg-maroon text-cream label text-[10px]">
                {data.contactPhone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/* ----------------- GALLERY ----------------- */
const galleryImages = [
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80", alt: "Couple portrait" },
  { url: "https://images.unsplash.com/photo-1600788907416-456578634209?w=800&q=80", alt: "Ceremony details" },
  { url: "https://images.unsplash.com/photo-1610030006630-3e5c5c8a4d59?w=800&q=80", alt: "Traditional henna" },
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Wedding rings" },
  { url: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80", alt: "Bride portrait" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="gallery" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="label text-[10px] text-gold">Moments in Time</p>
          <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Our Story</h2>
          <Divider />
        </div>

        <motion.button
          type="button"
          onClick={() => setOpen(0)}
          initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="block w-full mt-6 overflow-hidden rounded-2xl paper-card p-2 group"
        >
          <img src={galleryImages[0].url} alt={galleryImages[0].alt} loading="lazy" className="w-full aspect-[16/9] object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-700" />
        </motion.button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4">
          {galleryImages.slice(1).map((g, i) => (
            <motion.button
              type="button"
              key={g.url}
              onClick={() => setOpen(i + 1)}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-xl paper-card p-1.5 group"
            >
              <img src={g.url} alt={g.alt} loading="lazy" className="w-full aspect-square object-cover rounded-lg group-hover:scale-110 transition-transform duration-700" />
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
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 text-cream label text-xs">Close ✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ----------------- COUNTDOWN ----------------- */
function Countdown() {
  const { d, h, m, s, done } = useCountdown(invitation.targetDate);
  const units = useMemo(() => [
    { v: d, l: "Days" }, { v: h, l: "Hours" }, { v: m, l: "Minutes" }, { v: s, l: "Seconds" },
  ], [d, h, m, s]);

  return (
    <section id="countdown" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="label text-[10px] text-gold">Counting Down to Our Special Day</p>
        <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Until We Say Yes</h2>
        <Divider />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="paper-card rounded-3xl p-8 md:p-12 mt-6 relative"
        >
          <div className="absolute inset-2 rounded-2xl border border-gold/40 pointer-events-none" />
          {done ? (
            <p className="script text-4xl text-maroon">Today's the day! 🌸</p>
          ) : (
            <div className="grid grid-cols-4 gap-2 md:gap-6">
              {units.map((u) => (
                <div key={u.l} className="flex flex-col items-center">
                  <motion.span
                    key={u.v}
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="display text-4xl md:text-6xl text-maroon-deep tabular-nums"
                    style={{ textShadow: "0 2px 12px oklch(0.72 0.13 75 / 0.35)" }}
                  >
                    {String(u.v).padStart(2, "0")}
                  </motion.span>
                  <span className="label text-[9px] md:text-[10px] text-gold mt-2">{u.l}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------- RSVP ----------------- */
function Rsvp() {
  const [state, setState] = useState<"idle" | "confirming" | "done">("idle");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);

  const celebrate = () => {
    const end = Date.now() + 900;
    const colors = ["#C9A227", "#7A1F2B", "#EBA0AC", "#FFF8EC"];
    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (state !== "confirming") return;
    celebrate();
    setState("done");
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 bg-maroon-deep text-cream overflow-hidden">
      <img src={elephant} alt="" aria-hidden className="absolute -bottom-4 -left-6 w-40 md:w-64 opacity-90 pointer-events-none" loading="lazy" />
      <img src={elephant} alt="" aria-hidden className="absolute -bottom-4 -right-6 w-40 md:w-64 opacity-90 pointer-events-none -scale-x-100" loading="lazy" />

      <div className="max-w-xl mx-auto text-center relative z-10">
        <p className="label text-[10px] text-gold">With Joy in Our Hearts</p>
        <h2 className="script text-5xl md:text-6xl text-cream mt-2">Will You Join Us?</h2>
        <div className="flex items-center justify-center gap-4 my-6">
          <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="text-gold">❋</span>
          <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <AnimatePresence mode="wait">
          {state === "idle" && (
            <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <p className="display italic text-lg text-cream/85 mb-8 max-w-md mx-auto">
                Your presence would make our celebration truly complete. Kindly grace us with your reply.
              </p>
              <button
                onClick={() => setState("confirming")}
                className="px-10 py-4 bg-gold text-maroon-deep label text-xs rounded-full shadow-[0_10px_40px_-10px_rgba(201,162,39,0.6)] hover:scale-105 transition-transform"
              >
                Accept Invitation
              </button>
            </motion.div>
          )}

          {state === "confirming" && (
            <motion.form key="confirming" onSubmit={submit} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4 max-w-sm mx-auto text-left">
              <div>
                <label className="label text-[10px] text-gold block mb-2">Your Name</label>
                <input required maxLength={80} value={name} onChange={(e) => setName(e.target.value.slice(0, 80))} className="w-full bg-cream/10 border border-gold/40 rounded-lg px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold" placeholder="Full name" />
              </div>
              <div>
                <label className="label text-[10px] text-gold block mb-2">Guests attending</label>
                <input required type="number" min={1} max={10} value={guests} onChange={(e) => setGuests(Math.max(1, Math.min(10, Number(e.target.value) || 1)))} className="w-full bg-cream/10 border border-gold/40 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold" />
              </div>
              <button type="submit" className="w-full mt-2 py-4 bg-gold text-maroon-deep label text-xs rounded-full hover:scale-[1.02] transition-transform">
                Confirm With Joy
              </button>
            </motion.form>
          )}

          {state === "done" && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="paper-card rounded-2xl p-8 text-maroon-deep">
              <p className="script text-4xl text-maroon">Thank you, {name || "friend"} ✿</p>
              <p className="display italic mt-3">We can't wait to celebrate with you.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ----------------- BLESSINGS ----------------- */
function Blessings() {
  const [items, setItems] = useState(invitation.seedBlessings);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!name.trim() || !msg.trim()) { setErr("Please share your name and blessing."); return; }
    setItems([{ name: name.trim().slice(0, 60), message: msg.trim().slice(0, 400) }, ...items]);
    setName(""); setMsg(""); setErr("");
  };

  return (
    <section id="blessings" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="label text-[10px] text-gold">Ashirwad</p>
          <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Shower Your Blessings</h2>
          <Divider />
          <p className="display italic text-maroon-deep/70 max-w-md mx-auto">Your kind words make our celebration more special.</p>
        </div>

        <form onSubmit={submit} className="paper-card rounded-2xl p-6 md:p-8 mt-8 space-y-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={60}
                 className="w-full bg-cream/60 border border-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-maroon-deep placeholder:text-maroon/40" />
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Write your blessing for the couple…" rows={4} maxLength={400}
                    className="w-full bg-cream/60 border border-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-gold text-maroon-deep placeholder:text-maroon/40 resize-none" />
          {err && <p className="text-destructive text-sm italic">{err}</p>}
          <button type="submit" className="px-8 py-3 bg-maroon text-cream label text-[10px] rounded-full hover:bg-maroon-deep transition-colors">
            Send Blessing
          </button>
        </form>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <AnimatePresence initial={false}>
            {items.map((b, i) => (
              <motion.article
                key={`${b.name}-${i}`}
                layout
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="paper-card rounded-xl p-6 relative"
              >
                <span className="absolute top-3 right-4 text-gold text-2xl">❋</span>
                <p className="display italic text-maroon-deep/85 leading-relaxed">"{b.message}"</p>
                <p className="mt-4 label text-[10px] text-gold">— {b.name}</p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ----------------- VENUE ----------------- */
function Venue() {
  const v = invitation.venue;
  return (
    <section id="venue" className="relative py-24 px-4 bg-[radial-gradient(ellipse_at_center,oklch(0.94_0.035_80)_0%,transparent_70%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="label text-[10px] text-gold">Sthaan</p>
          <h2 className="script text-5xl md:text-6xl text-maroon mt-2">Find Your Way</h2>
          <Divider />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="paper-card rounded-2xl p-2 overflow-hidden">
            <iframe
              src={v.embed}
              title="Venue map"
              className="w-full aspect-[4/3] rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="paper-card rounded-2xl p-6">
              <p className="label text-[10px] text-gold mb-2">Venue</p>
              <h3 className="display text-2xl text-maroon-deep">{v.name}</h3>
              <p className="italic text-maroon-deep/80 mt-2">{v.address}</p>
              <a href={v.mapUrl} target="_blank" rel="noreferrer" className="inline-block mt-4 px-6 py-2.5 bg-maroon text-cream label text-[10px] rounded-full hover:bg-maroon-deep transition-colors">
                Open in Google Maps →
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[invitation.groomFamily, invitation.brideFamily].map((f, i) => (
                <div key={f.contactPhone} className="paper-card rounded-2xl p-5">
                  <p className="label text-[10px] text-gold mb-1">{i === 0 ? "Groom Side" : "Bride Side"}</p>
                  <p className="display text-lg text-maroon-deep">{f.contactName}</p>
                  <a href={`tel:${f.contactPhone.replace(/\s/g, "")}`} className="inline-block mt-3 text-maroon underline decoration-gold underline-offset-4">
                    {f.contactPhone}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- CLOSING ----------------- */
function Closing() {
  return (
    <section id="closing" className="relative py-32 px-4 text-center overflow-hidden">
      <img src={garland} alt="" aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-[820px] opacity-70 rotate-180 pointer-events-none" loading="lazy" />

      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
        className="max-w-xl mx-auto relative z-10 pt-24"
      >
        {/* Diya glow */}
        <div className="mx-auto w-16 h-16 rounded-full mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold to-rose animate-shimmer" style={{ boxShadow: "0 0 60px 20px oklch(0.72 0.13 75 / 0.6)" }} />
          <div className="absolute inset-2 rounded-full bg-maroon-deep" />
        </div>

        <p className="display italic text-xl md:text-2xl text-maroon leading-relaxed">"{invitation.closing}"</p>
        <h3 className="script text-6xl md:text-7xl text-maroon-deep mt-8">{invitation.groom} <span className="text-gold">&</span> {invitation.bride}</h3>
        <p className="label text-xs text-gold mt-6">— Thank You For Being Part Of Our Story —</p>
      </motion.div>
    </section>
  );
}
