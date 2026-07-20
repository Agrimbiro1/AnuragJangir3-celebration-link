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
      <section className="w-full h-full flex flex-col items-center px-3 pt-20 pb-16">
        <div className="max-w-5xl w-full mx-auto flex flex-col min-h-0 h-full">
          <div className="text-center shrink-0">
            <p className="label text-[9px] text-gold">Ashirwad</p>
            <h2 className="script text-2xl sm:text-3xl md:text-5xl text-maroon mt-1">Shower Your Blessings</h2>
            <Divider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 min-h-0 flex-1">
            <form onSubmit={submit} className="paper-card rounded-xl p-3 md:p-4 space-y-2 shrink-0">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={60}
                className="w-full bg-cream/60 border border-gold/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold text-maroon-deep placeholder:text-maroon/40" />
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Write your blessing…" rows={3} maxLength={400}
                className="w-full bg-cream/60 border border-gold/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold text-maroon-deep placeholder:text-maroon/40 resize-none" />
              {err && <p className="text-destructive text-xs italic">{err}</p>}
              <button type="submit" className="px-6 py-2 bg-maroon text-cream label text-[10px] rounded-full hover:bg-maroon-deep transition-colors">
                Send Blessing
              </button>
            </form>

            <div className="overflow-y-auto pr-1 space-y-2 min-h-0">
              <AnimatePresence initial={false}>
                {items.map((b, i) => (
                  <motion.article
                    key={`${b.name}-${i}`}
                    layout
                    initial={{ opacity: 0, y: 20, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="paper-card rounded-lg p-3 relative"
                  >
                    <span className="absolute top-2 right-3 text-gold text-lg">❋</span>
                    <p className="display italic text-xs md:text-sm text-maroon-deep/85 leading-snug pr-6">"{b.message}"</p>
                    <p className="mt-1 label text-[9px] text-gold">— {b.name}</p>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
