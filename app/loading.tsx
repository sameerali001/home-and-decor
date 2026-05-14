export default function Loading() {
  return (
    <div className="section-shell py-24">
      <div className="glass-card overflow-hidden p-8">
        <div className="h-6 w-40 rounded-full bg-white/10" />
        <div className="mt-6 h-10 w-full rounded-2xl bg-gradient-to-r from-slate-200/10 via-cyan-300/10 to-slate-200/10 bg-[length:200%_100%] animate-shimmer" />
        <div className="mt-4 h-10 w-3/4 rounded-2xl bg-white/10 animate-pulse" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-32 rounded-3xl bg-white/10 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
