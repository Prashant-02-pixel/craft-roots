import { useLocation as useAppLocation } from "@/context/LocationContext";
import { MapPin, X } from "lucide-react";

export const LocationPrompt = () => {
  const { promptOpen, requestAuto, dismissPrompt, detecting } = useAppLocation();

  if (!promptOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-ink/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-background w-full sm:max-w-md sm:rounded-sm border-t sm:border border-border shadow-[var(--shadow-lift)] p-7 sm:p-8 relative">
        <button onClick={dismissPrompt} className="absolute top-4 right-4 text-ink-soft hover:text-ink" aria-label="Close">
          <X size={18} />
        </button>
        <div className="w-12 h-12 rounded-full bg-clay-soft flex items-center justify-center mb-5">
          <MapPin size={20} className="text-clay" />
        </div>
        <p className="eyebrow mb-2">A small request</p>
        <h2 className="font-display text-3xl leading-tight mb-3">
          Discover artisan experiences <em className="font-light">near you.</em>
        </h2>
        <p className="text-ink-soft text-sm leading-relaxed mb-7">
          Share your location and we'll surface workshops in your city first. You can change cities anytime from the header.
        </p>
        <div className="flex gap-3">
          <button
            onClick={requestAuto}
            disabled={detecting}
            className="flex-1 bg-ink text-background text-sm py-3 hover:bg-clay transition-colors disabled:opacity-60"
          >
            {detecting ? "Detecting…" : "Use my location"}
          </button>
          <button onClick={dismissPrompt} className="px-5 text-sm text-ink-soft hover:text-ink border border-border">
            Choose manually
          </button>
        </div>
      </div>
    </div>
  );
};