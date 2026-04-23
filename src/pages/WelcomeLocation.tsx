import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Navigation, Search, Check, Loader2, ArrowLeft } from "lucide-react";
import { useLocation as useAppLocation } from "@/context/LocationContext";
import { toast } from "sonner";

const WelcomeLocation = () => {
  const navigate = useNavigate();
  const { requestAuto, detecting, allCities, setCity, city } = useAppLocation();
  const [mode, setMode] = useState<"prompt" | "manual">("prompt");
  const [q, setQ] = useState("");

  const handleAllow = async () => {
    await requestAuto();
    toast.success(`Showing experiences near you`);
    navigate("/experiences", { replace: true });
  };

  const handlePick = (c: string) => {
    setCity(c, "manual");
    toast.success(`Exploring ${c}`);
    navigate("/experiences", { replace: true });
  };

  const filtered = allCities.filter((c) => c.toLowerCase().includes(q.toLowerCase()));

  return (
    <main className="min-h-svh bg-gradient-to-b from-sand/60 to-background grain flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {mode === "manual" && (
          <button
            onClick={() => setMode("prompt")}
            className="text-xs text-ink-soft hover:text-ink flex items-center gap-1.5 mb-6"
          >
            <ArrowLeft size={14} /> Back
          </button>
        )}

        <div className="bg-background border border-border rounded-sm shadow-[var(--shadow-lift)] p-8 sm:p-10 reveal-up">
          {mode === "prompt" ? (
            <>
              <div className="w-16 h-16 rounded-full bg-clay-soft flex items-center justify-center mb-6 mx-auto">
                <MapPin size={26} className="text-clay" />
              </div>
              <p className="eyebrow text-center mb-3">One last thing</p>
              <h1 className="font-display text-4xl sm:text-[2.6rem] leading-[1.05] text-center">
                Allow <em className="font-light">location access.</em>
              </h1>
              <p className="text-ink-soft text-sm leading-relaxed text-center mt-5 mb-9 max-w-xs mx-auto">
                We use your location to show nearby artisan experiences — workshops within reach, stories close to home.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleAllow}
                  disabled={detecting}
                  className="w-full flex items-center justify-center gap-2 bg-clay text-clay-foreground py-3.5 rounded-sm text-sm hover:bg-ink transition-colors disabled:opacity-60 shadow-[var(--shadow-soft)]"
                >
                  {detecting ? <Loader2 size={16} className="animate-spin" /> : <Navigation size={15} />}
                  {detecting ? "Detecting your city…" : "Allow access"}
                </button>
                <button
                  onClick={() => setMode("manual")}
                  className="w-full border border-border bg-background py-3.5 rounded-sm text-sm hover:border-clay hover:text-clay transition-colors"
                >
                  Select location manually
                </button>
              </div>

              <p className="text-[0.7rem] text-ink-whisper text-center mt-7 leading-relaxed">
                You can change your city anytime from the header.
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow mb-3">Choose your city</p>
              <h2 className="font-display text-3xl leading-tight mb-5">
                Where shall we <em className="font-light">begin?</em>
              </h2>

              <div className="flex items-center gap-2 border border-border rounded-sm bg-background px-3 focus-within:border-clay transition-colors">
                <Search size={15} className="text-ink-whisper" />
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search any Indian city…"
                  className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-ink-whisper"
                />
              </div>

              <ul className="mt-4 max-h-72 overflow-y-auto -mx-2">
                {filtered.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => handlePick(c)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-ink-soft hover:bg-sand/60 hover:text-ink rounded-sm"
                    >
                      <span className="flex items-center gap-2.5">
                        <MapPin size={13} className="text-clay/70" />
                        {c}
                      </span>
                      {c === city && <Check size={14} className="text-clay" />}
                    </button>
                  </li>
                ))}
                {filtered.length === 0 && (
                  <li className="px-4 py-8 text-center text-xs text-ink-whisper">
                    No matches. Try another city.
                  </li>
                )}
              </ul>
            </>
          )}
        </div>

        <p className="text-center text-xs text-ink-whisper mt-6 font-display italic">
          CraftRoots · Experience India through its artisans
        </p>
      </div>
    </main>
  );
};

export default WelcomeLocation;