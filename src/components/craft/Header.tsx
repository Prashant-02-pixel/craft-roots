import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { to: "/experiences", label: "Experiences" },
    { to: "/artisans", label: "Artisans" },
    { to: "/story", label: "Our Story" },
    { to: "/bookings", label: "My Bookings" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl md:text-[1.6rem] tracking-tight">CraftRoots</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-clay" />
          <span className="hidden sm:block eyebrow text-[0.6rem]">India</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? "text-clay" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="text-sm bg-ink text-background px-5 py-2.5 hover:bg-clay transition-colors duration-500"
          >
            Sign in
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="text-lg font-display">
                {l.label}
              </NavLink>
            ))}
            <Link to="/login" className="text-sm bg-ink text-background px-5 py-3 text-center mt-2">
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
