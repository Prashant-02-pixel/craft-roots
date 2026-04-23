import { Layout } from "@/components/craft/Layout";
import { experiences } from "@/data/experiences";
import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";

const Booking = () => {
  const { slug } = useParams();
  const exp = experiences.find((e) => e.slug === slug);
  const [date, setDate] = useState<string>("");
  const [slot, setSlot] = useState<string>("");
  const [guests, setGuests] = useState(1);
  const [done, setDone] = useState(false);

  if (!exp) return <Navigate to="/experiences" replace />;

  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i + 1);
    return d;
  });

  const total = exp.price * guests;

  if (done) {
    return (
      <Layout>
        <section className="container py-32 max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-moss/15 text-moss flex items-center justify-center mx-auto"><Check /></div>
          <p className="eyebrow mt-8 mb-4">Confirmed</p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight">Your seat at the wheel <em className="font-light">is saved.</em></h1>
          <p className="mt-6 text-ink-soft">A note has been sent to your inbox with directions and what to bring. {exp.artisan} will be expecting you.</p>
          <Link to="/bookings" className="inline-block mt-10 bg-ink text-background px-8 py-4 text-sm tracking-widest uppercase hover:bg-clay transition-colors">View My Bookings</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-12 md:py-16">
        <Link to={`/experience/${exp.slug}`} className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-clay mb-10">
          <ArrowLeft size={14} /> Back to experience
        </Link>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Reserve</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">{exp.title}</h1>
            <p className="text-ink-soft mt-3">with {exp.artisan} · {exp.city}</p>

            {/* DATE */}
            <div className="mt-12">
              <p className="eyebrow mb-4">Choose a Date</p>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {dates.map((d) => {
                  const key = d.toISOString().slice(0, 10);
                  const active = date === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setDate(key)}
                      className={`p-3 text-center border transition ${
                        active ? "bg-ink text-background border-ink" : "border-border hover:border-clay text-ink"
                      }`}
                    >
                      <div className="text-[0.65rem] uppercase tracking-widest opacity-70">{d.toLocaleDateString("en", { weekday: "short" })}</div>
                      <div className="font-display text-2xl mt-1">{d.getDate()}</div>
                      <div className="text-[0.6rem] uppercase tracking-widest opacity-70">{d.toLocaleDateString("en", { month: "short" })}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SLOT */}
            <div className="mt-12">
              <p className="eyebrow mb-4">Time Slot</p>
              <div className="flex flex-wrap gap-3">
                {exp.slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSlot(s)}
                    className={`px-5 py-3 border transition ${
                      slot === s ? "bg-clay text-clay-foreground border-clay" : "border-border hover:border-clay"
                    }`}
                  >{s}</button>
                ))}
              </div>
            </div>

            {/* GUESTS */}
            <div className="mt-12">
              <p className="eyebrow mb-4">Guests</p>
              <div className="flex items-center gap-6">
                <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 border border-border hover:border-clay">−</button>
                <span className="font-display text-3xl w-8 text-center">{guests}</span>
                <button onClick={() => setGuests(Math.min(6, guests + 1))} className="w-10 h-10 border border-border hover:border-clay">+</button>
                <span className="text-sm text-ink-whisper ml-2">Maximum 6 per session</span>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-sand p-8 sticky top-28">
              <img src={exp.image} alt={exp.title} className="w-full aspect-[4/3] object-cover img-warm mb-6" />
              <p className="eyebrow mb-2">{exp.category}</p>
              <h3 className="font-display text-2xl leading-tight">{exp.title}</h3>
              <dl className="mt-6 space-y-3 text-sm border-t border-sand-deep pt-5">
                <div className="flex justify-between"><dt className="text-ink-soft">Date</dt><dd>{date ? new Date(date).toLocaleDateString("en", { day: "numeric", month: "long" }) : "—"}</dd></div>
                <div className="flex justify-between"><dt className="text-ink-soft">Time</dt><dd>{slot || "—"}</dd></div>
                <div className="flex justify-between"><dt className="text-ink-soft">Guests</dt><dd>{guests}</dd></div>
                <div className="flex justify-between"><dt className="text-ink-soft">₹{exp.price.toLocaleString("en-IN")} × {guests}</dt><dd>₹{total.toLocaleString("en-IN")}</dd></div>
              </dl>
              <div className="flex justify-between items-baseline border-t border-sand-deep pt-5 mt-5">
                <span className="eyebrow">Total</span>
                <span className="font-display text-3xl">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <button
                disabled={!date || !slot}
                onClick={() => setDone(true)}
                className="mt-6 w-full bg-ink text-background py-4 text-sm tracking-widest uppercase hover:bg-clay transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >Confirm Booking</button>
              <p className="text-xs text-ink-whisper mt-4 leading-relaxed">Free cancellation up to 48 hours before your session.</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
