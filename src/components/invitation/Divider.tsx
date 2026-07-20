export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <span className="h-px w-24 gold-divider" />
      <span className="text-gold text-lg" aria-hidden>❋</span>
      {label && <span className="label text-xs text-maroon/70">{label}</span>}
      <span className="text-gold text-lg" aria-hidden>❋</span>
      <span className="h-px w-24 gold-divider" />
    </div>
  );
}
