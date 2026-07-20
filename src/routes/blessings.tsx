import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { invitation } from "@/lib/invitation-data";
import { Divider } from "@/components/invitation/Divider";
import { PageShell } from "@/components/invitation/PageShell";

export const Route = createFileRoute("/blessings")({ component: BlessingsPage });

function BlessingsPage() {
  const [items, setItems] = useState(invitation.seedBlessings);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!name.trim() || !msg.trim()) {
      setErr("Please share your name and blessing.");
      return;
    }
    setItems([{ name: name.trim().slice(0, 60), message: msg.trim().slice(0, 400) }, ...items]);
    setName(""); setMsg(""); setErr("");
  };

  return (
    <PageShell>
      <section className="relative py-20 px-4">
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
    </PageShell>
  );
}
