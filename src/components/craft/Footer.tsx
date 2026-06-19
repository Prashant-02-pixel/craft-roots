import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { Check, ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const feedbackSchema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(80, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(160),
  message: z.string().trim().min(5, "A few more words, please").max(800, "Letters under 800 characters please"),
});

export const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = feedbackSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
  <footer className="bg-ink text-background/80 mt-24">
    <div className="container py-20 grid md:grid-cols-12 gap-12 md:gap-16">
      <div className="md:col-span-5">
        <h3 className="font-display text-4xl md:text-5xl text-background leading-[1.05]">
          Slow craft,<br />far from anywhere.
        </h3>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/60">
          CraftRoots brings travelers to the workshops of India's master artisans —
          quietly, respectfully, and one pair of hands at a time.
        </p>
        <div className="mt-10">
          <p className="eyebrow text-background/50 mb-4">Wander</p>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm max-w-xs">
            <li><Link to="/experiences" className="hover:text-clay transition">Experiences</Link></li>
            <li><Link to="/artisans" className="hover:text-clay transition">Artisans</Link></li>
            <li><Link to="/story" className="hover:text-clay transition">Our Story</Link></li>
            <li><Link to="/artisan-portal" className="hover:text-clay transition">For Artisans</Link></li>
          </ul>
        </div>
      </div>

      <div className="md:col-span-6 md:col-start-7">
        <p className="eyebrow text-clay mb-3">Share Your Thoughts</p>
        <h4 className="font-display text-3xl md:text-4xl text-background leading-tight">
          Tell us about your experience, <em className="font-light">suggest a workshop,</em> or simply write to us.
        </h4>

        {sent ? (
          <div className="mt-8 border border-background/15 bg-background/5 backdrop-blur-sm p-7 flex gap-4 items-start">
            <span className="shrink-0 w-10 h-10 rounded-full bg-clay/20 text-clay flex items-center justify-center">
              <Check size={18} />
            </span>
            <div>
              <p className="font-display text-2xl text-background">Letter received.</p>
              <p className="text-sm text-background/60 mt-1 max-w-sm">
                Thank you for writing. We read every note by hand — we'll be in touch soon.
              </p>
              <button onClick={() => setSent(false)} className="mt-4 text-xs text-clay hover:underline underline-offset-4">
                Write another letter
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={80}
                className="bg-background/5 border border-background/15 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-clay transition-colors rounded-sm"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                maxLength={160}
                className="bg-background/5 border border-background/15 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-clay transition-colors rounded-sm"
              />
            </div>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="A few words from you…"
              rows={4}
              maxLength={800}
              className="w-full bg-background/5 border border-background/15 px-4 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-clay transition-colors rounded-sm resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 bg-clay text-clay-foreground px-6 py-3 text-sm tracking-wide hover:bg-background hover:text-ink transition-colors duration-300 rounded-sm group"
            >
              Send Letter
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-background/40">
        <p>© {new Date().getFullYear()} CraftRoots. Made with patient hands.</p>
        <p>Jaipur · Bengaluru · Pondicherry · Srinagar</p>
      </div>
    </div>
  </footer>
  );
};
