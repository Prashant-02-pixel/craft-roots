import { Layout } from "@/components/craft/Layout";
import { experiences, images } from "@/data/experiences";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";

const ExperienceDetail = () => {
  const { slug } = useParams();
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) return <Navigate to="/experiences" replace />;

  return (
    <Layout transparentHeader>
      {/* HERO */}
      <section className="relative h-[88svh] min-h-[600px] overflow-hidden">
        <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover img-warm ken-burns" />
        <div className="absolute inset-0 bg-gradient-veil" />
        <div className="relative h-full container flex flex-col justify-end pb-16 md:pb-20">
          <p className="eyebrow text-sand">{exp.category} · {exp.city}</p>
          <h1 className="font-display text-background text-5xl md:text-8xl leading-[0.98] max-w-4xl mt-3">{exp.title}</h1>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 text-background/85 text-sm">
            <span className="flex items-center gap-2"><Clock size={14} /> {exp.duration}</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> {exp.city}, India</span>
            <span className="flex items-center gap-2"><Users size={14} /> Max 6 people</span>
            <span className="flex items-center gap-2">₹{exp.price.toLocaleString("en-IN")} per person</span>
          </div>
        </div>
      </section>

      {/* ARTISAN STORY */}
      <section className="bg-sand">
        <div className="container py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src={images.artisan} alt={exp.artisan} className="w-full aspect-[3/4] object-cover img-warm" loading="lazy" />
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <p className="eyebrow mb-4">The Artisan</p>
            <p className="font-display text-6xl md:text-8xl text-clay leading-none">{exp.artisanYears}+</p>
            <p className="text-ink-soft mt-1 tracking-widest uppercase text-xs">years of craftsmanship</p>
            <h2 className="font-display text-3xl md:text-5xl mt-8 leading-tight">{exp.artisan}</h2>
            <p className="mt-6 text-ink-soft leading-relaxed">{exp.story}</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="container py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">The Session</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">What you'll learn,<br /><em className="font-light">and take home.</em></h2>
        </div>
        <ol className="md:col-span-7 md:col-start-6 divide-y divide-border">
          {exp.learn.map((item, i) => (
            <li key={i} className="py-6 flex gap-6 items-baseline">
              <span className="font-display text-clay text-2xl w-8">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-2xl md:text-3xl leading-snug flex-1">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* SLOTS + BOOK */}
      <section className="bg-ink text-background">
        <div className="container py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <p className="eyebrow text-sand mb-4">Time Slots</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">Three hours, set aside <em className="font-light">just for you.</em></h2>
            <div className="flex flex-wrap gap-3 mt-8">
              {exp.slots.map((s) => (
                <span key={s} className="border border-background/30 px-4 py-2 text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8 bg-background text-ink p-8 md:p-10 shadow-lift">
            <p className="eyebrow mb-3">Today's Price</p>
            <p className="font-display text-5xl">₹{exp.price.toLocaleString("en-IN")}<span className="text-base text-ink-whisper"> / person</span></p>
            <ul className="mt-6 space-y-2 text-sm text-ink-soft">
              <li>· All materials, tools, and tea included</li>
              <li>· Take your finished piece home</li>
              <li>· Small groups — never more than six</li>
            </ul>
            <Link
              to={`/booking/${exp.slug}`}
              className="mt-8 flex items-center justify-between bg-clay text-clay-foreground px-6 py-4 hover:bg-ink transition-colors duration-500 group"
            >
              <span className="tracking-widest text-xs uppercase">Book Experience</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExperienceDetail;
