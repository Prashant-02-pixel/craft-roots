import { Layout } from "@/components/craft/Layout";
import { experiences } from "@/data/experiences";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const upcoming = [
  { exp: experiences[0], date: "12 May", slot: "11:00 — 14:00", guests: 2 },
  { exp: experiences[2], date: "28 May", slot: "15:00 — 18:00", guests: 1 },
];

const Bookings = () => (
  <Layout>
    <section className="container pt-16 md:pt-24 pb-12">
      <p className="eyebrow mb-4">My Bookings</p>
      <h1 className="font-display text-5xl md:text-7xl max-w-3xl leading-[1.02]">
        Your <em className="font-light">upcoming afternoons.</em>
      </h1>
    </section>

    <section className="container pb-24">
      <div className="space-y-6">
        {upcoming.map((b, i) => (
          <Link to={`/experience/${b.exp.slug}`} key={i} className="group grid md:grid-cols-12 gap-6 items-center bg-card border border-border p-4 md:p-6 hover-lift">
            <div className="md:col-span-3 aspect-[4/3] overflow-hidden">
              <img src={b.exp.image} alt={b.exp.title} className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="md:col-span-6">
              <p className="eyebrow mb-1.5">{b.exp.category} · {b.exp.city}</p>
              <h3 className="font-display text-2xl md:text-3xl group-hover:text-clay transition-colors">{b.exp.title}</h3>
              <p className="text-sm text-ink-soft mt-1">with {b.exp.artisan}</p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <p className="flex md:justify-end items-center gap-2 text-clay"><Calendar size={14} /> <span className="font-display text-xl">{b.date}</span></p>
              <p className="text-sm text-ink-soft mt-1">{b.slot} · {b.guests} guest{b.guests > 1 ? "s" : ""}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <p className="eyebrow mb-3">Past</p>
        <p className="font-display text-2xl text-ink-whisper">Your past sessions will appear here, like quiet entries in a small journal.</p>
      </div>
    </section>
  </Layout>
);

export default Bookings;
