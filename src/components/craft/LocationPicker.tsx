import { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, Navigation, Check } from "lucide-react";
import { useLocation as useAppLocation } from "@/context/LocationContext";

export const LocationPicker = ({ compact = false }: { compact?: boolean }) => {
  const { city, source, setCity, requestAuto, detecting, allCities } = useAppLocation();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const filtered = allCities.filter((c) => c.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 ${compact ? "text-xs" : "text-sm"} text-ink-soft hover:text-ink transition-colors`}
      >
        <MapPin size={14} className="text-ink-soft" />
        <span className="text-ink">{city}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full mt-3 left-0 w-72 bg-background border border-border shadow-[var(--shadow-lift)] z-50">
          <div className="p-3 border-b border-border">
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search any Indian city…"
              className="w-full bg-transparent text-sm py-1.5 px-2 outline-none placeholder:text-ink-whisper"
            />
          </div>
          <button
            onClick={() => { void requestAuto(); setOpen(false); }}
            disabled={detecting}
            className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-sand/60 border-b border-border text-ink disabled:opacity-60"
          >
            <Navigation size={13} />
            {detecting ? "Detecting…" : "Use my current location"}
          </button>
          <ul className="max-h-64 overflow-y-auto">
            {filtered.map((c) => (
              <li key={c}>
                <button
                  onClick={() => { setCity(c, "manual"); setOpen(false); setQ(""); }}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-ink-soft hover:bg-sand/60 hover:text-ink"
                >
                  <span>{c}</span>
                  {c === city && <Check size={13} className="text-ink" />}
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-6 text-center text-xs text-ink-whisper">
                No matches. Try another city.
              </li>
            )}
          </ul>
          {source === "auto" && (
            <p className="px-4 py-2 text-[0.65rem] eyebrow text-ink-whisper border-t border-border">Auto-detected</p>
          )}
        </div>
      )}
    </div>
  );
};