import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-ink text-background/80 mt-24">
    <div className="container py-20 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <h3 className="font-display text-4xl md:text-5xl text-background leading-[1.05]">
          Slow craft,<br />far from anywhere.
        </h3>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/60">
          CraftRoots brings travelers to the workshops of India's master artisans —
          quietly, respectfully, and one pair of hands at a time.
        </p>
      </div>
      <div className="md:col-span-3 md:col-start-7">
        <p className="eyebrow text-background/50 mb-4">Wander</p>
        <ul className="space-y-3 text-sm">
          <li><Link to="/experiences" className="hover:text-clay transition">Experiences</Link></li>
          <li><Link to="/artisans" className="hover:text-clay transition">Artisans</Link></li>
          <li><Link to="/story" className="hover:text-clay transition">Our Story</Link></li>
          <li><Link to="/artisan-portal" className="hover:text-clay transition">For Artisans</Link></li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <p className="eyebrow text-background/50 mb-4">Letters</p>
        <p className="text-sm text-background/60 mb-4">A monthly note from a workshop somewhere in India.</p>
        <form className="flex border-b border-background/30 pb-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-transparent flex-1 text-sm placeholder:text-background/40 focus:outline-none"
          />
          <button className="text-sm text-clay">→</button>
        </form>
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
