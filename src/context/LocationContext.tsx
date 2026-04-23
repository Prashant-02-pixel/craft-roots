import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { cities as knownCities } from "@/data/experiences";

type LocationState = {
  city: string;
  source: "auto" | "manual" | "default";
  promptDismissed: boolean;
};

type Ctx = {
  city: string;
  source: LocationState["source"];
  setCity: (city: string, source?: "manual" | "auto") => void;
  requestAuto: () => Promise<void>;
  detecting: boolean;
  promptOpen: boolean;
  dismissPrompt: () => void;
  openPrompt: () => void;
  allCities: string[];
};

const STORAGE_KEY = "craftroots:location";
const DEFAULT_CITY = "Jaipur";

const LocationCtx = createContext<Ctx | null>(null);

// A loose mapping of geo → nearest supported city
const fallbackByRegion = (lat: number, lon: number): string => {
  const candidates: Array<{ city: string; lat: number; lon: number }> = [
    { city: "Jaipur", lat: 26.9124, lon: 75.7873 },
    { city: "Bengaluru", lat: 12.9716, lon: 77.5946 },
    { city: "Pondicherry", lat: 11.9416, lon: 79.8083 },
    { city: "Visakhapatnam", lat: 17.6868, lon: 83.2185 },
    { city: "Srinagar", lat: 34.0837, lon: 74.7973 },
    { city: "Goa", lat: 15.2993, lon: 74.124 },
    { city: "Delhi", lat: 28.6139, lon: 77.209 },
    { city: "Udaipur", lat: 24.5854, lon: 73.7125 },
  ];
  let best = candidates[0];
  let bestD = Infinity;
  for (const c of candidates) {
    const d = Math.hypot(c.lat - lat, c.lon - lon);
    if (d < bestD) { bestD = d; best = c; }
  }
  return best.city;
};

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<LocationState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return { city: DEFAULT_CITY, source: "default", promptDismissed: false };
  });
  const [detecting, setDetecting] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }, [state]);

  // First-visit prompt
  useEffect(() => {
    if (state.source === "default" && !state.promptDismissed) {
      const t = setTimeout(() => setPromptOpen(true), 700);
      return () => clearTimeout(t);
    }
  }, []); // eslint-disable-line

  const setCity = useCallback((city: string, source: "manual" | "auto" = "manual") => {
    setState((s) => ({ ...s, city, source }));
  }, []);

  const requestAuto = useCallback(async () => {
    if (!("geolocation" in navigator)) {
      setState((s) => ({ ...s, promptDismissed: true }));
      setPromptOpen(false);
      return;
    }
    setDetecting(true);
    return new Promise<void>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const city = fallbackByRegion(pos.coords.latitude, pos.coords.longitude);
          setState({ city, source: "auto", promptDismissed: true });
          setDetecting(false);
          setPromptOpen(false);
          resolve();
        },
        () => {
          setState((s) => ({ ...s, promptDismissed: true }));
          setDetecting(false);
          setPromptOpen(false);
          resolve();
        },
        { timeout: 8000, maximumAge: 600000 }
      );
    });
  }, []);

  const dismissPrompt = () => {
    setState((s) => ({ ...s, promptDismissed: true }));
    setPromptOpen(false);
  };

  const openPrompt = () => setPromptOpen(true);

  const allCities = Array.from(new Set([...knownCities, "Goa", "Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad"]));

  return (
    <LocationCtx.Provider value={{ city: state.city, source: state.source, setCity, requestAuto, detecting, promptOpen, dismissPrompt, openPrompt, allCities }}>
      {children}
    </LocationCtx.Provider>
  );
};

export const useLocation = () => {
  const ctx = useContext(LocationCtx);
  if (!ctx) throw new Error("useLocation must be used inside LocationProvider");
  return ctx;
};