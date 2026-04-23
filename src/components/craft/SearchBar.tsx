import { useState, useRef, useEffect, useMemo } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { experiences, categories, cities } from "@/data/experiences";

type Result = { type: "experience" | "category" | "city"; label: string; sub?: string; to: string };

export const SearchBar = ({ variant = "header" }: { variant?: "header" | "hero" }) => {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const nav = useNavigate();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const results: Result[] = useMemo(() => {
    if (!q.trim()) return [];
    const needle = q.toLowerCase();
    const out: Result[] = [];
    cities.filter((c) => c.toLowerCase().includes(needle)).slice(0, 3).forEach((c) =>
      out.push({ type: "city", label: c, sub: "City", to: `/experiences?city=${encodeURIComponent(c)}` })
    );
    categories.filter((c) => c.toLowerCase().includes(needle)).slice(0, 3).forEach((c) =>
      out.push({ type: "category", label: c, sub: "Craft", to: `/experiences?category=${encodeURIComponent(c)}` })
    );
    experiences
      .filter((e) => e.title.toLowerCase().includes(needle) || e.excerpt.toLowerCase().includes(needle))
      .slice(0, 5)
      .forEach((e) => out.push({ type: "experience", label: e.title, sub: `${e.category} · ${e.city}`, to: `/experience/${e.slug}` }));
    return out;
  }, [q]);

  const go = (to: string) => {
    setOpen(false);
    setQ("");
    nav(to);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results[0]) go(results[0].to);
  };

  const isHero = variant === "hero";

  return (
    <div className="relative w-full" ref={ref}>
      <form onSubmit={submit} className={`flex items-center gap-2 ${isHero ? "bg-background/95 backdrop-blur shadow-[var(--shadow-lift)] rounded-full px-5 py-3.5" : "bg-sand/60 hover:bg-sand transition-colors rounded-full px-4 py-2"}`}>
        <Search size={isHero ? 18 : 14} className="text-ink-soft shrink-0" />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder={isHero ? "Search experiences, crafts, or cities" : "Search crafts or cities"}
          className={`flex-1 bg-transparent outline-none placeholder:text-ink-whisper ${isHero ? "text-base" : "text-sm"}`}
        />
        {q && (
          <button type="button" onClick={() => setQ("")} className="text-ink-whisper hover:text-ink">
            <X size={14} />
          </button>
        )}
      </form>

      {open && q && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-background border border-border shadow-[var(--shadow-lift)] z-50 max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-5 py-6 text-sm text-ink-whisper text-center">No matches for "{q}"</p>
          ) : (
            <ul>
              {results.map((r, i) => (
                <li key={`${r.type}-${i}`}>
                  <button onClick={() => go(r.to)} className="w-full flex items-center justify-between px-5 py-3 hover:bg-sand/60 text-left">
                    <span className="text-sm text-ink">{r.label}</span>
                    <span className="eyebrow text-[0.6rem]">{r.sub}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};